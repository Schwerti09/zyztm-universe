# 🌀 Zyztm Nexus

**Die erste vollautomatisierte KI-gesteuerte Streamer-Fan-Plattform 2026**  
Ein einziger Mittelpunkt. Alle Accounts. Alle Infos. Automatisch Cash mit digitalen Produkten.

Alle anderen Linktree-Klone werden 2026 **blass vor Neid**.

---

## Vision

Statt 7 verschiedenen Social-Media-Seiten haben Fans **einen einzigen neon-cyberpunk Nexus**, wo sie:
- Alle meine Accounts auf einen Blick sehen
- Live-Status von YT + Twitch + TikTok gleichzeitig
- Neueste Videos, Clips, Posts
- Exklusive digitale Drops (Presets, Wallpapers, Mini-Courses, AI-Fan-Art, VOD-Packs…)
- Sofort kaufen mit Stripe (automatisch)
- Mit meinem KI-Fan-Agent chatten

**Ziel:** Passives Einkommen + maximale Fan-Retention durch einen zentralen, geilen Hub.

---

## Features (aktuell in Entwicklung)

### Phase 1 – Core (live in < 7 Tagen)
- [ ] Zentrales **Creator Profile** (alle Socials + Live-Status)
- [ ] Server-side YouTube, Twitch, TikTok, Instagram, X Feeds via Netlify Functions
- [ ] Neon-Cyberpunk UI mit Glassmorphism + Three.js Particles
- [ ] Digital Shop mit Stripe Checkout
- [ ] Automatische Cache + Error-Handling

### Phase 2 – KI Magic
- [ ] KI-Fan-Chatbot (in meinem Style)
- [ ] Auto-generierte Weekly Recaps + Fan-Empfehlungen
- [ ] AI-generierte exklusive Produkte (Wallpapers, Thumbnails, etc.)
- [ ] Persönliche Fan-Dashboards nach Login

### Phase 3 – God Mode
- [ ] 3D fliegender Nexus (Planeten = Plattformen)
- [ ] NFT/Membership Gates
- [ ] Vollautomatisierte Produkt-Pipelines

---

## Tech Stack

- **Frontend:** React 19 + Vite + TypeScript + Tailwind CSS v4
- **Styling:** Glassmorphism, Neon (purple/cyan/magenta), Framer Motion, Three.js
- **Backend:** Netlify Functions (ESM + TypeScript)
- **Data:** zentrales `creatorProfile.ts` + später Supabase
- **Payments:** Stripe
- **Auth:** Clerk (Phase 2)
- **Hosting:** Netlify (1-Click Deploy)
- **AI:** Grok + OpenAI ready

---

## Schnellstart (neu bauen)

```bash
# 1. Repo klonen / neu erstellen
git clone https://github.com/DEINUSERNAME/zyztm-nexus.git
cd zyztm-nexus

# 2. Installieren
npm install

# 3. Environment Variablen (.env)
cp .env.example .env
Wichtige .env Variablen
envVITE_SITE_URL=https://zyztm-nexus.netlify.app
YOUTUBE_API_KEY=dein_yt_key
TWITCH_CLIENT_ID=...
TWITCH_CLIENT_SECRET=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
Bash# 4. Entwickeln
npm run dev
Bash# 5. Deploy auf Netlify
npm run build
# dann Netlify Drag & Drop oder Git Connect

Projekt Struktur (wichtig!)
textzyztm-nexus/
├── netlify/functions/          # Alle API-Calls (Keys sicher!)
├── src/
│   ├── components/             # Neon-Cards, Grids, etc.
│   ├── data/
│   │   ├── creatorProfile.ts   # ZENTRALER MITTELPUNKT
│   │   └── shopItems.ts
│   ├── lib/
│   └── App.tsx
├── .github/copilot-instructions.md   # Copilot Rules (unbedingt!)
├── public/
└── README.md

Copilot Instructions (wichtig für dich!)
Im Root Ordner .github/copilot-instructions.md anlegen mit genau dem Inhalt aus meinem letzten Prompt (Prompt 1).
Danach immer starten mit:
Follow .github/copilot-instructions.md strictly

Roadmap 2026

KW 9 → Phase 1 live (YouTube + Shop fix)
KW 11 → Twitch + TikTok + KI-Chatbot
KW 13 → 3D Nexus Preview
KW 16 → Erste 100 Fans + erste 1.000 € passiv


Made with ❤️ & pure 2026 Energy
Von [Dein Name / Zyztm]
Die Plattform, die alle Streamer 2026 kopieren werden.
Star this repo if you’re hyped → jeder Stern = +1 Motivation 🚀

Let’s make history.
text---

**Was du jetzt machst:**
1. Neue GitHub Repo → `zyztm-nexus`
2. README.md reinkopieren
3. `.github/copilot-instructions.md` aus meinem letzten Prompt anlegen
4. Sag mir: „Repo ist da“ → dann geb ich dir sofort den kompletten `creatorProfile.ts` + ersten Netlify Function Code

Du startest komplett clean und modern.  
Kein alter Ballast mehr. Alles wird perfekt.

Bereit?  
Sag einfach „los“ und wir legen direkt los mit der ersten Datei! 🔥
