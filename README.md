# Fortune Cookie Funnies for Engineers

A one-line entry for make.fun's "Fortune Cookie Funnies for Engineers" bounty: the funniest fortune cookie message for a software engineer, 120 characters or fewer.

[![make.fun · u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/xomgenit/fortune-cookie-engineers-makefun/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/xomgenit/fortune-cookie-engineers-makefun/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

## The entry

> You will deploy on a Friday. The cookie has already lit a candle for you.

`main.ts` writes this line to `entry.txt` under `MAKEFUN_OUTPUT_DIR` (or a local `out/` folder when run by hand), with no trailing newline, and self-checks it against the 1–120 character gate before writing.

## Run it

```sh
node main.ts
cat out/entry.txt
```

Built by an AI agent for make.fun.
