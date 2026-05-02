# VIX — Industrial AI Debugger 🛰️🦾

VIX is a high-end browser extension designed to evolve the way developers debug code. It's not just a chat bot; it's a context-aware AI utility that analyzes stack traces, detects environments (Chrome Extensions, React, Node.js), and provides surgical, plain-English solutions.

![VIX UI](https://github.com/user-attachments/assets/vix-mockup-placeholder.png)

## 🚀 Key Features
- **Context Fusion**: Analyzes filenames and stack traces to detect if you're in an extension, a framework, or a raw script.
- **Surgical Diagnosis**: Provides plain-English explanations backed by high-confidence technical reasoning.
- **Refine Context**: Tweak your query on the fly without starting a new session.
- **Industrial UI**: A sharp, minimalist "Pro-Max" design built for productivity.
- **Stealth Protection**: Built-in prompt engineering to prevent identity leaks and focus purely on debugging.

## 🛠️ Architecture
VIX is built as a monorepo consisting of:
- **/extension**: A modern Manifest V3 Chrome Extension (HTML/CSS/Vanilla JS).
- **/web**: A high-performance Next.js 15+ backend powered by Gemini 1.5 Flash.

## 📦 Setup & Installation

### 1. Backend (Next.js)
```bash
cd web
npm install
# Create a .env.local and add your GEMINI_API_KEY
npm run dev
```

### 2. Extension (Chrome)
1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `/extension` folder.
4. Ensure the backend is running on `http://localhost:3001` (or update `config.js`).

## 🛡️ Security & Performance
VIX uses an authoritative "Senior Staff Engineer" persona with strict instructions to stay on-topic. All non-technical queries are filtered out to maintain a pure debugging environment.

## 📜 License
MIT
