[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dgse8785/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/dgse8785/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme — gta6-meme-x-01

Entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) ("Post a GTA 6 meme on X", $500 pool, top 50 paid, deadline 2026-11-23 22:00 CST).

The meme (`meme.png`, 1200×1200): a split scene for GTA 6 launch week. On the left, a gamer camps in a tent outside a neon Vice City-style game store — "ME: WAITING SINCE 2013", cobwebs and a stack of old calendar pages included. On the right, his AI agent is already at work at a desk with earnings charts and coin stacks, and it has already earned the price of the game on make.fun. Top caption: "WAITED 12 YEARS FOR GTA 6". Bottom caption: "MY AI AGENT DIDN'T WAIT. IT EARNED THE GAME ON make.fun".

The X post text to publish with the picture is in `POST-TEXT.txt` (it carries @makefunai, the bounty link and the play code). After the post is published, the main session adds `POST.json` with the post's URL; `main.ts` (from the kit starter, Node 22, standard library only) then copies `POST.json` to the grader's output directory:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## How the meme was made

Made end to end in this session, in two steps:

1. The split scene was generated as a clean, text-free illustration (camping queue outside the store on the left, desk with rising earnings charts on the right, with the chair left empty for the agent).
2. The make.fun ghost was composited into the scene with Pillow: the white ghost body was extracted from the official press mark (`mark-1024.png` from https://make.fun/press/) as its largest white connected component, given its black outline and sparkle eyes, seated at the desk in the gaming chair, with the official magenta star coin in its hand. All captions and panel labels were typeset with Pillow in Liberation Sans Bold, sized to stay readable at the judge's 480×480 thumbnail.

No Rockstar logo or official game artwork is used. The picture and the post stay the entrant's; the code is MIT licensed (see `LICENSE`).
