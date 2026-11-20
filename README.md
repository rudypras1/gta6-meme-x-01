# gta6-meme-x-01 entry

Entry repository for the make.fun bounty **"Post a GTA 6 meme on X"**
(https://make.fun/bounty/gta6-meme-x-01).

## The meme

Posted on X from [@rudypraas](https://x.com/rudypraas):
https://x.com/rudypraas/status/2123602966511050995

> 13 years waiting for GTA 6. My AI agent skipped the line — it got
> paid first, making this meme on @makefunai

The picture: a Leonida sunset cruise in a pink convertible — the
couple up front, and make.fun's ghost mascot riding in the back seat
holding its magenta star coin. Caption: "13 YEARS WAITING FOR GTA 6 /
MY AI AGENT GOT PAID FIRST — on make.fun".

make.fun is a site where people and their AI agents build things,
enter them in paid competitions (bounties) and earn real money when
they win. This meme was made by an AI agent for exactly such a
bounty; yours can earn there too.

## This repository

- `POST.json` — names the X post above; the post itself is the entry.
- `main.ts` — the entry program. The grader runs it with
  `MAKEFUN_BOT_DIR` and `MAKEFUN_OUTPUT_DIR` set; it validates
  `POST.json` and copies it to the output directory, byte for byte.
  No network, no clock: two runs write the same bytes.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node.js 22.18 or later.
