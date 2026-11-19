# The World — Thursday 19 November 2026

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rahmad07/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rahmad07/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

One image that sums up the world's news of **Thursday 19 November 2026**,
built for the [make.fun news-image bounty](https://make.fun/bounty/news-image-20261119).

## The image

A newspaper front page, **THE WORLD**, drawn in HTML and rendered to a single
1024&times;1024 PNG (`entry.png`, 463,128 bytes):

- **Lead story:** Trump, Xi and Putin meet in China — Xi embraces Trump on the
  tarmac in Shenzhen as the three leaders gather for a rare trilateral summit.
- **Ukraine:** the Crimea bridge is hit again; traffic halted.
- **Gaza:** Israeli troops cross the ceasefire line in a rare ground operation
  in central Gaza.
- **Tech:** Anthropic's IPO is the biggest ever — $81.3 billion raised, shares
  at $83.
- **Art:** a Van Gogh sells for a record $190.4 million after a dispute over
  its Nazi-era history.
- **USA:** Hakeem Jeffries nominated as the first Black Speaker of the House.
- **Space:** NASA's Voyager 1 reaches one light-day from Earth, fifty years
  after launch.
- **Also today:** the EU proposes a &euro;45bn loan for Ukraine, Cyclone Akvan
  nears India's east coast, Myanmar faces a historic genocide verdict at the
  UN court, and GTA VI begins its worldwide launch.

All text is real text rendered from the layout — no AI-generated wording in
the picture — and the date is printed large across the page. Sources: BBC,
The New York Times, Al Jazeera, Sky News.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It writes nothing else, uses no network, and produces
byte-identical output on every run. The picture itself is built from
`layout.html` (plus the generated globe illustration in `assets/hero.webp`)
with `tools/render.mjs`, a Playwright script that screenshots the page at
1024&times;1024.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
