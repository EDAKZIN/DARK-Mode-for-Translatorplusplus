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
    --gr-lv0: #121212 !important;
    --gr-lv1: #1a1a1a !important;
    --gr-lv2: #222222 !important;
    --gr-lv3: #2d2d2d !important;
    --gr-lv4: #333333 !important;
    --gr-lv5: #3a3a3a !important;

    --gr-lv12: #e0e0e0 !important;
    --gr-lv13: #e0e0e0 !important;
    --gr-lv14: #e0e0e0 !important;
    --gr-lv15: #e0e0e0 !important;
    --gr-lv16: #e0e0e0 !important;

    /* Override info blocks gradient brightness */
    --infoblock-bg: linear-gradient(rgba(30,30,30,.8), rgba(30,30,30,.9)), url(/www/img/info.png) !important;
    --infoblock-bg-solid: linear-gradient(rgba(30,30,30,.8), rgba(30,30,30,.9)), url(/www/img/info.png), #121212 !important;
    --warningblock-bg : linear-gradient(rgba(30,30,30,.8), rgba(30,30,30,.9)), url(/www/img/warning.png) !important;
    --warningblock-bg-solid : linear-gradient(rgba(30,30,30,.8), rgba(30,30,30,.9)), url(/www/img/warning.png), #121212 !important;
    --attentionblock-bg : linear-gradient(rgba(30,30,30,.8), rgba(30,30,30,.9)), url(/www/img/bt_attention.png) !important;
    --errorblock-bg : linear-gradient(rgba(30,30,30,.8), rgba(30,30,30,.9)), url(/www/img/remove.png) !important;
    
    --text-color: #e0e0e0 !important;
    --text-color-dark: #e0e0e0 !important;
    --text-color-highlighted: #ffffff !important;
    
    --bg-row-odd: #121212 !important;
    --bg-row-even: #1a1a1a !important;
    --bg-highlighted: #00bcd4 !important;
    
    --primary-color: #00bcd4 !important;
    --blue-500: #00bcd4 !important;

    --grid-bg: #121212 !important;
    --grid-active-cell-bg: #222222 !important;
    --table-header-bg: #2d2d2d !important;
    --table-header-text-color: #e0e0e0 !important;
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
    background-color: #121212 !important;
    color: #e0e0e0;
    background-image: none !important;
    border-color: #333333 !important;
}

/* Explicitly preserve inline styles for tags and icons */
i[style*="color"], span[style*="color"], div[style*="color"] {
    color: inherit !important;
}

/* Ribbons and Tabs Active States */
.tabButton.active, .ribbonMenu.active {
    background-color: #1e1e1e !important;
    color: var(--primary-color) !important;
    border-bottom: 2px solid var(--primary-color) !important;
}

/* Menu Selectors and Large Buttons (Export, New Project) */
.menuSelector, .dialogSelection {
    background: #1e1e1e !important;
    background-image: none !important;
    border: 1px solid #333 !important;
    color: #e0e0e0 !important;
}
.menuSelector:hover, .dialogSelection:hover {
    background: #2a2a2a !important;
    border-color: var(--primary-color) !important;
}

/* Input boxes in panels (like Quick Find, Filter) */
input.search, input.quickFind, .menuPanelSearch {
    background-color: #1a1a1a !important;
    color: #e0e0e0 !important;
    border: 1px solid #444 !important;
}

/* Lists and Tree nodes in Left Panel */
.fileListUl > li, .tree > li, .list > li {
    background: transparent !important;
    color: #aaaaaa !important;
}
.fileListUl > li:hover, .tree > li:hover, .list > li:hover {
    background-color: #222222 !important;
    color: #ffffff !important;
}
.fileListUl > li.selected, .tree > li.selected, .list > li.selected {
    background-color: #333333 !important;
    color: var(--primary-color) !important;
}

.ui-dialog, .ui-dialog-content, .ui-tabs-panel, .options-content, .dialogSection, .dialog, .modal-content {
    background: #1e1e1e !important;
    color: #e0e0e0;
}

/* Fix warning boxes and badges */
.blockBox, .alert, .badge, .percentDisplay {
    background-color: #2d2d2d !important;
    color: #e0e0e0 !important;
    border-color: #444 !important;
}
.alert-warning {
    border-left: 4px solid #ff9800 !important;
}

input, textarea, select {
    background-color: #222222 !important;
    color: #e0e0e0 !important;
    border: 1px solid #444 !important;
}

button, .btn, .ui-button {
    background: #2d2d2d !important;
    color: #e0e0e0 !important;
    border: 1px solid #444 !important;
}

button:hover, .btn:hover {
    background: #3a3a3a !important;
    border-color: var(--primary-color) !important;
}

/* Toolbar icons color fix */
.appBarIcon, .toolbar-button, .menu-button, .bottomToolbarIcon {
    color: #e0e0e0 !important;
}
.appBarIcon:hover, .toolbar-button:hover, .menu-button:hover, .bottomToolbarIcon:hover {
    background-color: #222222 !important;
    color: var(--primary-color) !important;
}

.handsontable td {
    background-color: #121212 !important;
    color: #e0e0e0 !important;
    border-color: #333333 !important;
}

.handsontable tr:nth-child(even) td {
    background-color: #1a1a1a !important;
}

.handsontable th {
    background-color: #222222 !important;
    color: #e0e0e0 !important;
}

/* Invert strictly ONLY the black image icons inside the main toolbars, avoid global invert! */
.toolbar-button img, .menu-button img, .bottomToolbarIcon img {
    filter: invert(1) brightness(2) !important;
}

.addonsIconBlock img, .user-avatar img {
    filter: none !important;
}

/* Make sure dialog icons and start menu icons don't invert their colors */
.iconBar img, .dialogSelection img {
    filter: none !important;
}

::-webkit-scrollbar { width: 12px !important; }
::-webkit-scrollbar-track { background: #121212 !important; }
::-webkit-scrollbar-thumb {
    background: #3a3a3a !important;
    border: 2px solid #121212 !important;
    border-radius: 6px !important;
}
::-webkit-scrollbar-thumb:hover { background: #555555 !important; }
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
