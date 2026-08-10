#!/usr/bin/env python3
"""
build_structure.py
-------------------
Reads tools/book_structure.yaml and generates/updates the PreTeXt
source skeleton (chapters, sections, and placeholder pages) under
source/chapters/.

Safe to re-run. See the header comment in book_structure.yaml for
the ground rules. In short:

  - Chapter title files (chNN-title.ptx) and section index files
    (sec-*.ptx) are "index" files -- they only contain a <title> and
    a chain of <xi:include>s. These are ALWAYS regenerated so they
    stay in sync with the YAML.

  - Page files (the actual content) are only ever created if they do
    not already exist. A page listed with status "content" is assumed
    to already exist and is never touched. A page listed with status
    "placeholder" gets a minimal stub file created ONLY if that file
    isn't there yet -- so once you start writing real content into a
    placeholder, rerunning this script will leave it alone.

Usage:
    python3 tools/build_structure.py
"""

import pathlib
import sys

try:
    import yaml
except ImportError:
    sys.exit("Missing dependency: run `pip install --break-system-packages pyyaml`")

REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCE = REPO_ROOT / "source"
CONFIG = REPO_ROOT / "tools" / "book_structure.yaml"

CHAPTER_TITLE_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<!-- AUTO-GENERATED INDEX FILE, edit tools/book_structure.yaml and rerun
     tools/build_structure.py instead of hand-editing the include list. -->
<chapter xml:id="{chapter_id}" xmlns:xi="http://www.w3.org/2001/XInclude">
  <title>{chapter_title}</title>

{includes}
</chapter>
"""

CHAPTER_STUB_INTRO = """  <introduction>
    <p>
      Content for this chapter has not been written yet.
    </p>
  </introduction>

  <section xml:id="{chapter_id}-placeholder">
    <title>Placeholder</title>
    <p>
      <alert>Placeholder.</alert> This chapter has no sections yet. Add
      real sections/pages to this chapter in tools/book_structure.yaml and
      rerun tools/build_structure.py.
    </p>
  </section>
"""

SECTION_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<!-- AUTO-GENERATED INDEX FILE, edit tools/book_structure.yaml and rerun
     tools/build_structure.py instead of hand-editing the include list. -->
<section xml:id="{section_id}" xmlns:xi="http://www.w3.org/2001/XInclude">
  <title>{section_title}</title>

{includes}
</section>
"""

PAGE_STUB_TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<!-- PLACEHOLDER PAGE, replace this content, and this file will no
     longer be touched by tools/build_structure.py.
     Note: PreTeXt has no page element; a "page" in this book is just
     a section nested inside a chapter's section (PreTeXt infers the
     heading level from nesting depth), matching the math250 convention. -->
<section xml:id="{page_id}" xmlns:xi="http://www.w3.org/2001/XInclude">
  <title>{page_title}</title>

  <p>
    <alert>Placeholder.</alert> Content for this page has not been written yet.
  </p>
</section>
"""


def load_config():
    with open(CONFIG) as f:
        return yaml.safe_load(f)


def write_file(path: pathlib.Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print(f"  wrote {path.relative_to(REPO_ROOT)}")


def build_chapter(chapter, chapter_num):
    chapter_dir = SOURCE / "chapters" / f"chapter{chapter_num}"
    sections = chapter.get("sections") or []

    if not sections:
        # Bare stub chapter: title file only, no real sections yet, but a
        # placeholder section so the file is still schema-valid.
        content = CHAPTER_TITLE_TEMPLATE.format(
            chapter_id=chapter["id"],
            chapter_title=chapter["title"],
            includes=CHAPTER_STUB_INTRO.format(chapter_id=chapter["id"]),
        )
        write_file(chapter_dir / f"ch{chapter_num}-title.ptx", content)
        return

    include_lines = []
    for section in sections:
        section_slug = section["id"]
        rel_path = f"./sections/{section_slug}.ptx"
        include_lines.append(f'  <xi:include href="{rel_path}" />')
        build_section(chapter_dir, section)

    content = CHAPTER_TITLE_TEMPLATE.format(
        chapter_id=chapter["id"],
        chapter_title=chapter["title"],
        includes="\n".join(include_lines),
    )
    write_file(chapter_dir / f"ch{chapter_num}-title.ptx", content)


def build_section(chapter_dir, section):
    section_slug = section["id"]
    pages = section.get("pages") or []

    include_lines = []
    for page in pages:
        page_file = page.get("file") or f"{page['id']}.ptx"
        rel_path = f"./{section_slug}/{page_file}"
        include_lines.append(f'  <xi:include href="{rel_path}" />')
        build_page(chapter_dir / "sections" / section_slug, page)

    content = SECTION_TEMPLATE.format(
        section_id=section_slug,
        section_title=section["title"],
        includes="\n".join(include_lines) or "  <!-- no pages yet. -->",
    )
    write_file(chapter_dir / "sections" / f"{section_slug}.ptx", content)


def build_page(page_dir, page):
    page_file = page.get("file") or f"{page['id']}.ptx"
    page_path = page_dir / page_file

    if page.get("status") == "content":
        if not page_path.exists():
            print(f"  !! WARNING: {page_path.relative_to(REPO_ROOT)} is marked "
                  f"'content' in the YAML but the file doesn't exist yet.")
        else:
            print(f"  ok (untouched, has content) {page_path.relative_to(REPO_ROOT)}")
        return

    if page_path.exists():
        print(f"  ok (untouched, already exists) {page_path.relative_to(REPO_ROOT)}")
        return

    content = PAGE_STUB_TEMPLATE.format(page_id=page["id"], page_title=page["title"])
    write_file(page_path, content)


def build_main_includes(chapters):
    """Print the xi:include lines main.ptx needs, for a quick sanity check."""
    print("\nmain.ptx should include (in order):")
    for i, chapter in enumerate(chapters, start=1):
        print(f'  <xi:include href="./chapters/chapter{i}/ch{i}-title.ptx" />')


def main():
    config = load_config()
    chapters = config["chapters"]

    print(f"Building structure from {CONFIG.relative_to(REPO_ROOT)}\n")
    for i, chapter in enumerate(chapters, start=1):
        print(f"Chapter {i}: {chapter['title']}")
        build_chapter(chapter, i)
        print()

    build_main_includes(chapters)


if __name__ == "__main__":
    main()
