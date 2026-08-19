var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Guide",
  "body": " How to Use This Guide  This is not a textbook. Our required text is Game Theory in Action by Stephen Schecter and Herbert Gintis, and that book carries the actual content of the course. What you're looking at here is a companion that tells you how to read it: what to read carefully, what to skim, where to pause and think before reading on, and places to reflect on an idea in your own words.  Each page in this guide corresponds to a short chunk of reading. Here's how to work through a page:  Read the framing paragraph at the top before opening the book — it tells you what to watch for.  Follow the reading directive: it will tell you which sections to read and how closely.  When you hit a \"pause and think\" or reflection prompt, actually stop and engage with it before moving on. These aren't busywork — they're where a lot of the real learning happens.  Checkpoint questions are quick, low-stakes checks that you caught the key idea. If one surprises you, it's worth rereading that bit of the book.     Note. This guide will be built out gradually over the semester, a page at a time, alongside the course itself.  "
},
{
  "id": "page1-what-is-a-game",
  "level": "1",
  "url": "page1-what-is-a-game.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is an Extensive Form Game?",
  "body": " What is an Extensive Form Game?  Start by reading the following section in Game Theory in Action ! We will break down some of the ideas in the readings in these notes, but the reading itself is central to learning the material.   Section 1.1, Tony's Accident   Read Section 1.1   Here you will see our first example of a game! You will analyze the game with a game tree    Now you should have a good feel for how a game tree represents in a game. Before we can really do more, the book introduces a lot of notation and vocabulary in section 1.2.   Section 1.2, Games in Extensive Form with Complete Information   Read Section 1.2.   There is a lot to parse here! After this reading we will summarize many of the terms.   All of this is really just formalizing the type of game we're studying right now: an extensive form game with complete information .  \"Extensive form\" is really just the name for representing a game as a tree , like you saw in Figure 1.2. There's a single starting point (the root node), where the first player to move makes their choice. Each choice branches out to a new point in the tree, every branch eventually dead-ends at a terminal node, where the game is over and everyone gets their payoff.  \"Complete information\" means everyone knows the structure of the entire tree ahead of time, including the pay-offs. If in the 1.1 example, Tony didn't know how much the repair would cost Vic, then the game would have incomplete information!  To make that concrete: imagine Tony has no idea whether the repair is actually worth $20 to Vic or $200. Tony can still see the tree's shape , the actions, the order of play, but he can't fill in Vic's payoffs with any real confidence. That's a game with incomplete information. It's still a perfectly good tree, and Tony and Vic are still playing a real game, but Tony is missing a piece of the picture that complete information would have handed him for free. (This is exactly the kind of situation Chapter 4 is built around.)  Below is the second game tree from the book (Figure 1.2), where Tony has a third option: send $40 up front and the rest once Vic provides a receipt. Use the buttons to explore what the different pieces of the tree are called.   An interactive version of Figure 1.2. Toggle between plain view, root and terminal nodes, a sample path through the tree, and the payoffs at each terminal node.    For reference, here's the precise vocabulary from 1.2, tied back to the diagram above.   Key vocabulary from Section 1.2.    "
},
{
  "id": "fig-tree-toggle-1-1",
  "level": "2",
  "url": "page1-what-is-a-game.html#fig-tree-toggle-1-1",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " An interactive version of Figure 1.2. Toggle between plain view, root and terminal nodes, a sample path through the tree, and the payoffs at each terminal node.   "
},
{
  "id": "fig-vocab-accordion-1-2",
  "level": "2",
  "url": "page1-what-is-a-game.html#fig-vocab-accordion-1-2",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Key vocabulary from Section 1.2.   "
},
{
  "id": "page2-strategies-and-backward-induction",
  "level": "1",
  "url": "page2-strategies-and-backward-induction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Strategies and Backward Induction",
  "body": " Strategies and Backward Induction   Section 1.3, Strategies   Read Section 1.3.   This section introduces the idea of a strategy. Basically, a strategy for a player is a plan that maps out what decision they will make in any possible situation of a game.   The main thing to keep in mind is that a strategy isn't simply what a sequence of moves a player does. A strategy says what a player would do at any given node (even though many nodes may never even be reached when carrying out an instance of the game). You can think of it as a plan a player makes ahead of time, considering every decision the other player makes . Once you know all players' strategies, you will know how the game will pan out!  Let's quickly test your understanding of what a strategy is.    Look at the last game tree in section 1.1 (figure 1.2). Which of these actually counts as a strategy for Vic?      Vic determines that Tony will make the rational decision of sending $40, and in this case Vic will choose \"don't repair.\"    Not quite, this only says what Vic does in one situation. A strategy has to cover both of Vic's nodes.      Vic chooses \"repair\" if Tony demands a receipt, and chooses \"repair\" if Tony sends $40.    Correct, this specifies an action at each of Vic's two nodes, which is exactly what a strategy requires.      Here's the book's table of Vic's four strategies:    Vic's strategy  If Tony demands receipt  If Tony sends $40     repair  repair     repair  don't repair     don't repair  repair     don't repair  don't repair    Once we have both players' strategies, we know exactly what path through the tree will occur, and therefore we know everyone's payoff. The book writes this as : the payoff to player when player 1 plays strategy and player 2 plays strategy .  Here is the tree from the book that you'll need for the checkpoint that follows.   Reminder: the interactive version of Figure 1.2 from the previous page.      Suppose Tony plays (send $80) and Vic plays (don't repair if demand receipt, repair if send $40). What is ?  You can view the payoffs in the tree above by clicking \"Show payoffs.\"      (−80, 80)    Correct. Tony's move ends the game immediately, before Vic ever gets to act, so Vic's strategy doesn't end up mattering here, even though it's still a fully specified strategy.      (−80, 20)    Not quite. That pair belongs to a path where Vic actually gets to act. Check which terminal node \"send $80\" leads to.      Can't be determined without knowing what Vic actually does.    Not quite, and worth noticing why: Vic's strategy IS already fully specified, that's exactly the point of a strategy being a complete plan. You don't need to guess what Vic \"actually\" does; his strategy already says what he'd do everywhere.      We're about ready to move onto the next section, where we learn backward induction! We will try it on our own first before the reading. Now we assume every player is rational: if one action gives them a strictly better payoff than another (assuming the other player is also rational!), they take it. Being rational doesn't mean getting your best possible outcome, it means getting the best outcome still available once you account for what a rational opponent will actually do. So, players must actually consider what rational moves happen further in the future before considering their current move.  We look at this idea in the following interactive, where we consider what happens at each node, starting with the last possible move, and working backward. There are three steps to work through.    Work through Tony's Accident one decision at a time, starting from the nodes closest to the end.    The method you just worked through is called backward induction . You started at the nodes closest to the end (Vic's two choices) and worked backward toward the root, one resolved node at a time.  Now read 1.4, where the book makes this precise!   Section 1.4, Backward Induction   Read Section 1.4.   When performing backward induction, you assume all players play rationally. Since any decision a rational player makes depends on future decisions, we determine what happens at the last nodes first, working backward to figure out the decision at each previous node.   Let's take another look at one subtle point the book mentions:    When can backward induction fail?      When a player has more strategies available than the other player.    Not quite, this is completely normal and doesn't cause any problem for the procedure.      When, at some step of backward induction, two different moves at that node would give the deciding player the exact same (best) payoff.    Correct. This can happen at the very first step, at an original terminal node (this is exactly Figure 1.6 in the book), or at a later step, at a node that only became a stand-in terminal after an earlier round of pruning. Either way, once there's a tie, the procedure can't tell you which move the player would actually pick.      When the tree has more than five terminal nodes.    Not quite, tree size alone doesn't cause any problem.      Alright, there we have it! A strategy is a full plan covering every node with a player's name on it, and backward induction is how you find the strategy a rational player would actually use, starting from the end and working back.  "
},
{
  "id": "check-what-is-a-strategy",
  "level": "2",
  "url": "page2-strategies-and-backward-induction.html#check-what-is-a-strategy",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": "  Look at the last game tree in section 1.1 (figure 1.2). Which of these actually counts as a strategy for Vic?      Vic determines that Tony will make the rational decision of sending $40, and in this case Vic will choose \"don't repair.\"    Not quite, this only says what Vic does in one situation. A strategy has to cover both of Vic's nodes.      Vic chooses \"repair\" if Tony demands a receipt, and chooses \"repair\" if Tony sends $40.    Correct, this specifies an action at each of Vic's two nodes, which is exactly what a strategy requires.     "
},
{
  "id": "fig-tree-toggle-1-1-reminder",
  "level": "2",
  "url": "page2-strategies-and-backward-induction.html#fig-tree-toggle-1-1-reminder",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Reminder: the interactive version of Figure 1.2 from the previous page.   "
},
{
  "id": "check-strategy-payoff",
  "level": "2",
  "url": "page2-strategies-and-backward-induction.html#check-strategy-payoff",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose Tony plays (send $80) and Vic plays (don't repair if demand receipt, repair if send $40). What is ?  You can view the payoffs in the tree above by clicking \"Show payoffs.\"      (−80, 80)    Correct. Tony's move ends the game immediately, before Vic ever gets to act, so Vic's strategy doesn't end up mattering here, even though it's still a fully specified strategy.      (−80, 20)    Not quite. That pair belongs to a path where Vic actually gets to act. Check which terminal node \"send $80\" leads to.      Can't be determined without knowing what Vic actually does.    Not quite, and worth noticing why: Vic's strategy IS already fully specified, that's exactly the point of a strategy being a complete plan. You don't need to guess what Vic \"actually\" does; his strategy already says what he'd do everywhere.     "
},
{
  "id": "fig-backward-induction-interactive",
  "level": "2",
  "url": "page2-strategies-and-backward-induction.html#fig-backward-induction-interactive",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Work through Tony's Accident one decision at a time, starting from the nodes closest to the end.   "
},
{
  "id": "page2-strategies-and-backward-induction-15",
  "level": "2",
  "url": "page2-strategies-and-backward-induction.html#page2-strategies-and-backward-induction-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "backward induction "
},
{
  "id": "check-backward-induction-failure",
  "level": "2",
  "url": "page2-strategies-and-backward-induction.html#check-backward-induction-failure",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": "  When can backward induction fail?      When a player has more strategies available than the other player.    Not quite, this is completely normal and doesn't cause any problem for the procedure.      When, at some step of backward induction, two different moves at that node would give the deciding player the exact same (best) payoff.    Correct. This can happen at the very first step, at an original terminal node (this is exactly Figure 1.6 in the book), or at a later step, at a node that only became a stand-in terminal after an earlier round of pruning. Either way, once there's a tie, the procedure can't tell you which move the player would actually pick.      When the tree has more than five terminal nodes.    Not quite, tree size alone doesn't cause any problem.     "
},
{
  "id": "page3-threats-promises",
  "level": "1",
  "url": "page3-threats-promises.html",
  "type": "Section",
  "number": "1.3",
  "title": "Threats and Promises",
  "body": " Threats and Promises  We just spent a lot of time building up some of the notation so let's get back to looking at an example. The following example is the \"Big and Little Monkey\" example found in 1.5 in the book. Before we have you read it, you should explore the game in the interactive below.  First, the basic setup (there will be more context given in the reading later): There are two hungry monkeys (Big Monkey and Little Monkey), and a coconut hanging from a branch that both monkeys want to eat. Someone has to climb to shake it down if they want ot eat it! Big Monkey decides first: wait or climb. Then Little Monkey decides: wait or climb. The net payoffs for every combination are shown at the bottom of the tree below (in the reading you will get more context for why each pay-off is the number in the tree).  Like before, we'll assume both players are rational. Perform backward induction on the tree below to see what the resulting pay-offs are!   Work through Big Monkey and Little Monkey one decision at a time, starting from the nodes closest to the end.    What you just did is backward induction again, on a brand new tree. Now read 1.5, where the book fills in the full story of the game.   Section 1.5, Big Monkey and Little Monkey 1   Read Section 1.5.   This will give a fuller context to the example you just worked through! It should be pretty quick.   Sometimes only working through the backwards induction obscures some of the intuition behind the result. Let's consider the following question.    Both monkeys would rather wait while the other climbs. So what is it about the setup that lets Big Monkey be the one who gets to wait, while Little Monkey ends up climbing?      Big Monkey is simply bigger and stronger, so Little Monkey has no real choice.    Not quite, size determines the climbing cost, not who gets to decide what.      Big Monkey moves first, so his choice to wait is already locked in by the time Little Monkey has to decide. Little Monkey is responding to an already-fixed situation, and climbing is his best remaining option given that.    Correct. It's specifically about move order, not raw payoff size. If the order were reversed and Little Monkey moved first, he'd be the one getting to wait instead.      Big Monkey's payoffs happen to be higher across the whole table, so who moves when doesn't really matter.    Not quite, flip the move order and the outcome flips too, even though the payoff table stays exactly the same.      Now clearly Little Monkey is in a sub-optimal position here. There is more nuance to a game strategy that we need consider. In the next section the book explores \"threats\" and \"promises\" in games. If little monkey has a reputation for always waiting, will Big Monkey still wait? On the other hand, if little monkey likes to collaborate and climb together, will Big Monkey be on board? Explore both options by pressing the \"threat\" and \"promise\" buttons in the interactive below!   See what happens when Little Monkey commits to a different move than his rational one.      If Little Monkey threatens to wait no matter what, what does a rational Big Monkey do, and what's the final outcome?      Big Monkey still waits, and since Little Monkey follows through on the threat, they get (0, 0).    Not quite, this misses the whole point of a credible threat: it's designed to change Big Monkey's mind, so it never actually has to be carried out.      Big Monkey climbs instead, avoiding the threatened (0, 0). The game ends (4, 4).    Correct. Believing the threat, Big Monkey compares a locked-in 0 (waiting) against 4 (climbing), and climbs.      Nothing changes, Big Monkey still gets 9, since threats don't affect a rational player.    Not quite, threats work precisely because they change what's rational for the other player to do.        If Little Monkey promises to climb if Big Monkey climbs, what does a rational Big Monkey do, and what's the final outcome?      Big Monkey climbs, since the promise makes climbing more attractive (5 beats the old 4). The game ends (5, 3).    Not quite, and this is the tempting trap: Big Monkey isn't comparing 5 to the old 4, he's comparing 5 to what waiting still gets him, 9.      Big Monkey still waits, since even with the promise, 9 beats 5. The game ends (9, 1), unchanged.    Correct. The promise is real, Little Monkey genuinely would climb if Big Monkey did, but it doesn't end up mattering, since Big Monkey never climbs in the first place.      The promise breaks the game, since it contradicts backward induction.    Not quite, nothing breaks. Little Monkey is just choosing a worse move for himself, which is always allowed, it just doesn't always change the outcome.       Section 1.6, Threats, Promises, Commitments   Read Section 1.6 .  This reading formalizes the idea of a threat and promise more. It's easy to get lost in the notation, so keep the following in mind:   In both threats in promises, player 1 is committing to an \"irrational\" move for them. It is a move that makes their pay-off at this specific node worse, in hopes that this changes players 2 decision earlier in the tree.    Player 1 gives a threat at given node if they commit to a move that makes the pay-off worse for player 2 at this node.    Player 1 gives a promise at given node if they commit to a move that makes the pay-off better for player 2 at this node.     The book gives this a precise, general definition using for the rational payoffs and for the committed payoffs, at whichever node the commitment happens (the book calls it node ). Explore the same diagram again below, this time labeled with that notation.  In the diagram below, the player making the threat or promise (Little Monkey) is player 2 . So the roles of player 1 and player 2 are reversed from the definition in the book, which assumes player 1 is the one making the threat.   The same demonstration, now labeled with the book's node and payoff notation.    "
},
{
  "id": "fig-bmlm-interactive",
  "level": "2",
  "url": "page3-threats-promises.html#fig-bmlm-interactive",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Work through Big Monkey and Little Monkey one decision at a time, starting from the nodes closest to the end.   "
},
{
  "id": "check-why-big-monkey-waits",
  "level": "2",
  "url": "page3-threats-promises.html#check-why-big-monkey-waits",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": "  Both monkeys would rather wait while the other climbs. So what is it about the setup that lets Big Monkey be the one who gets to wait, while Little Monkey ends up climbing?      Big Monkey is simply bigger and stronger, so Little Monkey has no real choice.    Not quite, size determines the climbing cost, not who gets to decide what.      Big Monkey moves first, so his choice to wait is already locked in by the time Little Monkey has to decide. Little Monkey is responding to an already-fixed situation, and climbing is his best remaining option given that.    Correct. It's specifically about move order, not raw payoff size. If the order were reversed and Little Monkey moved first, he'd be the one getting to wait instead.      Big Monkey's payoffs happen to be higher across the whole table, so who moves when doesn't really matter.    Not quite, flip the move order and the outcome flips too, even though the payoff table stays exactly the same.     "
},
{
  "id": "fig-threat-promise-demo",
  "level": "2",
  "url": "page3-threats-promises.html#fig-threat-promise-demo",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " See what happens when Little Monkey commits to a different move than his rational one.   "
},
{
  "id": "check-threat-outcome",
  "level": "2",
  "url": "page3-threats-promises.html#check-threat-outcome",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": "  If Little Monkey threatens to wait no matter what, what does a rational Big Monkey do, and what's the final outcome?      Big Monkey still waits, and since Little Monkey follows through on the threat, they get (0, 0).    Not quite, this misses the whole point of a credible threat: it's designed to change Big Monkey's mind, so it never actually has to be carried out.      Big Monkey climbs instead, avoiding the threatened (0, 0). The game ends (4, 4).    Correct. Believing the threat, Big Monkey compares a locked-in 0 (waiting) against 4 (climbing), and climbs.      Nothing changes, Big Monkey still gets 9, since threats don't affect a rational player.    Not quite, threats work precisely because they change what's rational for the other player to do.     "
},
{
  "id": "check-promise-outcome",
  "level": "2",
  "url": "page3-threats-promises.html#check-promise-outcome",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  If Little Monkey promises to climb if Big Monkey climbs, what does a rational Big Monkey do, and what's the final outcome?      Big Monkey climbs, since the promise makes climbing more attractive (5 beats the old 4). The game ends (5, 3).    Not quite, and this is the tempting trap: Big Monkey isn't comparing 5 to the old 4, he's comparing 5 to what waiting still gets him, 9.      Big Monkey still waits, since even with the promise, 9 beats 5. The game ends (9, 1), unchanged.    Correct. The promise is real, Little Monkey genuinely would climb if Big Monkey did, but it doesn't end up mattering, since Big Monkey never climbs in the first place.      The promise breaks the game, since it contradicts backward induction.    Not quite, nothing breaks. Little Monkey is just choosing a worse move for himself, which is always allowed, it just doesn't always change the outcome.     "
},
{
  "id": "fig-threat-promise-demo-detail",
  "level": "2",
  "url": "page3-threats-promises.html#fig-threat-promise-demo-detail",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " The same demonstration, now labeled with the book's node and payoff notation.   "
},
{
  "id": "page4-ultimatum-and-centipede",
  "level": "1",
  "url": "page4-ultimatum-and-centipede.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Ultimatum Game and the Centipede Game",
  "body": " The Ultimatum Game and the Centipede Game  On this page we'll look at two more examples. Both can be analyzed with backward induction. However, we will see some counterintuitive results that have us considering some nuanced points about backward induction. While backward induction might give us the truly \"rational\" solution, there are often other considerations when people choose their strategies!   Section 1.7, The Ultimatum Game   Read Section 1.7.   The backward induction here is quick, but it results in a solution that you might not feel great about!  Let's reflect on this further:   Backward induction says Player 2 should accept any positive offer, even $1, since something beats nothing. So Player 1 should offer as little as possible to maximize their earnings. But in real experiments, people routinely reject offers below around $40. What's the best explanation for this?      Player 2 doesn't understand the rules of the game.    Not quite, this behavior shows up consistently even when players clearly understand the game. Something else is going on.      A low offer feels unfair, and people are often willing to sacrifice their own payoff to punish someone treating them unfairly.    Correct. This connects back to Section 1.6: rejecting a low offer functions like an implied threat, punishing an unfair offer at a real cost to yourself. It also suggests that \"payoff\" might mean more than just dollars, being treated fairly can be worth something too.      Player 2 is simply being irrational, and there's no way to make sense of this within game theory.    Not quite. The book suggests a way to make this rational again, by reconsidering what actually belongs in Player 2's payoff.      The next section explores a game that's a bit more interesting.  Here's the setup for Section 1.8's game: Two players, Mutt and Jeff, start with $2 each and take turns. On your turn (let's say you're Mutt), you can cooperate (the game master hands you $1) or defect (you steal $2 from the other player). The game ends the moment someone defects, or once both players have reached $100, whichever comes first.   Go through the interactive below to play the game (it doesn't go through all rounds!).   If you chose to cooperate every round, you'll notice that Jeff defected on round 98. This ensures he'll get $101, since he knows that if he waits and cooperates instead, you (being rational) would defect right back at him on the very next move for $100, leaving him with only $99. Knowing Jeff will think this way, you realize you would have been better off defecting yourself back on round 97, walking away with $100 instead of $98. Would this change Jeff's strategy if he suspects you'd reason this far ahead?   Section 1.8, Rosenthal's Centipede Game   Read Section 1.8.   This section finds the rational strategy for both players using backward induction. You can think about this first on your own! Are you surprised by the result?   So, continuing the logic we realized in the paragraph before the reading, we find the rational strategy would be for you to defect on the first (!!!) round. Leaving you with four dollars, and Jeff with nothing. In the following question, consider why it might be a better strategy to cooperate for longer.    We just saw that the \"rational\" strategy, found through backward induction, is for you to defect on the very first round, leaving you with a pretty measly payoff. Why might someone choose an \"irrational\" strategy instead, and cooperate for much longer than that?      Cooperating signals to Jeff that you're willing to keep cooperating for a while, which gives both of you a shot at raising your totals much higher than an immediate defection ever could.    Correct. Backward induction assumes both players are flawlessly rational and know the other is too, all the way down. In practice, cooperating early is a kind of signal, an invitation to keep building the pot together, and it's worth the risk because the potential upside (climbing toward $100) is so much bigger than the guaranteed small payoff from defecting immediately.      Because we know Jeff will not defect until round 98.    We don't know what Jeff will do!      Because Jeff's rational strategy in this case would be to cooperate, thus raising both of your totals.    The rational response for Jeff, in the case you cooperate, is still to defect!      "
},
{
  "id": "check-ultimatum-psychology",
  "level": "2",
  "url": "page4-ultimatum-and-centipede.html#check-ultimatum-psychology",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": "  Backward induction says Player 2 should accept any positive offer, even $1, since something beats nothing. So Player 1 should offer as little as possible to maximize their earnings. But in real experiments, people routinely reject offers below around $40. What's the best explanation for this?      Player 2 doesn't understand the rules of the game.    Not quite, this behavior shows up consistently even when players clearly understand the game. Something else is going on.      A low offer feels unfair, and people are often willing to sacrifice their own payoff to punish someone treating them unfairly.    Correct. This connects back to Section 1.6: rejecting a low offer functions like an implied threat, punishing an unfair offer at a real cost to yourself. It also suggests that \"payoff\" might mean more than just dollars, being treated fairly can be worth something too.      Player 2 is simply being irrational, and there's no way to make sense of this within game theory.    Not quite. The book suggests a way to make this rational again, by reconsidering what actually belongs in Player 2's payoff.     "
},
{
  "id": "check-centipede-signaling",
  "level": "2",
  "url": "page4-ultimatum-and-centipede.html#check-centipede-signaling",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": "  We just saw that the \"rational\" strategy, found through backward induction, is for you to defect on the very first round, leaving you with a pretty measly payoff. Why might someone choose an \"irrational\" strategy instead, and cooperate for much longer than that?      Cooperating signals to Jeff that you're willing to keep cooperating for a while, which gives both of you a shot at raising your totals much higher than an immediate defection ever could.    Correct. Backward induction assumes both players are flawlessly rational and know the other is too, all the way down. In practice, cooperating early is a kind of signal, an invitation to keep building the pot together, and it's worth the risk because the potential upside (climbing toward $100) is so much bigger than the guaranteed small payoff from defecting immediately.      Because we know Jeff will not defect until round 98.    We don't know what Jeff will do!      Because Jeff's rational strategy in this case would be to cooperate, thus raising both of your totals.    The rational response for Jeff, in the case you cooperate, is still to defect!     "
},
{
  "id": "page5-continuous-games-stackelberg",
  "level": "1",
  "url": "page5-continuous-games-stackelberg.html",
  "type": "Section",
  "number": "1.5",
  "title": "Continuous Games and Stackelberg’s Duopoly",
  "body": " Continuous Games and Stackelberg's Duopoly  So far, every game we've looked at has had a finite menu of choices at each node: send $80 or demand a receipt, cooperate or defect. What happens when a player can choose any real number instead? That's where calculus enters game theory, and it's the subject of this page.   Section 1.9, Continuous Games   Read Section 1.9.   Pay attention to how backward induction gets adapted here. It's the same core idea as before, just done with derivatives instead of a finite list of branches to compare.   Let's put this to work. Stackelberg's model of duopoly imagines two firms choosing how much of a good to produce, one right after the other. Firm 1 picks its production level first; then Firm 2 observes and picks its own production level . Each firm's profit, and , depends on both quantities together, since they're competing in the same market. You'll see exactly how these profit formulas are built in the reading below, once you've gotten a feel for the logic first.  Since Firm 1 moves first, it has to reason about how Firm 2 will rationally respond to every production level Firm 1 could possibly choose. In other words, before Firm 1 picks anything, we need to find Firm 2's best-response function, : the value of that maximizes Firm 2's profit, for each fixed .   Refresher: finding a max with derivatives  Setting a derivative equal to zero finds a critical point , it doesn't automatically find a maximum. Whether that critical point actually is the max depends on two things:   Shape of the function. If the function is concave (its graph curves downward, like an upside-down parabola) over the whole domain, a critical point is guaranteed to be the single global maximum. Otherwise, a critical point could instead be a minimum, an inflection point, or just one of several local maxima.   The domain. If the domain has boundaries (a variable can't go below 0, say), the true maximum might sit right at that boundary instead of at a point where the derivative is zero. Boundary points have to be checked separately in that case.  For a function of two variables, like here, the same idea applies to the partial derivative : setting (holding fixed) finds a critical point of the one-variable curve you get by slicing the surface at that particular . You'll see both situations, the clean derivative case and the boundary case, play out below.   In the interactive below, drag the slider to set Firm 1's production level . The left panel shows the profit surface , sliced at your chosen ; the right panel shows that same slice as a clean 2D curve of versus . Here, this curve is concave and the domain is unrestricted, so the point where the tangent line is flat ( ) is guaranteed to be the actual maximum, no boundary check needed. That peak is Firm 2's best response, , to your chosen .   Firm 2's profit as a function of , for a fixed you control. The left panel shows where this curve comes from as a slice of the full profit surface; the right panel shows the slice itself, with the maximum, its flat tangent line, and labeled.    Now that Firm 2's best response is pinned down for every possible , Firm 1 can fold that entire strategy into its own decision. Firm 1's actual payoff, once Firm 2 responds optimally, is , a function of alone. Unlike Firm 2's problem, there's no second variable left to slice away here, so this graph is just a single 2D curve: no 3D backdrop needed, since there's nothing being sliced.   Firm 1's payoff as a function of , once Firm 2's best response is accounted for.    You've now walked through the entire backward induction argument visually, solve Firm 2's problem first, then fold that into Firm 1's problem, before seeing a single formula. The reading below fills in the algebra behind exactly what you just watched happen.   Section 1.10, Stackelberg's Model of Duopoly 1   Read Section 1.10.   For Subsection 1.10.1 (the first model): this is where , , and actually get derived, the algebra behind the two graphs above. Follow this one closely, it's the pattern the rest of the section reuses. Notice that the domain here is left unrestricted on purpose, and the profit function is concave, which is exactly why setting the derivative to zero is all that's needed to find the max: no boundary to worry about.  For Subsection 1.10.2 (the second model): the setup changes, production and price are no longer allowed to go negative, which makes the profit functions piecewise. You don't need to grind through re-deriving every piecewise case by hand right now, but pay attention to what's different (the extra cases, the threshold where price would hit the cost of production) versus what's the same (it's still the same optimize-Firm-2-then-Firm-1 logic). This is the boundary situation from the refresher above in action: the book has to check a boundary case explicitly here, rather than relying on a derivative alone. A checkpoint after the reading will ask you to pin down what actually changed and what didn't.     In the more realistic second model (Subsection 1.10.2), production and price are no longer allowed to go negative. Does this change the equilibrium production levels or profits from the first model?      No, the equilibrium is exactly the same: the optimal was already comfortably within the newly allowed range, so the new boundary never actually comes into play.    Correct. The boundary only would have mattered if the unconstrained optimum had pushed production or price into negative territory. Since is well below the threshold where things would break down (production of 8 or more), the \"more realistic\" version of the model quietly agrees with the simpler one.      Yes, Firm 1's profit changes because it now has to account for the possibility of a zero price.    Not quite, work through the numbers again: Firm 1's optimal choice never comes close to the region where price would hit zero, so nothing about the profit calculation actually changes.      Yes, Firm 2 now chooses to produce nothing, since negative production is no longer allowed.    Not quite, Firm 2's best response, , is already a positive number, so ruling out negative production doesn't affect Firm 2's choice at all.      "
},
{
  "id": "refresher-derivative-max",
  "level": "2",
  "url": "page5-continuous-games-stackelberg.html#refresher-derivative-max",
  "type": "Remark",
  "number": "1.5.1",
  "title": "Refresher: finding a max with derivatives.",
  "body": " Refresher: finding a max with derivatives  Setting a derivative equal to zero finds a critical point , it doesn't automatically find a maximum. Whether that critical point actually is the max depends on two things:   Shape of the function. If the function is concave (its graph curves downward, like an upside-down parabola) over the whole domain, a critical point is guaranteed to be the single global maximum. Otherwise, a critical point could instead be a minimum, an inflection point, or just one of several local maxima.   The domain. If the domain has boundaries (a variable can't go below 0, say), the true maximum might sit right at that boundary instead of at a point where the derivative is zero. Boundary points have to be checked separately in that case.  For a function of two variables, like here, the same idea applies to the partial derivative : setting (holding fixed) finds a critical point of the one-variable curve you get by slicing the surface at that particular . You'll see both situations, the clean derivative case and the boundary case, play out below.  "
},
{
  "id": "fig-firm2-bestresponse",
  "level": "2",
  "url": "page5-continuous-games-stackelberg.html#fig-firm2-bestresponse",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " Firm 2's profit as a function of , for a fixed you control. The left panel shows where this curve comes from as a slice of the full profit surface; the right panel shows the slice itself, with the maximum, its flat tangent line, and labeled.   "
},
{
  "id": "fig-firm1-bestresponse",
  "level": "2",
  "url": "page5-continuous-games-stackelberg.html#fig-firm1-bestresponse",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " Firm 1's payoff as a function of , once Firm 2's best response is accounted for.   "
},
{
  "id": "check-stackelberg-second-model",
  "level": "2",
  "url": "page5-continuous-games-stackelberg.html#check-stackelberg-second-model",
  "type": "Checkpoint",
  "number": "1.5.4",
  "title": "",
  "body": "  In the more realistic second model (Subsection 1.10.2), production and price are no longer allowed to go negative. Does this change the equilibrium production levels or profits from the first model?      No, the equilibrium is exactly the same: the optimal was already comfortably within the newly allowed range, so the new boundary never actually comes into play.    Correct. The boundary only would have mattered if the unconstrained optimum had pushed production or price into negative territory. Since is well below the threshold where things would break down (production of 8 or more), the \"more realistic\" version of the model quietly agrees with the simpler one.      Yes, Firm 1's profit changes because it now has to account for the possibility of a zero price.    Not quite, work through the numbers again: Firm 1's optimal choice never comes close to the region where price would hit zero, so nothing about the profit calculation actually changes.      Yes, Firm 2 now chooses to produce nothing, since negative production is no longer allowed.    Not quite, Firm 2's best response, , is already a positive number, so ruling out negative production doesn't affect Firm 2's choice at all.     "
},
{
  "id": "ch2-page1-prisoners-dilemma",
  "level": "1",
  "url": "ch2-page1-prisoners-dilemma.html",
  "type": "Section",
  "number": "2.1",
  "title": "Prisoner’s Dilemma and Normal Form",
  "body": " Prisoner's Dilemma and Normal Form  Chapter 2 looks at games where players move simultaneously instead of taking turns.  Play the game below against a robot opponent at least three times before reading on.   Prisoner's Dilemma, played repeatedly against a robot.     Section 2.1, Prisoner's Dilemma   Read Section 2.1.    The robot you played against was following tit-for-tat : it cooperates on the first round, then simply copies whatever you did the round before. This is a common strategy in the repeated Prisoner's Dilemma, where the same two players face each other over and over. In a single, one-shot round, the rational move is to always talk. But if you're going to face the same opponent again, always talking can backfire: you build a reputation as someone who defects, and future opponents (or the same one) may punish you for it.    Games structured like the Prisoner's Dilemma can have very different specific payoffs. What's the defining feature that makes a game \"a Prisoner's Dilemma,\" regardless of the exact numbers involved?      There's a strategy that's always better for each player no matter what the other player does, but if both players use it, they're worse off than if they'd both chosen the alternative.    Correct.      Both players always end up with the same payoff.    Not quite, check the matrix again, the payoffs aren't equal in every outcome.      One player always does better than the other, regardless of strategy.    Not quite, the game is symmetric, both players face the exact same incentives.      Unlike Tony's Accident or the centipede game, players in the Prisoner's Dilemma don't move one after another, they choose at the same time. Games like this are described using what's called normal form , which you'll read about now.   Section 2.2, Games in Normal Form   Read Section 2.2.    Here's a different game, also in normal form:   Player 1's strategies: Up, Down. Player 2's strategies: Left, Right.       Left  Right    Up  (3, 2)  (0, 0)    Down  (1, 1)  (4, 3)       For this game, , , and . Which of the following correctly describes , the set of strategy profiles?         Correct. pairs every strategy of Player 1 with every strategy of Player 2, so it's one entry per cell of the matrix, four in this case.         Not quite, this just lists the individual strategies without pairing them. A strategy profile is a choice by both players at once , not a single player's option.         Not quite, this only pairs matching strategies. The cartesian product includes every combination, including (Up,Right) and (Down,Left).        Using the matrix above, what is ?         Correct, the strategy profile (Down, Left) is the row Down, column Left, giving payoff 1 to each player.         Not quite, that's the payoff for (Down, Right), not (Down, Left).         Not quite, that's the payoff for (Up, Left), not (Down, Left).      "
},
{
  "id": "fig-prisoners-dilemma-robot",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#fig-prisoners-dilemma-robot",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Prisoner's Dilemma, played repeatedly against a robot.   "
},
{
  "id": "check-pd-defining-feature",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#check-pd-defining-feature",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "  Games structured like the Prisoner's Dilemma can have very different specific payoffs. What's the defining feature that makes a game \"a Prisoner's Dilemma,\" regardless of the exact numbers involved?      There's a strategy that's always better for each player no matter what the other player does, but if both players use it, they're worse off than if they'd both chosen the alternative.    Correct.      Both players always end up with the same payoff.    Not quite, check the matrix again, the payoffs aren't equal in every outcome.      One player always does better than the other, regardless of strategy.    Not quite, the game is symmetric, both players face the exact same incentives.     "
},
{
  "id": "table-generic-normal-form",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#table-generic-normal-form",
  "type": "Table",
  "number": "2.1.3",
  "title": "",
  "body": "    Left  Right    Up  (3, 2)  (0, 0)    Down  (1, 1)  (4, 3)    "
},
{
  "id": "check-normal-form-cartesian",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#check-normal-form-cartesian",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "",
  "body": "  For this game, , , and . Which of the following correctly describes , the set of strategy profiles?         Correct. pairs every strategy of Player 1 with every strategy of Player 2, so it's one entry per cell of the matrix, four in this case.         Not quite, this just lists the individual strategies without pairing them. A strategy profile is a choice by both players at once , not a single player's option.         Not quite, this only pairs matching strategies. The cartesian product includes every combination, including (Up,Right) and (Down,Left).     "
},
{
  "id": "check-normal-form-payoff-eval",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#check-normal-form-payoff-eval",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": "  Using the matrix above, what is ?         Correct, the strategy profile (Down, Left) is the row Down, column Left, giving payoff 1 to each player.         Not quite, that's the payoff for (Down, Right), not (Down, Left).         Not quite, that's the payoff for (Up, Left), not (Down, Left).     "
},
{
  "id": "ch-nash-equilibria-placeholder",
  "level": "1",
  "url": "ch-nash-equilibria-placeholder.html",
  "type": "Section",
  "number": "3.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-incomplete-information-placeholder",
  "level": "1",
  "url": "ch-incomplete-information-placeholder.html",
  "type": "Section",
  "number": "4.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-mixed-strategy-nash-equilibria-placeholder",
  "level": "1",
  "url": "ch-mixed-strategy-nash-equilibria-placeholder.html",
  "type": "Section",
  "number": "5.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-more-extensive-form-placeholder",
  "level": "1",
  "url": "ch-more-extensive-form-placeholder.html",
  "type": "Section",
  "number": "6.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-symmetries-of-games-placeholder",
  "level": "1",
  "url": "ch-symmetries-of-games-placeholder.html",
  "type": "Section",
  "number": "7.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-alternatives-to-nash-placeholder",
  "level": "1",
  "url": "ch-alternatives-to-nash-placeholder.html",
  "type": "Section",
  "number": "8.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-differential-equations-placeholder",
  "level": "1",
  "url": "ch-differential-equations-placeholder.html",
  "type": "Section",
  "number": "9.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "ch-evolutionary-dynamics-placeholder",
  "level": "1",
  "url": "ch-evolutionary-dynamics-placeholder.html",
  "type": "Section",
  "number": "10.1",
  "title": "Placeholder",
  "body": " Placeholder   Placeholder. This chapter has no sections yet. Add real sections\/pages to this chapter in tools\/book_structure.yaml and rerun tools\/build_structure.py.  "
},
{
  "id": "back-colophon",
  "level": "1",
  "url": "back-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
