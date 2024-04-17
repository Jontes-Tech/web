---
theme: apple-basic
layout: intro
---

# Att nöja sig med prestandan

När är applikationen snabb nog, och när bör man optimera

---
layout: intro-image-right
---

# `whoami`
* TypeScript dev
* Älskar bleeding-edge teknik
* Överoptimerar bäst-det-går på webben
<div style="position:fixed;bottom:0;right:0;width:42vh"><img style="object-fit:cover" src="/jonte_square.png"></div>
---
---
# Varför spelar prestanda roll?
<li v-click>Bättre user experience (bättre tillit)</li>
<li v-click>Prestanda är viktigt för SEO</li>
<!-- Nån titel -->
---
layout: "center"
---
# Vad kan vi göra?
---

# Caching
* Slippa ladda ner samma data flera gånger
* Browser: Användardata
* CDN: Globalt distribera
* KV: ALLT
---
---
# Prefetching
* Gör jobbet innan användaren väntar
* Smarta frontends som hintar till backends
* On hover
---
---
# Optimistic UI
* "Lura användaren", korrigera därefter
* Försök gissa vad som ska hända
---
---
# Streaming/SSE
* Inte vänta på flaskhalser, skicka vad du har
---
---
# När kan det bli för mycket?
<li v-click>Kostar DX eller UX</li>
<li v-click>Leder till mycket komplexitet</li>
---
---
# Nu låtsas vi
Vi ska bygga en webbsida.
<div v-click class="mb-6">
<h2>Landing page: Static site</h2>
Förgenerera; serva HTML</div>
<div v-click class="mb-6">
<h2>Interaktiv Webapp: Server-side rendering med klient-hydration</h2>
HTML på server, cachea aggressivt</div>
<div v-click class="mb-6">
<h2>Ingen SEO: Client-side rendering</h2>
Keep it simple med CSR</div>
---
---
# Lätt att optimera för tidigt
<li v-click>Mikrooptimiseringar (typ i++ vs ++i)</li>
<li v-click>Låta bli abstractions i onödan</li>
---
---
# Okonventionella idéer
<li v-click>Tippa på user intent vid resource priority</li>
<li v-click>Ge mer högupplöst innehåll till folk med bättre uppkoppling/enhet</li>
<li v-click>"Resolution greater than"</li>
---
---
# Case study: Enstate
https://enstate.rs/n/jontes.eth

- Skriven i Rust
- Queryar en långsam RPC
---
---
<img src="/draw/enstate.png" class="w-128">
---
---
# Vad ska vi göra?
---
---
# Tack för mig!
