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

    /* Addon Buttons Variables */
    --btn-addon-install-bg-color: #28a745 !important;
    --btn-addon-install-bg-gradient: #28a745 !important;
    --btn-addon-install-border-color: #218838 !important;
    --btn-addon-install-text-color: #ffffff !important;

    --btn-addon-uninstall-bg-color: #dc3545 !important;
    --btn-addon-uninstall-bg-gradient: #dc3545 !important;
    --btn-addon-uninstall-border-color: #c82333 !important;
    --btn-addon-uninstall-text-color: #ffffff !important;
    
    --btn-addon-update-bg-color: #ffc107 !important;
    --btn-addon-update-bg-gradient: #ffc107 !important;
    --btn-addon-update-border-color: #e0a800 !important;
    --btn-addon-update-text-color: #212529 !important;

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

    /* Progress bars and Toggles */
    --flipswitch-off-color: #555555 !important;
    --flipswitch-on-color: var(--primary-color) !important;
    --progress-completed-color: var(--primary-color) !important;
    --progress-incompleted-color: #333333 !important;
    --progress-stripe-color: rgba(255, 255, 255, .05) !important;

    /* Addon Buttons Variables */
    --btn-addon-install-bg-gradient: #28a745 !important;
    --btn-addon-uninstall-bg-gradient: #dc3545 !important;
    --btn-addon-install-border-color: #218838 !important;
    --btn-addon-uninstall-border-color: #c82333 !important;

    /* UI Components Backgrounds */
    --toolbar-bg: #1a1a1a !important;
    --footer-bg: #121212 !important;
    --main-menu-bg: #1a1a1a !important;
    --tab-content-bg: #121212 !important;
    --fieldset-bg: #1a1a1a !important;
    --list-header-bg: #333 !important;
    --group-header-bg: #333 !important;

    /* Gradients (Kill them) */
    --bg-gradient-1: #1a1a1a !important;
    --bg-gradient-2: #1a1a1a !important;
    --bg-gradient-3: #1a1a1a !important;

    /* Percent Badges */
    --percent-badge-bg: #222222 !important;
    --percent-badge-text-color: #ffffff !important;
    --percent-badge-completed-bg: var(--primary-color) !important;
    --percent-badge-hover-bg: #333333 !important;
    --percent-badge-hover-text-color: #ffffff !important;
}

html { color-scheme: dark !important; }

body, .ui-widget-content, .ui-widget-header, 
.applicationBar, .footer, .panel-left, .panel-right, .panel-wrapper,
.toolbarGroup, .toolbar, .toolbar-content, .menuPanelTool, .tabsBarTop,
.fileListWrapperOuter, .fileListWrapper, .fileListUl, .tree,
.bottomToolbar, .bottomToolbarIcon, .panel-right-tools,
#cellSelectionInfo, .cellInfoTabHeader, .tabButtons, .tabButton, 
.cellInfoMenu, .cellInfoCtrl, .tabSide, .footer-content,
.subToolbar, .switchableToolbar, #menuPanel, #mainArea, .appActionsLeft, .ribbonMenu,
.ui-tabs-nav, .ui-state-default, .ui-widget-header, .ui-state-active, .ui-state-hover,
.nav-tabs, .nav-tabs > li > a, .nav-tabs > li.active > a {
    background-color: #121212 !important;
    color: #e0e0e0 !important;
    border-color: #333333 !important;
}

/* Limpiar fondos blancos (gradientes) excepto en los distintivos de progreso y bloques de stats */
body:not(.translatedPercent):not(.percent), 
.ui-widget-content:not(.translatedPercent):not(.percent), 
.ui-widget-header:not(.translatedPercent):not(.percent),
div:not(.translatedPercent):not(.percent):not(.statBlock),
span:not(.translatedPercent):not(.percent):not(.statBlock) {
    background-image: none !important;
}

/* Permitir gradientes dinámicos del sistema (como el porcentaje de traducción) */
.translatedPercent, span.percent {
    color: #ffffff !important;
    border-radius: 4px !important;
    padding: 2px 6px !important;
    font-weight: bold !important;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5) !important;
    border: 1px solid #444 !important;
}

/* Solo el archivo seleccionado se ve en CYAN */
.panel-left li.selected, .panel-left li.selected * {
    color: var(--primary-color) !important;
}

/* Enlaces específicos (como en diálogos) en CYAN */
.ui-dialog a, .ui-dialog a *, .tipsNavigator a, .tipsNavigator a * {
    color: var(--primary-color) !important;
    text-decoration: none !important;
}

.ui-dialog a:hover, .tipsNavigator a:hover {
    color: #ffffff !important;
    text-decoration: underline !important;
}

/* Botones de cerrar y otros iconos de sistema - NO CYAN */
.closeIntroWindow i, .icon-cancel-circled, .icon-cancel-1 {
    color: #e0e0e0 !important;
}

/* Logo de la App - Blanco brillante */
#button-translatorplus::before {
    background: url(/www/img/icon.png) no-repeat center !important;
    background-size: 26px !important;
    filter: invert(1) brightness(1.8) !important;
}

/* Colores de estado y Log */
pre[data-type="error"], .status-error, .red { color: #ff5252 !important; }
pre[data-type="warning"], .status-warning, .yellow, .orange { color: #ffab40 !important; }
pre[data-type="success"], .status-success, .green { color: #69f0ae !important; }
pre[data-type="info"], .status-info, .blue, .cyan { color: #40c4ff !important; }

/* Explicitly preserve inline styles for tags and icons */
i[style*="color"], span[style*="color"], div[style*="color"] {
    color: inherit !important;
}

pre:not([data-type]), code:not([data-type]), kbd, samp {
    background-color: transparent !important;
    color: #e0e0e0 !important;
    border: none !important;
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

input:not([type="checkbox"].colorTagSelector), textarea, select {
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

/* Iconos de barra de herramientas: hue-rotate preserva los colores del icono */
.toolbar-content img, .cellInfoMenu img, .currentCellTextCtrl img,
div#dialogExport label img, div#dialogImport label img, .invertableImageColor img {
    filter: invert(1) hue-rotate(180deg) !important;
}

/* Iconos hover */
.toolbar-content img:hover, .cellInfoMenu img:hover, .currentCellTextCtrl img:hover {
    filter: invert(1) hue-rotate(180deg) brightness(1.2) !important;
}

.addonsIconBlock img, .user-avatar img {
    filter: none !important;
}

/* Pantalla inicio: botones grandes de Start a New Project y Open Project */
.introWindow {
    background: rgba(10, 10, 10, 0.9) !important;
    backdrop-filter: blur(5px) !important;
}

.introWindow * {
    background: transparent !important;
    color: #e0e0e0 !important;
    border-color: #444 !important;
}

.introWindow .buttonBox, .introWindow .recentProject li {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid #444 !important;
    border-radius: 4px !important;
    padding: 15px !important;
    margin-bottom: 10px !important;
    transition: all 0.2s ease !important;
}

.introWindow .buttonBox:hover, .introWindow .recentProject li:hover {
    background: rgba(0, 188, 212, 0.2) !important;
    border-color: var(--primary-color) !important;
    transform: translateX(5px) !important;
    cursor: pointer !important;
}

/* Progress Bars Fix */
progress, .progressBar, .progress {
    background-color: #252525 !important;
    border: 1px solid #444 !important;
    border-radius: 6px !important;
    overflow: hidden !important;
}

progress::-webkit-progress-bar {
    background-color: #252525 !important;
}

progress::-webkit-progress-value {
    background-color: var(--primary-color) !important;
}

.progressValue, .loadingBarProgress, .progress-bar {
    background-color: var(--primary-color) !important;
}

/* Toggles / flipSwitch Fix con ANIMACIÓN */
input[type=checkbox].flipSwitch {
    transition: all 0.3s ease !important;
}

input[type=checkbox].flipSwitch:before {
    color: var(--flipswitch-off-color) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

input[type=checkbox].flipSwitch:checked:before {
    color: var(--flipswitch-on-color) !important;
    transform: scale(1.1);
}

input[type=checkbox].flipSwitch:active:before {
    transform: scale(0.9);
}

/* Selected row in panel left */
.panel-left li.selected {
    background-color: rgba(0, 188, 212, 0.2) !important;
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

const path = require('path');
const fs = require('fs');

/**
 * Inyecta el CSS directamente como un tag <style> en el DOM
 */
thisAddon.injectCSS = function (wind) {
    // Si es una ventana de NW.js, obtener su ventana DOM
    if (wind && wind.window) wind = wind.window;
    
    if (!wind || !wind.document) return;

    // Verificar si es la ventana de opciones y está desactivada por configuración
    const isOptionsWindow = wind.document.title && wind.document.title.includes("Options");
    const disableOptions = thisAddon.getConfig("disableOptions");
    
    if (isOptionsWindow && disableOptions === true) {
        thisAddon.removeCSS(wind);
        return;
    }

    // Verificar si es la ventana de búsqueda y está desactivada por configuración
    const isFindWindow = wind.document.body && wind.document.body.getAttribute("data-window") === "find";
    const disableFind = thisAddon.getConfig("disableFind");

    if (isFindWindow && disableFind === true) {
        thisAddon.removeCSS(wind);
        return;
    }

    const styleEl = wind.document.getElementById("dark-mode-styles");
    if (styleEl) {
        // Si ya existe, actualizar el estilo en tiempo real
        styleEl.innerHTML = thisAddon.cssString;
        return;
    }

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
thisAddon.removeCSS = function (wind) {
    if (wind && wind.window) wind = wind.window;
    
    if (!wind || !wind.document) return;
    const style = wind.document.getElementById("dark-mode-styles");
    if (style) style.remove();
    if (wind.document.body) {
        wind.document.body.removeAttribute("data-theme");
        wind.document.body.removeAttribute("data-bs-theme");
    }
};

/**
 * Procesa y aplica los estilos dinámicos respetando la configuración en tiempo real
 */
thisAddon.applyStylesRealTime = function () {
    thisAddon.cssString = cssString;

    const disableOptions = thisAddon.getConfig("disableOptions");
    const disableFind = thisAddon.getConfig("disableFind");

    // Cargar secciones adicionales respetando la exclusión configurada
    try {
        const sectionsPath = path.join(thisAddon.getPathRelativeToRoot(), 'sections.js');
        if (fs.existsSync(sectionsPath)) {
            delete require.cache[require.resolve(sectionsPath)];
            const extraSections = require(sectionsPath);
            if (extraSections) {
                for (let key in extraSections) {
                    // Excluir la sección options si está configurada para desactivarse
                    if (key === 'options' && disableOptions === true) {
                        continue;
                    }
                    // Excluir la sección find si está configurada para desactivarse
                    if (key === 'find' && disableFind === true) {
                        continue;
                    }
                    thisAddon.cssString += extraSections[key] + '\n';
                }
            }
        }
    } catch (e) {
        console.warn("DARK Mode: Error cargando sections.js", e);
    }

    // Aplicar a la ventana principal de la app
    thisAddon.injectCSS(window);

    // Aplicar/remover dinámicamente en todas las ventanas secundarias registradas
    if (window.ui && window.ui.windows) {
        for (let key in window.ui.windows) {
            try {
                const targetWin = window.ui.windows[key];
                if (key === 'options' && disableOptions === true) {
                    thisAddon.removeCSS(targetWin);
                } else if ((key === 'search' || key.startsWith('search')) && disableFind === true) {
                    thisAddon.removeCSS(targetWin);
                } else {
                    thisAddon.removeCSS(targetWin);
                    thisAddon.injectCSS(targetWin);
                }
            } catch (e) { }
        }
    }
};

thisAddon.enable = function () {
    // Aplicar los estilos de forma dinámica según la configuración
    thisAddon.applyStylesRealTime();

    // Interceptar la apertura de nuevas ventanas de NW.js (como el buscador o la consola de scripts)
    if (typeof nw !== 'undefined' && nw.Window && typeof nw.Window.open === 'function') {
        if (!thisAddon._originalNwWindowOpen) {
            thisAddon._originalNwWindowOpen = nw.Window.open;
            nw.Window.open = function (url, options, callback) {
                return thisAddon._originalNwWindowOpen.call(nw.Window, url, options, function (win) {
                    if (win) {
                        const targetWin = win.window || win;
                        if (targetWin) {
                            const injectFn = () => {
                                try {
                                    thisAddon.injectCSS(targetWin);
                                } catch (e) {
                                    console.warn("DARK Mode: Error inyectando CSS en nueva ventana", e);
                                }
                            };
                            
                            // Si la ventana ya cargó, inyectar inmediatamente, si no, registrar listeners
                            if (targetWin.document && targetWin.document.readyState === 'complete') {
                                injectFn();
                            } else {
                                targetWin.addEventListener('load', injectFn);
                                targetWin.addEventListener('DOMContentLoaded', injectFn);
                            }
                        }
                    }
                    if (callback) callback(win);
                });
            };
        }
    }

    // Listener para la ventana de opciones cuando se abra (por si acaso no pasa por nw.Window.open nativo)
    if (window.ui && typeof window.ui.on === 'function') {
        window.ui.on("optionsWindowOpened", function() {
            setTimeout(() => {
                if (window.ui.windows && window.ui.windows['options']) {
                    thisAddon.injectCSS(window.ui.windows['options']);
                }
                // Fallback: buscar por título si no está en ui.windows
                if (typeof NWUtil !== 'undefined' && NWUtil.getAllNwWindows) {
                    NWUtil.getAllNwWindows().then(wins => {
                        wins.forEach(w => {
                            if (w.title && w.title.includes("Options")) {
                                thisAddon.injectCSS(w);
                            }
                        });
                    });
                }
            }, 500);
        });
    }

    if (window.scriptRunner) {
        window.scriptRunner.applyScript("*", "onReady", ADDON_NAME, function () {
            const getAddon = () => {
                const target = window.addonLoader || window.opener?.addonLoader || window.top?.addonLoader;
                return target ? target.getAddon("dark-mode") : null;
            };
            const addon = getAddon();
            if (addon && typeof addon.injectCSS === 'function') {
                addon.injectCSS(window);
            }
        });
    }

    // Inicializar el panel de configuración en tiempo real (settings.js)
    try {
        const settingsPath = path.join(thisAddon.getPathRelativeToRoot(), 'settings.js');
        if (fs.existsSync(settingsPath)) {
            delete require.cache[require.resolve(settingsPath)];
            const initSettings = require(settingsPath);
            if (typeof initSettings === 'function') {
                initSettings(thisAddon);
            }
        }
    } catch (e) {
        console.warn("DARK Mode: Error cargando settings.js", e);
    }
};

thisAddon.disable = function () {
    thisAddon.removeCSS(window);

    if (window.ui && window.ui.windows) {
        for (let key in window.ui.windows) {
            try { thisAddon.removeCSS(window.ui.windows[key]); } catch (e) { }
        }
    }

    // Restaurar nw.Window.open original
    if (thisAddon._originalNwWindowOpen && typeof nw !== 'undefined' && nw.Window) {
        nw.Window.open = thisAddon._originalNwWindowOpen;
        delete thisAddon._originalNwWindowOpen;
    }

    // Remover el botón de la luna si existe
    if (typeof $ !== 'undefined') {
        $('#btn-darkmode-config').remove();
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
        "onChange": function (evt) {
            if (this.prop("checked")) {
                thisAddon.enable();
            } else {
                thisAddon.disable();
            }
            if (typeof sys !== 'undefined' && sys.saveConfig) sys.saveConfig();
        }
    }
};

$(document).ready(function () {
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

