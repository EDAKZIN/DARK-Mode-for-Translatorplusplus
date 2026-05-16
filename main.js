/**
 * DARK Mode - Main Logic
 * Independent injection system for Translator++
 */

const thisAddon = this;
const ADDON_NAME = "dark-mode";
const CSS_PATH = `addons/${ADDON_NAME}/css/dark.css`;

/**
 * Inyecta el archivo CSS en la ventana especificada
 * @param {Window} wind 
 */
function injectCSS(wind = window) {
    if (!wind || !wind.document) return;
    
    // Evitar duplicados
    if (wind.document.getElementById("dark-mode-styles")) return;

    const link = wind.document.createElement("link");
    link.id = "dark-mode-styles";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = CSS_PATH;
    
    wind.document.head.appendChild(link);
    wind.document.body.setAttribute("data-theme", "dark");
    wind.document.body.setAttribute("data-bs-theme", "dark");
}

/**
 * Elimina el CSS de la ventana especificada
 * @param {Window} wind 
 */
function removeCSS(wind = window) {
    if (!wind || !wind.document) return;
    const link = wind.document.getElementById("dark-mode-styles");
    if (link) link.remove();
    wind.document.body.removeAttribute("data-theme");
    wind.document.body.removeAttribute("data-bs-theme");
}

thisAddon.enable = function() {
    console.log("[DARK Mode] Enabling...");
    injectCSS(window);

    // Aplicar a todas las ventanas abiertas registradas en ui.js
    if (window.ui && window.ui.windows) {
        for (let key in window.ui.windows) {
            injectCSS(window.ui.windows[key]);
        }
    }

    // Registrar hook para futuras ventanas mediante scriptRunner si está disponible
    if (window.scriptRunner) {
        window.scriptRunner.applyScript("*", "onReady", ADDON_NAME, function() {
            injectCSS(window);
        });
    }
};

thisAddon.disable = function() {
    console.log("[DARK Mode] Disabling...");
    removeCSS(window);

    if (window.ui && window.ui.windows) {
        for (let key in window.ui.windows) {
            removeCSS(window.ui.windows[key]);
        }
    }

    if (window.scriptRunner) {
        window.scriptRunner.applyScript("*", "onReady", ADDON_NAME, undefined);
    }
};

// Punto de entrada del Addon
$(document).ready(function() {
    // Si el usuario lo activó previamente en la sesión, se mantiene
    // Nota: La persistencia real depende de cómo Translator++ maneja el estado de los addons
    if (thisAddon.config && thisAddon.config.isActive) {
        thisAddon.enable();
    }
});
