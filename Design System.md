# CallAways — Design System

The visual language of the **Bangkok Slow Days** interactive trip Doc (`Trip Plan Doc.dc.html`).
This is the reference for rebuilding the PDF version on the same tokens. A live, rendered
version lives in `Design System.html`.

> Last synced: Feb 2026

---

## 1. Brand

- **Logo** — rounded ink square (`#2A211C`, radius 9–12px) holding a double-arc "C": an outer
  **orange** arc (`#FD6318`) over an inner **white** arc, drawn with round caps.
- **Wordmark** — `CallAways`, weight 700, letter-spacing `.06em`; the trailing **s** is orange.
- **Eyebrow** voice — IBM Plex Mono, uppercase, wide tracking, muted (`ITINERARY`, `7-DAY ITINERARY · BANGKOK`).

---

## 2. Color

### Ink & text
| Token | Hex | Use |
|---|---|---|
| Ink | `#2A211C` | Primary text, dark fills, logo box |
| Ink 2 | `#4B423B` | Secondary text, body on cards |
| Ink 3 | `#8B7F76` | Muted / supporting text |
| Ink 4 | `#AA9F96` | Labels, ticks, inactive |

### Brand accent
| Token | Hex | Use |
|---|---|---|
| Orange | `#FD6318` | Primary accent, active state, route line, CTAs |
| Orange 2 | `#FD8E1C` | Gradient partner / hover warmth |
| Orange press | `#E5500B` | Pressed accent |
| Orange on-dark | `#FFCB9A` | Eyebrow / labels over dark imagery |

### Surfaces & lines
| Token | Hex | Use |
|---|---|---|
| Page | `#E7E2DC` | App background |
| Paper | `#FBFAF8` | Cards, sheets |
| Wash | `#F2EDE7` | Icon tiles, status pill bg, tab track |
| Line | `#ECE7E1` | Default hairline border |
| Line 2 | `#E0D8D0` | Divider / ruler baseline |
| Line 3 | `#D9CFC7` | Stronger divider |
| Line 4 | `#CFC6BD` | Chevron / faint glyph |

### Status
| Token | Hex | Use |
|---|---|---|
| Green | `#2E8B57` | Open / Booked / Do |
| Green tint | `#E7F1EA` | Confirmed badge bg |
| Red | `#C0492B` | Don't |

---

## 3. Typography

- **Families:** `IBM Plex Sans` (UI + display), `IBM Plex Mono` (eyebrows, numerals, metadata).
- **Body line-height:** `1.72`; antialiased.

| Role | Font | Size | Weight | Tracking |
|---|---|---|---|---|
| Display / H1 | Sans | 34px | 700 | −.04em |
| Section title | Sans | 24px | 700 | −.02em |
| Stop name | Sans | 18px | 700 | −.014em |
| Body | Sans | 14px | 400 | — |
| Eyebrow | Mono | 11px | 500 | .2em, uppercase |
| Day number | Mono | 34px | 700 | −.04em (orange) |
| Meta / label | Mono | 10–11px | 500 | .08–.14em, uppercase |

Display = tight negative tracking; mono labels = loose positive tracking, uppercase.

---

## 4. Icons

- 24×24 grid, stroked line icons, `stroke-width:2` (chevron/check 2.2–2.4), round caps/joins.
- Inherit `currentColor`. Category icons appear oversized (70px) at `rgba(255,255,255,.28)` as
  card watermarks. `#i-flag-th` and `#i-star` are the only filled glyphs.

**Set:** `i-food` `i-coffee` `i-bar` `i-bed` `i-temple` `i-museum` `i-market` `i-camera`
`i-plane` `i-walk` `i-train` `i-boat` `i-bus` `i-star` `i-check` `i-nav` `i-clock` `i-wallet`
`i-chev` `i-back` `i-translate` `i-flag-th` `i-cal` `i-flag` `i-pin` `i-ext` `i-bulb` `i-arrow`
`i-info` `i-route` `i-plus` `i-minus` `i-locate` `i-layers` `i-close` `i-copy` `i-pdf`
`i-transfer` `i-door` `i-shield` `i-coin`

---

## 5. Components

### Buttons
- **Primary** — solid ink fill, white label, radius 10, mono-free. Map "Open in maps", inline CTAs.
- **Outline** — 1.5px ink border, white fill, **orange icon**, radius 13, often full-width ("View full day").
- **Glass** — translucent fill + `backdrop-filter:blur(8px)`, white hairline border; over imagery (Export PDF, hero).
- **Icon button** — 34–38px, white, hairline border + soft shadow; sheet **close (sticky)** and **back**.

### Badges & chips
- **Status pill** — wash bg, radius 8; green dot + "Open" then hours in ink-2.
- **Booking** — `Booked` = solid green/white; `Confirmed` = green-tint bg / green text.
- **Transit line/exit badge** — mono, filled background, white text (e.g. `Exit 1`, `BTS`, `MRT`, `ARL`) for high-contrast wayfinding.
- **Map node chip** — round, 22–24px, ink fill, **2px white ring** + drop shadow; selected node = orange.
- **Step number box** — square, 1.5px ink outline, **no fill**, mono numeral — numbers transit steps.
- **Meta chip** — icon (ink-4) + value, used for stops / hours / budget.

### Cards
- **Stat tile** — paper card, mono uppercase label + 28px bold value (Days / Stops / Budget).
- **Highlight & place card** — 200px-wide image card, bottom dark gradient, overlaid name, oversized
  watermark icon; highlight cards carry a "Day N" eyebrow. **Place cards in the home day-carousel are
  tappable and open that place's detail drawer.** Cards in a row are joined by a centered orange chevron.
- **Day card (accordion)** — `52px | 1fr` grid: mono "DAY" + big orange number, then weekday eyebrow,
  title, summary, and meta chips. Toggles an `0fr→1fr` grid panel (chevron rotates 90°) revealing the
  place carousel + "View full day".
- **Do / Don't pair** — two hairline cards; green check header / red ✕ header, colored bullet dots.

### Itinerary & transport
- **Stop row** — wash icon tile (orange glyph) + tappable stop name (chevron) + status pill.
- **Connector** — vertical **2px dashed orange** line between stops/transport.
- **Transport option** — recommended = **dashed orange border + warm tint (`#FFF8F2`)**; others = solid
  hairline. Mode icon, label + sub-label, right-aligned mono time and orange cost. Tapping opens transport detail.
- **Step rail** — square outline number boxes, dashed sub-mode connectors, inline line/exit badges.

### Local-name box & popover
- Thai name shown with **TH flag (`i-flag-th`) + translate glyph (`i-translate`)** — no "Thai" text label.
  Copy button on the right. On transit "from → to" rows, the same icon opens a popover with the local name.

### Date ruler (day top bar)
- Full-width, **frozen** (`position:sticky; top:0`). Seven day ticks (mono numeral + weekday).
- A single **orange dot slides** along the baseline (`left` transition ~.34s) to the active day; that
  day's numeral + weekday **fade to orange**. Persistent "All days" back button at left; header reads
  **`DAY 3` · Thu, Feb 12, 2026**.

### Map glass action bar
- Frosted overlay: `rgba(251,250,248,.42)` + `backdrop-filter:blur(14px)`, white top hairline.
- **Hotel chip** flies the camera to the base; **numbered node chips** select a route segment
  (selected = orange, draws a solid line to the next stop over the thin dashed full route).
  **"Open in maps"** primary button right-aligned.
- Map: MapLibre GL + CARTO Positron tiles, OSRM driving routes, zoom clamped to Thailand bounds.

### Bottom sheet / drawer
- Rounded-top sheet (radius 22) over a scrim; image header with **category pill (bottom-left)** and
  **sticky close (top-right — stays while content scrolls)**. Used for place detail, transport detail,
  and Good-to-know.
- **Height changes animate via the Web Animations API (~300ms ease)** so tab switches and drill-in /
  back resize smoothly in both directions.

### Tabs (Good-to-know)
- Segmented control on a wash track; active segment lifts to a white pill with soft shadow
  ("Getting around" / "At a place"). Switching re-measures and animates sheet height.

---

## 6. Shape, elevation & motion

- **Radii:** chips 8–11 · cards 14–18 · sheets 22 · pills 999.
- **Borders:** 1px hairline `#ECE7E1`; emphasis/recommended = 1.5px (dashed orange for recommended).
- **Shadows:** soft and low — e.g. cards `0 1px 2px rgba(43,33,24,.05)`; sheets `0 -8px 40px -12px rgba(43,33,24,.3)`.
- **Motion:** chevron rotate .24s · ruler dot slide ~.34s · accordion grid-rows .3s · sheet height WAAPI
  ~300ms `cubic-bezier(.4,0,.2,1)`. Map markers use `position:absolute` so they stay pinned across zoom.

---

## 7. Notes for the PDF build

- Reuse the **same palette, type scale, and icon set** — only the layout/medium changes.
- Interactive-only elements (live map, drawers, tabs, sliding ruler, animations) become **static
  print equivalents**: map → static route image/snapshot; drawers → expanded sections; tabs → stacked
  blocks; ruler → a printed date header per day.
- Keep wayfinding badges (line/exit), Do/Don't pairs, status pills, and the local-name box — they read
  well in print.
