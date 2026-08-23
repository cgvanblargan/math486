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
  "body": " Threats and Promises  We just spent a lot of time building up some of the notation so let's get back to looking at an example. The following example is the \"Big and Little Monkey\" example found in 1.5 in the book. Before we have you read it, you should explore the game in the interactive below.  First, the basic setup (there will be more context given in the reading later): There are two hungry monkeys (Big Monkey and Little Monkey), and a coconut hanging from a branch that both monkeys want to eat. Someone has to climb to shake it down if they want to eat it! Big Monkey decides first: wait or climb. Then Little Monkey decides: wait or climb. The net payoffs for every combination are shown at the bottom of the tree below (in the reading you will get more context for why each pay-off is the number in the tree).  Like before, we'll assume both players are rational. Perform backward induction on the tree below to see what the resulting pay-offs are!   Work through Big Monkey and Little Monkey one decision at a time, starting from the nodes closest to the end.    What you just did is backward induction again, on a brand new tree. Now read 1.5, where the book fills in the full story of the game.   Section 1.5, Big Monkey and Little Monkey 1   Read Section 1.5.   This will give a fuller context to the example you just worked through! It should be pretty quick.   Sometimes only working through the backwards induction obscures some of the intuition behind the result. Let's consider the following question.    Both monkeys would rather wait while the other climbs. So what is it about the setup that lets Big Monkey be the one who gets to wait, while Little Monkey ends up climbing?      Big Monkey is simply bigger and stronger, so Little Monkey has no real choice.    Not quite, size determines the climbing cost, not who gets to decide what.      Big Monkey moves first, so his choice to wait is already locked in by the time Little Monkey has to decide. Little Monkey is responding to an already-fixed situation, and climbing is his best remaining option given that.    Correct. It's specifically about move order, not raw payoff size. If the order were reversed and Little Monkey moved first, he'd be the one getting to wait instead.      Big Monkey's payoffs happen to be higher across the whole table, so who moves when doesn't really matter.    Not quite, flip the move order and the outcome flips too, even though the payoff table stays exactly the same.      Now clearly Little Monkey is in a sub-optimal position here. There is more nuance to a game strategy that we need consider. In the next section the book explores \"threats\" and \"promises\" in games. If little monkey has a reputation for always waiting, will Big Monkey still wait? On the other hand, if little monkey likes to collaborate and climb together, will Big Monkey be on board? Explore both options by pressing the \"threat\" and \"promise\" buttons in the interactive below!   See what happens when Little Monkey commits to a different move than his rational one.      If Little Monkey threatens to wait no matter what, what does a rational Big Monkey do, and what's the final outcome?      Big Monkey still waits, and since Little Monkey follows through on the threat, they get (0, 0).    Not quite, this misses the whole point of a credible threat: it's designed to change Big Monkey's mind, so it never actually has to be carried out.      Big Monkey climbs instead, avoiding the threatened (0, 0). The game ends (4, 4).    Correct. Believing the threat, Big Monkey compares a locked-in 0 (waiting) against 4 (climbing), and climbs.      Nothing changes, Big Monkey still gets 9, since threats don't affect a rational player.    Not quite, threats work precisely because they change what's rational for the other player to do.        If Little Monkey promises to climb if Big Monkey climbs, what does a rational Big Monkey do, and what's the final outcome?      Big Monkey climbs, since the promise makes climbing more attractive (5 beats the old 4). The game ends (5, 3).    Not quite, and this is the tempting trap: Big Monkey isn't comparing 5 to the old 4, he's comparing 5 to what waiting still gets him, 9.      Big Monkey still waits, since even with the promise, 9 beats 5. The game ends (9, 1), unchanged.    Correct. The promise is real, Little Monkey genuinely would climb if Big Monkey did, but it doesn't end up mattering, since Big Monkey never climbs in the first place.      The promise breaks the game, since it contradicts backward induction.    Not quite, nothing breaks. Little Monkey is just choosing a worse move for himself, which is always allowed, it just doesn't always change the outcome.       Section 1.6, Threats, Promises, Commitments   Read Section 1.6 .  This reading formalizes the idea of a threat and promise more. It's easy to get lost in the notation, so keep the following in mind:   In both threats in promises, player 1 is committing to an \"irrational\" move for them. It is a move that makes their pay-off at this specific node worse, in hopes that this changes players 2 decision earlier in the tree.    Player 1 gives a threat at given node if they commit to a move that makes the pay-off worse for player 2 at this node.    Player 1 gives a promise at given node if they commit to a move that makes the pay-off better for player 2 at this node.     The book gives this a precise, general definition using for the rational payoffs and for the committed payoffs, at whichever node the commitment happens (the book calls it node ). Explore the same diagram again below, this time labeled with that notation.  In the diagram below, the player making the threat or promise (Little Monkey) is player 2 . So the roles of player 1 and player 2 are reversed from the definition in the book, which assumes player 1 is the one making the threat.   The same demonstration, now labeled with the book's node and payoff notation.    "
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
  "id": "ch1-exercises",
  "level": "1",
  "url": "ch1-exercises.html",
  "type": "Exercises",
  "number": "1.6",
  "title": "Exercises",
  "body": " Exercises   Homework exercises for chapter 1.     The Pay Increase   Three elected county commissioners, , , and , hold a public vote on whether to give themselves a pay increase. The rules of the vote are as follows.    Each commissioner votes yes ( ) or no ( ), and the measure passes if at least two of the three vote yes.    Votes are announced in order: votes first; observes 's vote and then announces; observes both votes and then announces.    If the measure passes, each commissioner receives a benefit of , whether or not that commissioner voted for it.    Any commissioner who votes yes pays a political cost , and pays it whether or not the measure passes.    Both and are positive, with . Benefits and costs are additive, so 's payoff is 's benefit minus 's cost.    The extensive form game is shown below, with payoffs listed in the order . Four of the terminal nodes are marked .   The pay increase game. Payoffs are listed in the order .         Determine the payoffs at the four terminal nodes marked . Include a sketch or screenshot of the game tree with the correct payoffs written in. A verbal description of the actions is not a substitute for the sketch.      How many strategies does each commissioner have? Report your answers as , , and (these represent the size of each player's strategy set). You do not need to write out the strategy sets themselves, and you do not need to write an explanation, but show enough work that it is clear how you counted.      Write out one of 's strategies, and describe what it means in words. Your description should be in complete sentences, and it should make clear why the thing you wrote down is a strategy rather than a single vote.    There are four nodes where is called on to vote, one for each way the first two votes could have gone. A strategy has to say something about all four, including the ones that won't be reached.      Use backward induction to analyze the game and predict the outcome. Show the steps graphically, in the style of the book's Figures 1.4 and 1.5. Do not write out explanations of each step. Clearly indicate the path through the tree that play will follow.      According to your backward induction analysis, what is 's rational strategy? What you report here must be a strategy for . You may want to revisit the definition of a strategy before answering.       Four Players and an Entry Fee   Four players, , , , and , play the following game.     Entry fee. Before play begins, every player pays a $1 entry fee.     Order of play. Players move one at a time in the order , , , . A player moves only if every player before her has chosen to continue.     The two choices. On her turn, a player either (E)nds the game or (C)ontinues.     Ending. A player who plays E pays an additional $1. The game ends immediately, and each of the other three players receives $11 ($10 plus the $1 entry fee back). The player who ended the game receives nothing.     Continuing. A player who plays C pays nothing, and play passes to the next player.     Reaching the end. If plays C, the game simply ends with no further payments, and all four players are out their $1 entry fee.       Sketch the extensive form of this game. Be careful to account for every payment at each outcome: all four players pay the $1 entry fee before play begins, a player who ends the game pays a further $1, and the other three each collect $11. Report each player's payoff as the net amount she gains or loses over the whole game.    The tree is a single chain of four decision nodes. Each node has one branch ending the game and one continuing, so there are five terminal nodes in all.      Determine the backward induction solution.    There is nothing especially noteworthy about this game. It's here for practice in building an extensive form game from a description and in running backward induction with more than two players.       A Three Player Game   Consider the following extensive form game with three players. Payoffs are listed in the usual way, so that means is the payoff to player 1, the payoff to player 2, and the payoff to player 3.   A three player extensive form game. Payoffs are listed in the order .         For each player , determine (that is the size of the strategy set for player i). You do not need to write out the strategy sets. An explanation isn't necessary, but include enough work that it's clear how you determined each size.      For player 3, describe in words what is meant by the strategy , where player 3's two decision nodes are taken in left-to-right order. Write your description in complete sentences.      Use backward induction to analyze the game. Indicate graphically the path of play your analysis predicts.      According to your backward induction analysis, what strategy will each player use? Make sure that what you report for each player really is a strategy.      Identify at least one outcome that all three players would strictly prefer to the outcome reached by backward induction. That is, every player must be better off, not merely no worse off.       When Backward Induction Fails   We saw that the backward induction procedure can break down when, at some step, two moves give the deciding player the same best payoff. In both games below, player 2 is indifferent between her two moves, so the procedure breaks down in both. The two games differ in whether that breakdown actually costs us a prediction. In both trees, payoffs are listed in the order .   Two games. Payoffs are listed in the order .         Carry out backward induction on Game A as far as you can. At which node does the procedure break down, and why? Then explain, in complete sentences, why the breakdown leaves player 1 unable to decide between his two moves.      Now turn to Game B. Show that backward induction breaks down at player 2's node for the same reason it did in Game A.      Even though the procedure breaks down, player 1 has a clearly rational choice in Game B. Identify it, and explain in complete sentences why player 1 can make that choice without knowing what player 2 would do.    Compare player 1's payoff from with every payoff player 1 could end up with after playing , rather than with the single payoff backward induction would have assigned to player 2's node.     "
},
{
  "id": "hw-commissioners",
  "level": "2",
  "url": "ch1-exercises.html#hw-commissioners",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "The Pay Increase.",
  "body": " The Pay Increase   Three elected county commissioners, , , and , hold a public vote on whether to give themselves a pay increase. The rules of the vote are as follows.    Each commissioner votes yes ( ) or no ( ), and the measure passes if at least two of the three vote yes.    Votes are announced in order: votes first; observes 's vote and then announces; observes both votes and then announces.    If the measure passes, each commissioner receives a benefit of , whether or not that commissioner voted for it.    Any commissioner who votes yes pays a political cost , and pays it whether or not the measure passes.    Both and are positive, with . Benefits and costs are additive, so 's payoff is 's benefit minus 's cost.    The extensive form game is shown below, with payoffs listed in the order . Four of the terminal nodes are marked .   The pay increase game. Payoffs are listed in the order .         Determine the payoffs at the four terminal nodes marked . Include a sketch or screenshot of the game tree with the correct payoffs written in. A verbal description of the actions is not a substitute for the sketch.      How many strategies does each commissioner have? Report your answers as , , and (these represent the size of each player's strategy set). You do not need to write out the strategy sets themselves, and you do not need to write an explanation, but show enough work that it is clear how you counted.      Write out one of 's strategies, and describe what it means in words. Your description should be in complete sentences, and it should make clear why the thing you wrote down is a strategy rather than a single vote.    There are four nodes where is called on to vote, one for each way the first two votes could have gone. A strategy has to say something about all four, including the ones that won't be reached.      Use backward induction to analyze the game and predict the outcome. Show the steps graphically, in the style of the book's Figures 1.4 and 1.5. Do not write out explanations of each step. Clearly indicate the path through the tree that play will follow.      According to your backward induction analysis, what is 's rational strategy? What you report here must be a strategy for . You may want to revisit the definition of a strategy before answering.    "
},
{
  "id": "hw-four-player-entry",
  "level": "2",
  "url": "ch1-exercises.html#hw-four-player-entry",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "Four Players and an Entry Fee.",
  "body": " Four Players and an Entry Fee   Four players, , , , and , play the following game.     Entry fee. Before play begins, every player pays a $1 entry fee.     Order of play. Players move one at a time in the order , , , . A player moves only if every player before her has chosen to continue.     The two choices. On her turn, a player either (E)nds the game or (C)ontinues.     Ending. A player who plays E pays an additional $1. The game ends immediately, and each of the other three players receives $11 ($10 plus the $1 entry fee back). The player who ended the game receives nothing.     Continuing. A player who plays C pays nothing, and play passes to the next player.     Reaching the end. If plays C, the game simply ends with no further payments, and all four players are out their $1 entry fee.       Sketch the extensive form of this game. Be careful to account for every payment at each outcome: all four players pay the $1 entry fee before play begins, a player who ends the game pays a further $1, and the other three each collect $11. Report each player's payoff as the net amount she gains or loses over the whole game.    The tree is a single chain of four decision nodes. Each node has one branch ending the game and one continuing, so there are five terminal nodes in all.      Determine the backward induction solution.    There is nothing especially noteworthy about this game. It's here for practice in building an extensive form game from a description and in running backward induction with more than two players.    "
},
{
  "id": "hw-three-player-tree",
  "level": "2",
  "url": "ch1-exercises.html#hw-three-player-tree",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "A Three Player Game.",
  "body": " A Three Player Game   Consider the following extensive form game with three players. Payoffs are listed in the usual way, so that means is the payoff to player 1, the payoff to player 2, and the payoff to player 3.   A three player extensive form game. Payoffs are listed in the order .         For each player , determine (that is the size of the strategy set for player i). You do not need to write out the strategy sets. An explanation isn't necessary, but include enough work that it's clear how you determined each size.      For player 3, describe in words what is meant by the strategy , where player 3's two decision nodes are taken in left-to-right order. Write your description in complete sentences.      Use backward induction to analyze the game. Indicate graphically the path of play your analysis predicts.      According to your backward induction analysis, what strategy will each player use? Make sure that what you report for each player really is a strategy.      Identify at least one outcome that all three players would strictly prefer to the outcome reached by backward induction. That is, every player must be better off, not merely no worse off.    "
},
{
  "id": "hw-backward-induction-fails",
  "level": "2",
  "url": "ch1-exercises.html#hw-backward-induction-fails",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "When Backward Induction Fails.",
  "body": " When Backward Induction Fails   We saw that the backward induction procedure can break down when, at some step, two moves give the deciding player the same best payoff. In both games below, player 2 is indifferent between her two moves, so the procedure breaks down in both. The two games differ in whether that breakdown actually costs us a prediction. In both trees, payoffs are listed in the order .   Two games. Payoffs are listed in the order .         Carry out backward induction on Game A as far as you can. At which node does the procedure break down, and why? Then explain, in complete sentences, why the breakdown leaves player 1 unable to decide between his two moves.      Now turn to Game B. Show that backward induction breaks down at player 2's node for the same reason it did in Game A.      Even though the procedure breaks down, player 1 has a clearly rational choice in Game B. Identify it, and explain in complete sentences why player 1 can make that choice without knowing what player 2 would do.    Compare player 1's payoff from with every payoff player 1 could end up with after playing , rather than with the single payoff backward induction would have assigned to player 2's node.    "
},
{
  "id": "ch2-page1-prisoners-dilemma",
  "level": "1",
  "url": "ch2-page1-prisoners-dilemma.html",
  "type": "Section",
  "number": "2.1",
  "title": "Prisoner’s Dilemma and Normal Form",
  "body": " Prisoner's Dilemma and Normal Form  In this chapter, we are going to see a different style of game than we have seen so far. The games in extensive form were represented with a game tree because players took turns, and every scenario could be mapped out as a path through the tree. Now we will look at games where the players decide simultaneously.  Perhaps the most well known game in game theory is the Prisoner's Dilemma. You and an accomplice have been arrested and are being questioned in separate rooms, with no way to coordinate. Each of you has the same two options: refuse to talk, or talk and implicate the other. How many years you serve depends on what you both choose, so neither of you controls your own sentence outright. In the interactive below you will play this out repeatedly against a robot opponent. Play at least three rounds before reading on!   Prisoner's Dilemma, played repeatedly against a robot.    Before the reading, think about what the best strategy is. In this scenario, it might not even be clear what best means. Then ask yourself one more thing: what would you do differently if you knew you were only playing a single round, against someone you would never face again? The reading below is about that version of the game.   Section 2.1, Prisoner's Dilemma   Read Section 2.1.   Here you will read a quick analysis of the Prisoner's Dilemma.   More generally, refusing to talk is referred to as cooperating (you are cooperating with the other player), and talking is referred to as defecting. So, with just a single round, the rational solution is to defect. Unfortunately, this means the other player will probably do the same! In practice, there are plenty of reasons someone might cooperate anyway, even though it is not the rational move.    Games structured like the Prisoner's Dilemma can have very different specific payoffs. What's the defining feature that makes a game \"a Prisoner's Dilemma,\" regardless of the exact numbers involved?      There's a strategy that's always better for each player no matter what the other player does, but if both players use it, they're worse off than if they'd both chosen the alternative.    Correct.      Both players always end up with the same payoff.    Not quite, check the matrix again, the payoffs aren't equal in every outcome.      One player always does better than the other, regardless of strategy.    Not quite, the game is symmetric, both players face the exact same incentives.      The robot you played against earlier was following the tit-for-tat strategy: it cooperates on the first round, then simply copies whatever you did the round before. This is a common strategy in the repeated Prisoner's Dilemma, where the same two players face each other over and over. In a single, one-shot round, the rational move is to always talk. But if you are going to face the same opponent again, always talking can backfire: you build a reputation as someone who defects, and future opponents (or the same one) may punish you for it.  Unlike Tony's Accident or the centipede game, players in the Prisoner's Dilemma don't move one after another, they choose at the same time. Games like this are described using what's called normal form , which you'll read about now.   Section 2.2, Games in Normal Form   Read Section 2.2.   This section describes the three components of a game in normal form.   The first two components the book lists are just the players and the strategies available to each player. The third one, the payoff function, is the piece worth slowing down on, along with the notation it is built out of. We will go through all of it carefully to make sure you understand the notation and vocabulary here! Start with the set , which for two players is the Cartesian product of their strategy sets. Let's test that on the game below, written in normal form. If you are feeling uncertain about any of the notation or definitions, seeing the correct answers below will clarify things.   A game in normal form        Player 2: Left  Player 2: Right    Player 1: Up  (3, 2)  (0, 0)    Player 1: Down  (1, 1)  (4, 3)       For this game, , , and . Which of the following correctly describes the Cartesian product ?         Correct. pairs every strategy of Player 1 with every strategy of Player 2, so it's one entry per cell of the matrix, four in this case.         Not quite, this just lists the individual strategies without pairing them. The Cartesian product pairs a choice by Player 1 with a choice by Player 2, so its entries come two at a time.         Not quite, this only pairs matching strategies. The Cartesian product includes every combination, including (Up,Right) and (Down,Left).      Now that we have the set , each individual element of it is called a strategy profile . So a strategy profile is one specific choice of strategy for each player, and it lines up with a single cell of the table above. Make sure you can tell the difference between the whole set and one element of it.    Which of the following is a strategy profile for this game?         Correct. This says what Player 1 does and what Player 2 does, so it's one element of , and it points you at the (0, 0) cell of the table.         Not quite, this is a strategy for Player 1 by itself. A strategy profile has to say what Player 2 is doing too.         Not quite, those are the payoffs sitting in a cell, not the strategies that got you there. The profile that produces them is (Down, Right).         Not quite, that's the set of all the strategy profiles, not one of them. A strategy profile is a single element of it.      The last thing to understand is that the payoff function takes any strategy profile as its input (so it accounts for every combination of strategies the players could choose) and returns the corresponding payoffs. Test your understanding below!    Using the same table from above, what is ?         Correct, the strategy profile (Down, Left) is the row Down, column Left, giving payoff 1 to each player.         Not quite, that's the payoff for (Down, Right), not (Down, Left).         Not quite, that's the payoff for (Up, Left), not (Down, Left).      "
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
  "title": "A game in normal form",
  "body": " A game in normal form        Player 2: Left  Player 2: Right    Player 1: Up  (3, 2)  (0, 0)    Player 1: Down  (1, 1)  (4, 3)    "
},
{
  "id": "check-normal-form-cartesian",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#check-normal-form-cartesian",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "",
  "body": "  For this game, , , and . Which of the following correctly describes the Cartesian product ?         Correct. pairs every strategy of Player 1 with every strategy of Player 2, so it's one entry per cell of the matrix, four in this case.         Not quite, this just lists the individual strategies without pairing them. The Cartesian product pairs a choice by Player 1 with a choice by Player 2, so its entries come two at a time.         Not quite, this only pairs matching strategies. The Cartesian product includes every combination, including (Up,Right) and (Down,Left).     "
},
{
  "id": "check-strategy-profile",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#check-strategy-profile",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": "  Which of the following is a strategy profile for this game?         Correct. This says what Player 1 does and what Player 2 does, so it's one element of , and it points you at the (0, 0) cell of the table.         Not quite, this is a strategy for Player 1 by itself. A strategy profile has to say what Player 2 is doing too.         Not quite, those are the payoffs sitting in a cell, not the strategies that got you there. The profile that produces them is (Down, Right).         Not quite, that's the set of all the strategy profiles, not one of them. A strategy profile is a single element of it.     "
},
{
  "id": "check-normal-form-payoff-eval",
  "level": "2",
  "url": "ch2-page1-prisoners-dilemma.html#check-normal-form-payoff-eval",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "",
  "body": "  Using the same table from above, what is ?         Correct, the strategy profile (Down, Left) is the row Down, column Left, giving payoff 1 to each player.         Not quite, that's the payoff for (Down, Right), not (Down, Left).         Not quite, that's the payoff for (Up, Left), not (Down, Left).     "
},
{
  "id": "ch2-page2-dominated-strategies",
  "level": "1",
  "url": "ch2-page2-dominated-strategies.html",
  "type": "Section",
  "number": "2.2",
  "title": "Dominated Strategies",
  "body": " Dominated Strategies   Section 2.3, Dominated Strategies   Read Section 2.3.   The book introduces the notion of strict and weak dominance of strategies. We will test your understanding of the definitions from the reading.   Let's take a second look at the payoff matrix that is analyzed in Section 2.3. For reference, it is:   The example matrix from Section 2.3     Player 2: c  Player 2: d  Player 2: e  Player 2: f    Player 1: a  (1, 2)  (−1, 2)  (2, 4)  (−1, 3)    Player 1: b  (4, 1)  (1, 1)  (3, 1)  (0, 2)     The interactive below walks through every pair of strategies in this matrix, one at a time. For each pair, read the two strategies' payoffs across the matrix yourself, then decide whether one strictly dominates the other, weakly dominates it, or neither before moving on. Work through all seven to make sure you understand some of the nuances of the two definitions!   Comparing two strategies of the same player, Section 2.3 example matrix.    Two of those pairs are worth pinning down before we move on.    Compare Player 2's strategies c and d. Against a, both give ; against b, both give . What is the relationship between them?      Neither weakly dominates the other.    Correct. Weak dominance has two requirements: at least as good in every column, and strictly better in at least one. Here c and d clear the first requirement in both directions but fail the second in both directions, since there is no column where either one is strictly better.      Each weakly dominates the other, since neither is ever worse than the other.    Not quite. Never worse is only half of the definition. Weak dominance also requires being strictly better in at least one column, and there's no column here where c beats d or d beats c. So neither one weakly dominates.      c weakly dominates d, because c comes first in the matrix and the payoffs are tied.    Not quite. Nothing in the definition depends on the order the strategies are written in. Ties in every column mean neither strategy weakly dominates the other.      c strictly dominates d, since strict dominance only requires not doing worse.    Not quite — that's a weaker condition than strict dominance, which requires a strictly better payoff in every column. Tied payoffs rule out strict dominance immediately.        Now compare Player 2's strategies e and f. Against a, e gives and f gives ; against b, e gives and f gives . What is the relationship between them?      Neither dominates the other, in either sense.    Correct, and notice this is a different reason than the c and d case. There, the two strategies were tied everywhere. Here each strategy wins a column: e is better against a, f is better against b. Either way there is no domination, but the way it fails is not the same.      e weakly dominates f, since e's best payoff is larger than f's best payoff .    Not quite. Dominance is checked column by column, comparing what the two strategies give against the same choice by Player 1. Against b, f gives and e gives , so e is not always at least as good.      f weakly dominates e, since f gives Player 2 a higher payoff in the column that actually gets played.    Not quite. Dominance is a property of the matrix on its own, checked against every column, with no assumption about which one Player 1 will choose. That's exactly what makes it a useful starting point; you can apply it before knowing anything about the other player's behavior.       Section 2.5, Global Warming   Read Section 2.5.   In this example, the book finds a strictly dominant strategy, which leads to a type of social dilemma.   Now that you've read it, let's slow down on the mathematical derivations to clear up any confusion. Nothing below is new material; we are just breaking the equations apart and labeling where each piece came from.  The book's payoff function packs three separate ideas into one line, so before we use it, let's label them:   So a country's payoff is its share of the benefits minus what it spent. Notice the asymmetry that drives everything here: a country pays for all of its own expenditure, but only collects a tenth of the benefit that expenditure creates.  Let's take another look at the part that shows spending strictly dominates any for Player 1 (the same argument works for any other country ). Fix any choice of by the other countries, and set up the difference in payoffs, labeled:   Expanding both terms with the formula above:   The last step uses . Since that difference is positive, we can move the subtracted term across and read the result as a comparison of two payoffs:   And we fixed arbitrarily, so this holds no matter what the other nine countries spend. That is exactly what strict dominance asks for: spending gives Player 1 a strictly higher payoff than any against every choice by the others. So strictly dominates every other strategy, and the same argument applies to every other country.    Why does this global warming game count as a version of the Prisoner's Dilemma?      Every country has a strictly dominant strategy (spend nothing), but if every country instead spent the dominated amount of , every single country would end up better off.    Correct. Spending nothing gives every country a payoff of , but if all ten countries spent , every country's payoff would be instead, strictly better. Rational individual behavior (everyone defects) leads to a worse outcome for everyone than if they'd all cooperated, exactly the Prisoner's Dilemma pattern, just with ten players instead of two.      Because each country's payoff depends on what the other countries do.    Not quite, that's true of almost every game we've studied so far, not just Prisoner's Dilemma-type games. Something more specific has to hold.      Because there are more than two players.    Not quite, the Prisoner's Dilemma pattern isn't about the number of players, the original version had only two.      In the next section, the book works through another example, again finding a strictly dominant strategy.   Section 2.6, Hagar's Battles   Skim or read Section 2.6.   This section is not essential to go through. Read it if you want more examples!   Before you finish the reading for Section 2.7, let's explore the weak dominance argument together, since the book's table can be hard to parse on a first read without having thought it through yourself first.   Section 2.7, Second-Price Auctions (Part 1)   Read Section 2.7, up through where the book states the payoff formula .   The book goes through all the context on how to get the payoff functions, and this is important to understand before working through the rest of the section. Stop at this point, because we are going to discuss some ideas before finishing it.   To clear up any doubts, we restate the payoff function formula, labeling where everything came from. You still need to read the book to understand where all the notation comes from!   Take note that in the second case, player pays (recall is the highest bid among the other players ), not their own bid . That's the defining feature of a second-price auction: the winner pays what the runner-up bid, not their own bid.   Before moving on with the reading, let's work out why bidding your true value weakly dominates every other bid. Fix some bid . Weak dominance asks for two conditions, one about every choice by the other players and one about at least one . See if you can state each before revealing it.   Condition (1)   The first condition compares with against every choice of . What does it say?    Bidding must be at least as good as bidding , no matter what the others do:   This is a , so ties are allowed.     Condition (2)   The second condition only needs one choice of . What does it say?    The comparison must be strict for at least one choice by the other players:   That choice may depend on : a different rival bid can call for a different choice by the others.    We'll take the conditions one at a time. Start with condition (1). Whether bidding wins the auction depends on how the other players' bids turned out, so the reasoning splits into two cases: , where bidding your value would win, and , where it would lose. Let's do the first one together.    Assume the other players' bids make it so that , and let be any other bid you might have made. Does condition (1) for weak dominance hold here, and why?      Yes. Bidding wins and pays , for a payoff of . Any above also wins and also pays , giving exactly the same payoff. Any below loses, giving , which is smaller. So is never worse.    Correct. Notice the comparison splits into a region where the two bids tie and a region where genuinely wins out. Condition (1) only asks for , so the ties are perfectly acceptable.      No. Every bid above gives exactly the same payoff as , and a condition about dominance cannot be satisfied by a tie.    Not quite. This is condition (1), the requirement, so ties are fine. It is condition (2) that demands a strict comparison, and it only demands one.      Yes, and in fact is strictly better than every other bid here, since bidding your true value is always optimal.    Not quite. Bidding is never worse, but it is not strictly better than everything: any bid above wins the same object at the same price , so those bids tie with .      Yes, because bidding higher wins by a wider margin and so earns a larger payoff.    Not quite — the conclusion is right but the reason is not. The price you pay is , the runner-up's bid, never your own, so bidding higher does not increase your payoff at all.       On your own, think about why condition (1) also holds in the case . This appears in the reading later as well. Together, the two cases give condition (1): bidding is at least as good as bidding against every choice of by the other players.  Now for condition (2). Having fixed a bid , we need to find one collection of bids by the other players that makes give Player 1 a strictly better payoff than does. This also breaks into two cases, but notice they are not the same two cases as before: what matters now is not where landed, but whether is an underbid or an overbid. So the cases are and . We do the first one together in the checkpoint below!    Take a bid . Condition (2) asks us to produce some bids by the other players making strictly better than . Which choice does the job?      Bids whose highest is strictly between and , so that . Then wins the auction for a payoff of , while falls below and loses, for a payoff of .    Correct, and notice how the choice depends on : for a different underbid you would slide somewhere else. That is allowed, since condition (2) only asks that a suitable choice exist for each . In words: underbidding costs you an auction you wanted to win, whenever somebody else bids into the gap you left open.      Bids whose highest is below , so that .    Not quite. Then both and are above , so both win and both pay . The payoffs are equal, and condition (2) needs a strict inequality.      Bids whose highest is above , so that .    Not quite. Then both bids are below , so both lose the auction and both give a payoff of . Equal again, so this does not satisfy condition (2).      No choice works. We saw in the previous checkpoint that ties with other bids, so a strict inequality is impossible.    Not quite. The previous checkpoint found ties against bids above  , but that was for one fixed . Here we are free to move the other players' bids around, and some positions do produce a strict comparison.       On your own, work out the other case, an overbid . The idea is the same, but in the other direction: choose the other players' bids so that lands strictly between and , then compare what each bid earns you. Together, the two cases give condition (2) for every , and with condition (1) we have that weakly dominates every other bid.  Now let's finish off the section!   Section 2.7, Second-Price Auctions (Part 2)   Read the rest of Section 2.7.   The book organizes this as a four-row table covering every combination of against and against , and then discusses conditions (1) and (2) of weak dominance. You've already thought through both conditions, and this is a case where thinking through why it's true is easier than parsing the book's wording. Now that you have some understanding of the result, you can match your own thinking to what the book says!   That was quite a bit of case analysis to get to the result on weak dominance for the auction. But the result makes sense, and it shows why second-price auctions are a good method. Your best option is to bid what you think the item is worth, and this holds no matter what your opponents choose. So there are no mind games or worrying about the other bids when you decide what to bid!  "
},
{
  "id": "table-2-3-example",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#table-2-3-example",
  "type": "Table",
  "number": "2.2.1",
  "title": "The example matrix from Section 2.3",
  "body": " The example matrix from Section 2.3     Player 2: c  Player 2: d  Player 2: e  Player 2: f    Player 1: a  (1, 2)  (−1, 2)  (2, 4)  (−1, 3)    Player 1: b  (4, 1)  (1, 1)  (3, 1)  (0, 2)    "
},
{
  "id": "fig-dominance-pair-explorer",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#fig-dominance-pair-explorer",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Comparing two strategies of the same player, Section 2.3 example matrix.   "
},
{
  "id": "check-c-vs-d",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#check-c-vs-d",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": "  Compare Player 2's strategies c and d. Against a, both give ; against b, both give . What is the relationship between them?      Neither weakly dominates the other.    Correct. Weak dominance has two requirements: at least as good in every column, and strictly better in at least one. Here c and d clear the first requirement in both directions but fail the second in both directions, since there is no column where either one is strictly better.      Each weakly dominates the other, since neither is ever worse than the other.    Not quite. Never worse is only half of the definition. Weak dominance also requires being strictly better in at least one column, and there's no column here where c beats d or d beats c. So neither one weakly dominates.      c weakly dominates d, because c comes first in the matrix and the payoffs are tied.    Not quite. Nothing in the definition depends on the order the strategies are written in. Ties in every column mean neither strategy weakly dominates the other.      c strictly dominates d, since strict dominance only requires not doing worse.    Not quite — that's a weaker condition than strict dominance, which requires a strictly better payoff in every column. Tied payoffs rule out strict dominance immediately.     "
},
{
  "id": "check-e-vs-f",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#check-e-vs-f",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": "  Now compare Player 2's strategies e and f. Against a, e gives and f gives ; against b, e gives and f gives . What is the relationship between them?      Neither dominates the other, in either sense.    Correct, and notice this is a different reason than the c and d case. There, the two strategies were tied everywhere. Here each strategy wins a column: e is better against a, f is better against b. Either way there is no domination, but the way it fails is not the same.      e weakly dominates f, since e's best payoff is larger than f's best payoff .    Not quite. Dominance is checked column by column, comparing what the two strategies give against the same choice by Player 1. Against b, f gives and e gives , so e is not always at least as good.      f weakly dominates e, since f gives Player 2 a higher payoff in the column that actually gets played.    Not quite. Dominance is a property of the matrix on its own, checked against every column, with no assumption about which one Player 1 will choose. That's exactly what makes it a useful starting point; you can apply it before knowing anything about the other player's behavior.     "
},
{
  "id": "check-global-warming-pd",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#check-global-warming-pd",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": "  Why does this global warming game count as a version of the Prisoner's Dilemma?      Every country has a strictly dominant strategy (spend nothing), but if every country instead spent the dominated amount of , every single country would end up better off.    Correct. Spending nothing gives every country a payoff of , but if all ten countries spent , every country's payoff would be instead, strictly better. Rational individual behavior (everyone defects) leads to a worse outcome for everyone than if they'd all cooperated, exactly the Prisoner's Dilemma pattern, just with ten players instead of two.      Because each country's payoff depends on what the other countries do.    Not quite, that's true of almost every game we've studied so far, not just Prisoner's Dilemma-type games. Something more specific has to hold.      Because there are more than two players.    Not quite, the Prisoner's Dilemma pattern isn't about the number of players, the original version had only two.     "
},
{
  "id": "recall-condition-1",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#recall-condition-1",
  "type": "Example",
  "number": "2.2.6",
  "title": "Condition (1).",
  "body": " Condition (1)   The first condition compares with against every choice of . What does it say?    Bidding must be at least as good as bidding , no matter what the others do:   This is a , so ties are allowed.   "
},
{
  "id": "recall-condition-2",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#recall-condition-2",
  "type": "Example",
  "number": "2.2.7",
  "title": "Condition (2).",
  "body": " Condition (2)   The second condition only needs one choice of . What does it say?    The comparison must be strict for at least one choice by the other players:   That choice may depend on : a different rival bid can call for a different choice by the others.   "
},
{
  "id": "check-auction-condition-1",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#check-auction-condition-1",
  "type": "Checkpoint",
  "number": "2.2.8",
  "title": "",
  "body": "  Assume the other players' bids make it so that , and let be any other bid you might have made. Does condition (1) for weak dominance hold here, and why?      Yes. Bidding wins and pays , for a payoff of . Any above also wins and also pays , giving exactly the same payoff. Any below loses, giving , which is smaller. So is never worse.    Correct. Notice the comparison splits into a region where the two bids tie and a region where genuinely wins out. Condition (1) only asks for , so the ties are perfectly acceptable.      No. Every bid above gives exactly the same payoff as , and a condition about dominance cannot be satisfied by a tie.    Not quite. This is condition (1), the requirement, so ties are fine. It is condition (2) that demands a strict comparison, and it only demands one.      Yes, and in fact is strictly better than every other bid here, since bidding your true value is always optimal.    Not quite. Bidding is never worse, but it is not strictly better than everything: any bid above wins the same object at the same price , so those bids tie with .      Yes, because bidding higher wins by a wider margin and so earns a larger payoff.    Not quite — the conclusion is right but the reason is not. The price you pay is , the runner-up's bid, never your own, so bidding higher does not increase your payoff at all.     "
},
{
  "id": "check-auction-condition-2",
  "level": "2",
  "url": "ch2-page2-dominated-strategies.html#check-auction-condition-2",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": "  Take a bid . Condition (2) asks us to produce some bids by the other players making strictly better than . Which choice does the job?      Bids whose highest is strictly between and , so that . Then wins the auction for a payoff of , while falls below and loses, for a payoff of .    Correct, and notice how the choice depends on : for a different underbid you would slide somewhere else. That is allowed, since condition (2) only asks that a suitable choice exist for each . In words: underbidding costs you an auction you wanted to win, whenever somebody else bids into the gap you left open.      Bids whose highest is below , so that .    Not quite. Then both and are above , so both win and both pay . The payoffs are equal, and condition (2) needs a strict inequality.      Bids whose highest is above , so that .    Not quite. Then both bids are below , so both lose the auction and both give a payoff of . Equal again, so this does not satisfy condition (2).      No choice works. We saw in the previous checkpoint that ties with other bids, so a strict inequality is impossible.    Not quite. The previous checkpoint found ties against bids above  , but that was for one fixed . Here we are free to move the other players' bids around, and some positions do produce a strict comparison.     "
},
{
  "id": "ch2-page3-iterated-elim",
  "level": "1",
  "url": "ch2-page3-iterated-elim.html",
  "type": "Section",
  "number": "2.3",
  "title": "Iterated Elimination of Dominated Strategies",
  "body": " Iterated Elimination of Dominated Strategies  We begin this page with a short reading.   Section 2.8, Iterated Elimination of Dominated Strategies   Read Section 2.8.   This section quickly introduces the method of iterated elimination of dominated strategies. After you read, we will demonstrate with an interactive.   So the idea is we try to find a good strategy by getting rid of strategies that are beaten by some other strategy. Now it's time to see this in practice!  Here's the payoff matrix that you will see later in Section 2.9, the Battle of the Bismarck Sea. You'll get more of the historical context later once we get to the reading. For now, let's just look at the iterated elimination itself.   Battle of the Bismarck Sea, payoff matrix     Imamura sail north  Imamura sail south    Kenney search north  (1⅓, −1⅓)  (1½, −1½)    Kenney search south  (1, −1)  (2, −2)     Before any elimination, neither of Kenney's strategies dominates the other. Let's do the iteration, starting with Imamura, in the interactive below. In the interactives on this page, pay attention to whether the strategies are being strictly or weakly dominated, and we will see this distinction matters later on!   Iterated elimination of dominated strategies, Battle of the Bismarck Sea.     Section 2.9, The Battle of the Bismarck Sea   Read Section 2.9.   The math is actually all done in the last interactive. This reading just gives fuller context.   Next we return to Big Monkey and Little Monkey, this time writing the game in normal form.   Section 2.10, Normal Form of a Game in Extensive Form with Complete Information   Read Section 2.10.   This section describes how to convert a game tree (game in extensive form) to a game in normal form. We'll work through this with an interactive shortly.   Section 2.10 converts Big Monkey and Little Monkey, from Chapter 1, into normal form. Explore the connection between the two representations below. Click the different payoffs on the table to see the corresponding strategy highlighted in the tree.    Big Monkey and Little Monkey, normal form and extensive form side by side.    We're not done with this example! Let's take this a step further and use iterated elimination on this normal form matrix.   Iterated elimination of weakly dominated strategies, Big Monkey and Little Monkey (first ordering).    Let's try a different order of elimination on the same matrix. Make sure to go through this one as well, even if you feel you understand iterated elimination! We are going to see an interesting conclusion.    Iterated elimination of weakly dominated strategies, Big Monkey and Little Monkey (second ordering).     Section 2.11, Big Monkey and Little Monkey 2   Read Section 2.11.   The two examples worked out there are exactly the two interactives above. So, you don't need to re-read every step if you feel good about how we get the two results already.   Big Monkey and Little Monkey is illuminating because two valid elimination orders gave two different results. The first ordering pinned down a unique dominant strategy equilibrium; the second only pinned down Big Monkey's strategy, leaving Little Monkey's undetermined. Iterated elimination of strictly dominated strategies always gives the same answer no matter the order, but iterated elimination of weakly dominated strategies does not.   "
},
{
  "id": "table-bismarck-sea",
  "level": "2",
  "url": "ch2-page3-iterated-elim.html#table-bismarck-sea",
  "type": "Table",
  "number": "2.3.1",
  "title": "Battle of the Bismarck Sea, payoff matrix",
  "body": " Battle of the Bismarck Sea, payoff matrix     Imamura sail north  Imamura sail south    Kenney search north  (1⅓, −1⅓)  (1½, −1½)    Kenney search south  (1, −1)  (2, −2)    "
},
{
  "id": "fig-bismarck-sea-elimination",
  "level": "2",
  "url": "ch2-page3-iterated-elim.html#fig-bismarck-sea-elimination",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " Iterated elimination of dominated strategies, Battle of the Bismarck Sea.   "
},
{
  "id": "fig-normal-extensive-bmlm",
  "level": "2",
  "url": "ch2-page3-iterated-elim.html#fig-normal-extensive-bmlm",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " Big Monkey and Little Monkey, normal form and extensive form side by side.   "
},
{
  "id": "fig-bmlm-elimination-1",
  "level": "2",
  "url": "ch2-page3-iterated-elim.html#fig-bmlm-elimination-1",
  "type": "Figure",
  "number": "2.3.4",
  "title": "",
  "body": " Iterated elimination of weakly dominated strategies, Big Monkey and Little Monkey (first ordering).   "
},
{
  "id": "fig-bmlm-elimination-2",
  "level": "2",
  "url": "ch2-page3-iterated-elim.html#fig-bmlm-elimination-2",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": " Iterated elimination of weakly dominated strategies, Big Monkey and Little Monkey (second ordering).   "
},
{
  "id": "ch2-page5-critique",
  "level": "1",
  "url": "ch2-page5-critique.html",
  "type": "Section",
  "number": "2.4",
  "title": "Generalizing the Correspondence and a Critique",
  "body": " Generalizing the Correspondence and a Critique  Before reading Section 2.12, work through the backward induction on Big Monkey and Little Monkey below, and watch what happens to the normal form matrix at each step. The idea is that each step of backward induction on the tree corresponds to a step of iterated elimination of weakly dominated strategies on the matrix.   Backward induction on the tree and iterated elimination on the matrix, side by side.     Section 2.12, Backward Induction and Iterated Elimination of Dominated Strategies   Skim Section 2.12. You won't need it for homework. What matters is the intuition you just built in the interactive above.  This section proves, in general, what you just saw for Big Monkey and Little Monkey: backward induction and iterated elimination of weakly dominated strategies always correspond, step for step, for any two-player extensive form game.   We end Chapter 2 with a very short reading on the limitations of eliminating dominated strategies.   Section 2.13, Critique of Elimination of Dominated Strategies   Read Section 2.13.   This one is quick: the critiques of long backward inductions from Chapter 1 apply to iterated elimination too.   The big issue we saw is that for iterated elimination of weakly dominated strategies, there can be different reduced games. Let's think about why this happens for weak domination but not strict.  In the strict case, suppose you eliminate because strictly dominates it, and now imagine an order where goes first. That doesn't rescue : was itself eliminated by some , and beats beats . With only finitely many strategies, this chain stops at a survivor that dominates . Eliminating the opponent's strategies doesn't rescue it either, since beats against every opponent strategy, so it still beats it against whichever remain.  So an elimination that was available stays available, and that is what forces every order to the same place. If weak domination gives different reduced games, the failure has to be exactly here: some order must make an available elimination stop being available, and the strategy that would have been deleted then survives to the end.  Now think about this a bit further in the follow question!    Which step of the strict argument breaks for weak domination?      The step about the opponent. Weak domination only requires to beat against some opponent strategy, so eliminating that one strategy leaves them tied everywhere and neither dominates. The elimination is gone for good, and survives to the end.    Correct. Strict domination needed to beat against every opponent strategy, which is exactly what made eliminating opponent strategies harmless. Weak domination can rest on a single column, and removing that column removes the domination. One order deletes ; the other leaves it standing.      The chain step. Under weak domination the chain of dominators can run forever without reaching a survivor.    Not quite. That part still works: there are finitely many strategies either way, so a chain of dominators has to stop. The trouble comes from the opponent's side of the matrix.      None of them. Eliminating a weakly dominated strategy changes the payoffs in the cells that remain.    Not quite. Eliminating a strategy just removes a row or column; every payoff still showing is what it was before. What changes is which comparisons you can still make.      None of them. Two strategies can weakly dominate each other, so the elimination could go either way.    Not quite. If neither is strictly better anywhere, they are tied everywhere and neither weakly dominates the other. The problem isn't domination running both directions, it's a one-way domination disappearing once part of the game is removed.      "
},
{
  "id": "fig-backward-induction-correspondence",
  "level": "2",
  "url": "ch2-page5-critique.html#fig-backward-induction-correspondence",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " Backward induction on the tree and iterated elimination on the matrix, side by side.   "
},
{
  "id": "check-weak-order-dependence",
  "level": "2",
  "url": "ch2-page5-critique.html#check-weak-order-dependence",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": "  Which step of the strict argument breaks for weak domination?      The step about the opponent. Weak domination only requires to beat against some opponent strategy, so eliminating that one strategy leaves them tied everywhere and neither dominates. The elimination is gone for good, and survives to the end.    Correct. Strict domination needed to beat against every opponent strategy, which is exactly what made eliminating opponent strategies harmless. Weak domination can rest on a single column, and removing that column removes the domination. One order deletes ; the other leaves it standing.      The chain step. Under weak domination the chain of dominators can run forever without reaching a survivor.    Not quite. That part still works: there are finitely many strategies either way, so a chain of dominators has to stop. The trouble comes from the opponent's side of the matrix.      None of them. Eliminating a weakly dominated strategy changes the payoffs in the cells that remain.    Not quite. Eliminating a strategy just removes a row or column; every payoff still showing is what it was before. What changes is which comparisons you can still make.      None of them. Two strategies can weakly dominate each other, so the elimination could go either way.    Not quite. If neither is strictly better anywhere, they are tied everywhere and neither weakly dominates the other. The problem isn't domination running both directions, it's a one-way domination disappearing once part of the game is removed.     "
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
