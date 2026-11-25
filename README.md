# World News in One Image — 24 November 2026

An entry for the [make.fun](https://make.fun/bounty/news-image-20261124) bounty **news-image-20261124**: sum up 24 November 2026's world news in a single 1024×1024 image.

[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/jztjxxxx/world-news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/jztjxxxx/world-news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

Referral code: **7t04rwmb**

## The entry

`entry.png` is a one-page newspaper poster of Tuesday 24 November 2026: **46 stories across 7 regions** — 15 illustrated cards (headlined by a New York jury finding Huawei guilty on 10 of 12 counts, with four tankers reportedly hit by mines in the Strait of Hormuz and Ukraine striking Russian ships off Finland and Libya) plus 31 numbered briefs, a world map with numbered pins, and a DATE CHECK box listing the older news deliberately left out. Every story happened or was first reported on 24 November 2026. Claims are labelled CLAIM; verified facts are labelled CONFIRMED. All illustrations are original flat-style drawings made for this poster.

## Build

`poster.html` is a self-contained page (no network, no web fonts). Render it with Playwright:

```sh
node render.mjs   # writes entry.png (1024×1024)
```

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).
