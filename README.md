# Math 486 — Game Theory: Reading Companion

A PreTeXt-built reading companion for Penn State's Math 486 (Game Theory),
built around the required textbook *Game Theory in Action* by Schecter and
Gintis. This is **not** a self-contained textbook like a typical PreTeXt
book — the book carries the content. This project's job is to tell students
*how* to read it: what to read carefully, what to skim, where to pause and
think, and where to reflect in writing.

This repo was scaffolded from an existing Math 250 (ODEs) PreTeXt course and
adapted for this very different pedagogical model. See `tools/` below for how
new content gets added.

## Quick start

```bash
pip install pretext
pretext build web      # or: pretext view web
```

(If you're using the GitHub Codespace / devcontainer, PreTeXt is already
installed.)

## Repo structure

```
source/
  main.ptx           - top-level book file, includes all chapters
  docinfo.ptx         - macros + book-wide conventions (READ THIS FIRST)
  frontmatter.ptx      - author info, "How to Use This Guide" preface
  backmatter.ptx
  chapters/
    chapter1/
      ch1-title.ptx           - chapter index (auto-generated, don't hand-edit)
      sections/
        sec-what-is-a-game.ptx        - section index (auto-generated)
        sec-what-is-a-game/
          page1-what-is-a-game.ptx    - actual page content (hand-written)
    chapter2/ ... chapter10/          - placeholder stub chapters

assets/
  ch1-graph/           - interactive HTML/SVG widgets used by chapter 1 pages

tools/
  book_structure.yaml   - the book's outline: chapters -> sections -> pages
  build_structure.py    - generates/updates the .ptx skeleton from the YAML
```

## How chapters/sections/pages work here

Chapters do **not** have to line up with the textbook's own chapter
numbers, and sections don't have to line up with the book's section
numbers either — we intentionally decoupled these, since the *course's*
week-by-week pacing ("Lesson 1", "Lesson 2", ...) might change from
semester to semester (e.g. a 13-week fall/spring version vs. a 10-week
summer version), while the underlying content shouldn't have to move
around every time the schedule changes.

A "page" (what a student experiences as one sitting) is implemented the
same way the Math 250 course does it: as a `<section>` nested inside
another `<section>`. PreTeXt infers the heading/chunking level from
nesting depth, so you never need `<subsection>`/`<subsubsection>` — just
keep nesting `<section>`.

**Note on schema validation:** if you run `pretext validate`, you'll see
"`<section>` is not allowed here" errors for every page. This is expected
— the Math 250 course has the exact same pattern throughout (146 identical
messages in that repo) and builds/deploys fine in production. `pretext
build` (without explicit `validate`) does not enforce this, and it hasn't
caused any real problems for the existing course. Not a bug to fix.

The **lesson schedule** (which pages map to which week, for whichever
pacing you're using) will live as a separate table, not baked into the
chapter/section structure — see the note in the YAML.

## Adding content: the generator workflow

`tools/book_structure.yaml` is the single source of truth for the book's
outline. Edit it, then run:

```bash
python3 tools/build_structure.py
```

This is **safe to re-run** as many times as you want:

- Chapter title files and section index files (the "index" files, which
  just contain a `<title>` and a chain of `<xi:include>`s) are always
  regenerated, so they stay in sync with the YAML automatically — you
  never hand-edit an include list.
- Page files are only created if they don't already exist. A page marked
  `status: content` in the YAML is assumed to already have real writing in
  it and is never touched. A page marked `status: placeholder` gets a
  minimal stub — and once you've started writing real content into that
  stub file, **rerunning the script will leave it alone** (it checks for
  file existence, not the status label, before ever writing a page file).

**Typical workflow when adding a new page:**

1. Add an entry to `tools/book_structure.yaml` under the right chapter/section,
   with `status: placeholder`.
2. Run `python3 tools/build_structure.py` — this creates the stub file and
   wires up all the `xi:include`s.
3. Write the real content into that stub file.
4. (Optional) Flip its `status` to `content` in the YAML, just for your own
   bookkeeping — the script behaves the same either way once the file exists.

**Typical workflow when adding a whole new chapter's worth of structure**
(e.g. finally planning out Chapter 3): just flesh out that chapter's
`sections` list in the YAML (it starts as `sections: []`, a bare stub) and
rerun the script. Nothing about chapters 1, 2, 4, 5... is touched.

## Conventions used throughout the book

See the comment block at the top of `source/docinfo.ptx` for the full
canonical explanation. Summary:

1. **Reading directive** — a `<task xml:id="read-...">` block that tells
   students what to read and how (carefully vs. skim). Always placed right
   before the reading it refers to.
2. **Reflection** — a `<task xml:id="reflect-..." type="reflection">`
   block: a written, ungraded, reflective question. Used for "how do you
   feel about this" moments, not comprehension checks.
3. **Checkpoint** — a normal `<exercise xml:id="check-...">` (or, for
   denser vocab/definition lists, a small self-contained HTML widget in
   `assets/` with embedded multiple-choice self-checks, like
   `assets/ch1-graph/vocab-accordion-1-2.html`). Used for "did you catch
   the key idea" moments.

`source/chapters/chapter1/sections/sec-what-is-a-game/page1-what-is-a-game.ptx`
is a fully worked example using all three, plus an interactive toggle-layer
game tree diagram (`assets/ch1-graph/tree-toggle-1-1.html`) — use it as the
template for future pages.

## Notation

The course deliberately sticks to the textbook's own (informal but
precise) notation throughout, rather than introducing a separate, more
formal notational layer. Homework problems that need a bit of formalism
the book doesn't spell out (e.g. counting `|S_i|`) are rewritten to ask
the same thing in the book's own language, decided case-by-case as each
homework gets written.
