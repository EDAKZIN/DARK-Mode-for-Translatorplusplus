/**
 * DARK Mode - Main Logic
 * Independent injection system using inline CSS string
 */

const thisAddon = this;
const ADDON_NAME = "dark-mode";

// Incrustar el CSS directamente como un string literal para evitar dependencias
const cssString = `
/* 
 * DARK Mode for Translator++
 * Extreme High contrast theme (Pure Black & Pure White)
 */

:root {
    --gr-lv0: #000000 !important;
    --gr-lv1: #050505 !important;
    --gr-lv2: #0a0a0a !important;
    --gr-lv3: #111111 !important;
    --gr-lv4: #1a1a1a !important;
    --gr-lv5: #222222 !important;

    --gr-lv12: #ffffff !important;
    --gr-lv13: #ffffff !important;
    --gr-lv14: #ffffff !important;
    --gr-lv15: #ffffff !important;
    --gr-lv16: #ffffff !important;
    
    --text-color: #ffffff !important;
    --text-color-dark: #ffffff !important;
    --text-color-highlighted: #ffffff !important;
    
    --bg-row-odd: #000000 !important;
    --bg-row-even: #080808 !important;
    --bg-highlighted: #00e5ff !important;
    
    --primary-color: #00e5ff !important;
    --blue-500: #00e5ff !important;

    --grid-bg: #000000 !important;
    --grid-active-cell-bg: #111111 !important;
    --table-header-bg: #1a1a1a !important;
    --table-header-text-color: #ffffff !important;
}

html { color-scheme: dark !important; }

body, .ui-widget-content, .ui-widget-header, 
.applicationBar, .footer, .panel-left, .panel-right, .panel-wrapper,
.toolbarGroup, .toolbar, .toolbar-content, .menuPanelTool, .tabsBarTop,
.fileListWrapperOuter, .fileListWrapper, .fileListUl, .tree,
.bottomToolbar, .bottomToolbarIcon, .panel-right-tools,
#cellSelectionInfo, .cellInfoTabHeader, .tabButtons, .tabButton, 
.cellInfoMenu, .cellInfoCtrl, .tabSide, .footer-content,
.subToolbar, .switchableToolbar, #menuPanel, #mainArea, .appActionsLeft, .ribbonMenu {
    background-color: #000000 !important;
    color: #ffffff !important;
    background-image: none !important;
    border-color: #222222 !important;
}

/* Ribbons and Tabs Active States */
.tabButton.active, .ribbonMenu.active {
    background-color: #111111 !important;
    color: var(--primary-color) !important;
    border-bottom: 2px solid var(--primary-color) !important;
}

/* Input boxes in panels (like Quick Find, Filter) */
input.search, input.quickFind, .menuPanelSearch {
    background-color: #111111 !important;
    color: #ffffff !important;
    border: 1px solid #444 !important;
}

/* Lists and Tree nodes in Left Panel */
.fileListUl > li, .tree > li, .list > li {
    background: transparent !important;
    color: #cccccc !important;
}
.fileListUl > li:hover, .tree > li:hover, .list > li:hover {
    background-color: #111111 !important;
    color: #ffffff !important;
}
.fileListUl > li.selected, .tree > li.selected, .list > li.selected {
    background-color: #222222 !important;
    color: var(--primary-color) !important;
}

.ui-dialog, .ui-dialog-content, .ui-tabs-panel, .options-content {
    background: #050505 !important;
    color: #ffffff !important;
}

input, textarea, select {
    background-color: #111111 !important;
    color: #ffffff !important;
    border: 1px solid #444 !important;
}

button, .btn, .ui-button {
    background: #1a1a1a !important;
    color: #ffffff !important;
    border: 1px solid #333 !important;
}

button:hover, .btn:hover {
    background: #333 !important;
    border-color: var(--primary-color) !important;
}

.toolbar-button, .menu-button {
    background: transparent !important;
    border: 1px solid transparent !important;
    color: #ffffff !important;
}

.toolbar-button:hover {
    background: #222 !important;
    border-color: #444 !important;
}

.handsontable td {
    background-color: #000000 !important;
    color: #ffffff !important;
    border-color: #222 !important;
}

.handsontable tr:nth-child(even) td {
    background-color: #050505 !important;
}

.handsontable th {
    background-color: #111111 !important;
    color: #ffffff !important;
}

img[src*="img/"], .icon- {
    filter: invert(1) brightness(2) !important;
}

.addonsIconBlock img, .user-avatar img {
    filter: none !important;
}

::-webkit-scrollbar { width: 12px !important; }
::-webkit-scrollbar-track { background: #000 !important; }
::-webkit-scrollbar-thumb {
    background: #333 !important;
    border: 2px solid #000 !important;
    border-radius: 6px !important;
}
::-webkit-scrollbar-thumb:hover { background: #555 !important; }
`;

thisAddon.cssString = cssString;

/**
 * Inyecta el CSS directamente como un tag <style> en el DOM
 */
thisAddon.injectCSS = function(wind) {
    if (!wind || !wind.document) return;
    
    // Evitar duplicados
    if (wind.document.getElementById("dark-mode-styles")) return;

    const style = wind.document.createElement("style");
    style.id = "dark-mode-styles";
    style.innerHTML = thisAddon.cssString;
    
    if (wind.document.body) {
        wind.document.body.appendChild(style);
        wind.document.body.setAttribute("data-theme", "dark");
        wind.document.body.setAttribute("data-bs-theme", "dark");
    } else {
        wind.document.head.appendChild(style);
    }
};

/**
 * Elimina el CSS inyectado
 */
thisAddon.removeCSS = function(wind) {
    if (!wind || !wind.document) return;
    const style = wind.document.getElementById("dark-mode-styles");
    if (style) style.remove();
    if (wind.document.body) {
        wind.document.body.removeAttribute("data-theme");
        wind.document.body.removeAttribute("data-bs-theme");
    }
};

thisAddon.enable = function() {
    thisAddon.injectCSS(window);

    if (window.ui && window.ui.windows) {
        for (let key in window.ui.windows) {
            try { thisAddon.injectCSS(window.ui.windows[key]); } catch (e) {}
        }
    }

    if (window.scriptRunner) {
        window.scriptRunner.applyScript("*", "onReady", ADDON_NAME, function() {
            const parentLoader = window?.top?.addonLoader || window?.opener?.addonLoader || window?.opener?.opener?.addonLoader;
            if (parentLoader) {
                const addon = parentLoader.getAddon("dark-mode");
                if (addon && typeof addon.injectCSS === 'function') {
                    addon.injectCSS(window);
                }
            }
        });
    }
};

thisAddon.disable = function() {
    thisAddon.removeCSS(window);

    if (window.ui && window.ui.windows) {
        for (let key in window.ui.windows) {
            try { thisAddon.removeCSS(window.ui.windows[key]); } catch (e) {}
        }
    }

    if (window.scriptRunner) {
        window.scriptRunner.applyScript("*", "onReady", ADDON_NAME, undefined);
    }
};

thisAddon.optionsForm = {
    "isActive": {
        "type": "boolean",
        "title": "DARK Mode",
        "description": "Activa el tema de alto contraste",
        "default": true,
        "HOOK": "thisAddon.config.isActive",
        "inlinetitle": "Habilitar modo oscuro",
        "onChange": function(evt) {
            if (this.prop("checked")) {
                thisAddon.enable();
            } else {
                thisAddon.disable();
            }
            if (typeof sys !== 'undefined' && sys.saveConfig) sys.saveConfig();
        }
    }
};

$(document).ready(function() {
    if (typeof thisAddon.config.isActive === 'undefined') {
        thisAddon.config.isActive = true;
    }

    setTimeout(() => {
        if (thisAddon.config.isActive !== false && thisAddon.config.isDisabled !== true) {
            thisAddon.enable();
        }
    }, 100);
});

// Auto-ejecución inmediata como fallback
if (thisAddon.config && thisAddon.config.isDisabled !== true) {
    thisAddon.enable();
}
