/**
 * DARK Mode - Secciones Adicionales
 * Agrega aquí nuevos apartados de estilo sin tocar main.js
 */

const secciones = {
    // Ventana de Opciones de Translator++
    options: `
        /* Estructura Principal */
        .mainPane {
            background-color: #121212 !important;
        }

        .panel-left, .panel-left-middle, .panel-left-bottom, .tabMenu {
            background-color: #1a1a1a !important;
            border-right: 1px solid #333 !important;
        }

        .panel-right, .panelContent {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
        }

        /* Sidebar: Menú de pestañas */
        .panel-left li.selectable {
            border-bottom: 1px solid #252525 !important;
            transition: background 0.2s !important;
        }

        .panel-left li.selectable:hover {
            background-color: #2a2a2a !important;
        }

        .panel-left li.selected {
            background-color: #333 !important;
            border-left: 3px solid var(--primary-color) !important;
        }

        .panel-left li a, .panel-left li span.menuTitle {
            color: #aaaaaa !important;
        }

        .panel-left li.selected a, .panel-left li.selected span.menuTitle,
        .panel-left li.selectable:hover a {
            color: #ffffff !important;
        }

        /* Bloques de Información (Info, Warning, Attention) */
        .blockBox {
            background-color: #1e1e1e !important;
            border: 1px solid #333 !important;
            color: #ccc !important;
            border-radius: 4px !important;
        }

        .infoBlock { border-left: 4px solid #2196f3 !important; }
        .warningBlock { border-left: 4px solid #ff9800 !important; }
        .attentionBlock { border-left: 4px solid #f44336 !important; }

        /* Tablas (Asociación de archivos, etc) */
        .extensionTable {
            width: 100% !important;
            border-collapse: collapse !important;
            background-color: #1a1a1a !important;
        }

        .extensionTable th {
            background-color: #2d2d2d !important;
            color: #fff !important;
            padding: 8px !important;
            border: 1px solid #333 !important;
        }

        .extensionTable td {
            padding: 8px !important;
            border: 1px solid #333 !important;
            color: #ccc !important;
        }

        .extensionTable tr:nth-child(even) {
            background-color: #161616 !important;
        }

        /* Sección de Addons */
        .addonListHeader {
            background-color: #1a1a1a !important;
            border-bottom: 1px solid #333 !important;
            padding: 10px !important;
        }

        .addonList {
            background-color: #1a1a1a !important;
            border-bottom: 1px solid #222 !important;
            color: #e0e0e0 !important;
            padding: 12px !important;
        }

        .addonList:nth-child(even) { background-color: #161616 !important; }
        .addonList:hover { background-color: #252525 !important; }

        .addonList .addonName { color: var(--primary-color) !important; font-weight: bold !important; }
        .addonList .addonVersion { color: #888 !important; }

        /* Pestañas de Addons */
        .horizTabMenu {
            background-color: #1a1a1a !important;
            border-bottom: 2px solid #333 !important;
        }

        .horizTabMenu span {
            padding: 8px 15px !important;
            color: #888 !important;
            cursor: pointer !important;
        }

        .horizTabMenu span:hover { color: #fff !important; }

        .horizTabMenu span .selected, .horizTabMenu span i.selected {
            color: var(--primary-color) !important;
        }

        /* Página de "About" */
        .aboutTittle {
            color: #fff !important;
            font-size: 2.5em !important;
            text-shadow: 0 0 10px rgba(0,188,212,0.3) !important;
        }

        .versionWrapper { color: #888 !important; }
        .copyright { color: #666 !important; }

        /* Inputs y Formularios */
        .form-group label { color: #aaa !important; }
        
        .fieldLine {
            padding: 10px 0 !important;
            border-bottom: 1px solid #222 !important;
        }

        select, input[type="text"], input[type="search"], textarea {
            background-color: #1a1a1a !important;
            color: #fff !important;
            border: 1px solid #444 !important;
            padding: 5px !important;
        }

        /* Secciones Peligrosas */
        h2[style*="color:rgb(147, 0, 0)"] {
            color: #ff5252 !important;
        }
    `,
    
    // Aquí podemos agregar más apartados en el futuro
    tools: `
        /* Estilos para herramientas adicionales */
    `
};

module.exports = secciones;
