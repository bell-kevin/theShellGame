# theShellGame
"The Shell Game" involves cups upturned on a playing surface, with a ball placed underneath one of them. The index of the cups are swapped around multiple times. After that the players will try to find which cup contains the ball.  Your task is as follows. Given the cup that the ball starts under, and list of swaps, return the location of the ball at the end. Cups are given like array/list indices.  For example, given the starting position 0 and the swaps [(0, 1), (1, 2), (1, 0)]:  The first swap moves the ball from 0 to 1 The second swap moves the ball from 1 to 2 The final swap doesn't affect the position of the ball. So  swaps = [[0,1], [1,2], [1, 0]] find_the_ball(0, swaps) == 2 There aren't necessarily only three cups in this game, but there will be at least two. You can assume all swaps are valid, and involve two distinct indices.


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project.  We have an
[open {bug ticket, mailing list thread, etc.} ](INSERT_LINK) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the
[Give up GitHub](https://GiveUpGitHub.org) campaign from
[the Software Freedom Conservancy](https://sfconservancy.org) to understand
some of the reasons why GitHub is not a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
[check this resource](INSERT_LINK) for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
