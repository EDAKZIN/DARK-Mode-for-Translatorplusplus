# DARK Mode for Translator++

> [!NOTE]
> This is a custom Dark Theme manager add-on designed for Translator++. It features real-time hot-reloads, full configuration toggles, and high-contrast responsive layouts without requiring app restarts.

**DARK Mode** is a premium layout customization plugin for **Translator++** created by **EDAKZIN**. It dynamically transforms the default bright/grey user interface into a sleek, dark aesthetic while resolving native visibility issues, preserving text contrast, and providing an elegant configuration manager.

---

## Features

- **Dynamic Toolbar Trigger**: Injects a native Fontello `icon-moon` vector button into the main toolbar (`toolbar5`) that matches your app's resolution and toolbar scale.
- **Custom JQuery UI Modal**: A beautifully integrated configuration panel in English that allows real-time personalization.
- **Options Window Adaptations**: Applies a dark, readable skin to the user profile stats, Patreon badges, and the global Add-ons manager.
- **Translucent Search Layout**: A high-contrast glassmorphism style for the Find/Replace window so you can search and reference the underlying SlickGrids comfortably.
- **Live Translation Panel Overrides**: Dark-styled container overrides for `#translationPane` and card portlets.
- **Fail-Safe Persistence**: Saves preferences natively via `thisAddon.setConfig` so your custom configurations persist automatically across application launches.
- **Isolated NW.js Window Hooking**: Automatically intercepts and styles newly spawned Electron/NW.js windows (like Search, Console, or Options) as soon as they load.

---

## 📦 Add-on Structure

| File | Type | Description |
|------|------|-------------|
| [main.js](main.js) | JavaScript (Orchestrator) | Handles the main lifecycle hooks, window interceptors, and hot style reloading. |
| [settings.js](settings.js) | JavaScript (Config UI) | Controls toolbar moon injections and displays the native configuration modal. |
| [sections.js](sections.js) | JavaScript (Styles DB) | Holds custom dark CSS overrides separated by layout sections (Options, Finder, Translators). |
| [package.json](package.json) | JSON (Manifest) | Defines hook entry points, versions, author details, and general configurations. |
| [icon.png](icon.png) | PNG (Asset) | Graphical logo representing the add-on inside the native Add-ons Manager. |
| [README.md](README.md) | Markdown (Docs) | Project documentation, setup guide, and building instructions. |

---

## 🔧 Building and Installation

> [!IMPORTANT]
> Translator++ installs extensions using `7zip-min` by extracting the `.tap` package directly into the `www/addons/` directory.
> 
> To prevent app crashes and directories pollution:
> 1. You **must** compress files under an isolated parent folder named `dark-mode/` inside the ZIP archive.
> 2. Direct flat compression of loose root files will dump `package.json` into the root of `www/addons/`, corrupting the entire Translator++ add-ons loading registry!

### Build Package Commands (PowerShell)

To generate a perfectly structured, ready-to-distribute `DARK-Mode.tap` package, run the following commands in PowerShell from the repository's root folder:

```powershell
# 1. Create temporary directory structure in the parent folder
New-Item -ItemType Directory -Force -Path "..\temp_build\dark-mode"

# 2. Copy production files into the folder
$files = @(
    "main.js",
    "settings.js",
    "sections.js",
    "package.json",
    "icon.png",
    "README.md"
)
Copy-Item -Path $files -Destination "..\temp_build\dark-mode\" -Force

# 3. Compress the folder (creates dark-mode/ wrapper inside zip)
Compress-Archive -Path "..\temp_build\dark-mode" -DestinationPath "..\DARK-Mode.zip" -Force

# 4. Rename to tap extension and clean up
Move-Item -Path "..\DARK-Mode.zip" -Destination "..\DARK-Mode.tap" -Force
Remove-Item -Path "..\temp_build" -Recurse -Force
```

---

## 🎮 How to Use

1. Start **Translator++**.
2. Go to `Options` -> `Add-ons` and install the compiled **`DARK-Mode.tap`** package by drag-and-dropping or importing it.
3. Locate the **Moon button** in the top right section of the main toolbar next to the Help button.
4. Click the moon icon to display the **DARK Mode Customizer**:
   - **Apply Dark Mode to "Options" window**: Instantly toggle the dark theme over user stats and add-on tabs.
   - **Apply Dark Mode to "Search" window**: Toggle the high-contrast dark layout over the Find/Replace window.
5. Click **Save & Apply** to see changes take effect immediately — fully dynamic, no restart required.

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| Core Engine | NW.js (Chromium + Node.js Context) |
| UI Framework | JQuery & JQuery UI (Native Dialogs) |
| Styles Engine | Vanilla CSS Injection with Custom Realtime Hot-Reloads |
| Vector Glyphs | Fontello Iconic Font (Natively bundled in Translator++) |

---

## 📄 License & Version

MIT License - Developed by **EDAKZIN**

---
**Version 1.6.2** - Last updated: May 2026
