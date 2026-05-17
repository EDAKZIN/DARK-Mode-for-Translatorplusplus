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

        /* User Stats y Botones - Sobreescribir variables nativas de Translator++ */
        :root {
            /* Stats de usuario */
            --user-points-text-color: #ffffff !important;
            --user-level-text-color: #ffffff !important;
            --user-points-bg-color: #7e57c2 !important;
            --user-points-border-color: #5e35b1 !important;
            --user-level-bg-color: #e53935 !important;
            --user-level-border-color: #b71c1c !important;

            /* Hover de addons: teal elegante en lugar de blanco */
            --surface-hover: rgba(0, 188, 212, 0.12) !important;
        }



        /* Cuando el li del usuario está seleccionado, el texto de los stats debe ser blanco, no cian */
        li.selected .userStats .statBlock,
        li.selected .userStats .statBlock span,
        li.selected .userStats .userLevel,
        li.selected .userStats .userPoints {
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

        /* Sección de Addons - ELIMINAR BLANCO NATIVO */
        #addons .addonListHeader, #addons .tabMenu {
            background-color: #1a1a1a !important;
            border-bottom: 1px solid #333 !important;
            padding: 10px !important;
        }

        #addons .addonListWrapper, #addons .addonList, .addonsOption.addonList {
            background-color: #1a1a1a !important;
            background-image: none !important;
            border: 1px solid #333 !important;
            color: #e0e0e0 !important;
            padding: 15px !important;
            margin-bottom: 10px !important;
            border-radius: 8px !important;
        }

        #addons .addonList:nth-child(even) { background-color: #161616 !important; }
        /* Hover tipo Start New Project: teal suave con borde cian */
        #addons .addonList:hover {
            background-color: rgba(0, 188, 212, 0.12) !important;
            border-color: var(--primary-color) !important;
            border-left: 4px solid var(--primary-color) !important;
        }

        #addons .addonList .addonName, #addons .addonList .name {
            color: var(--primary-color) !important;
            font-weight: bold !important;
        }

        #addons .addonList .addonVersion, #addons .addonList .ver {
            color: #888 !important;
            font-size: 0.85em !important;
            margin-left: 8px !important;
        }

        /* Descripciones legibles en gris claro/blanco suave */
        #addons .addonList .descBlock {
            color: #d1d5db !important; /* Gris claro suave, legible y elegante */
            font-size: 0.95em !important;
            margin-top: 5px !important;
            margin-bottom: 5px !important;
        }

        #addons .addonList .authorBlock,
        #addons .addonList .addonReq,
        #addons .addonList .minVer {
            color: #9ca3af !important; /* Gris intermedio muy claro y elegante */
            font-size: 0.85em !important;
        }

        /* Pestañas superiores de Addons con tamaño y márgenes nativos y correctos */
        .horizTabMenu {
            background-color: #1a1a1a !important;
            border-bottom: 1px solid #333 !important;
            height: 32px !important;
            display: flex !important;
            align-items: flex-end !important;
        }

        .horizTabMenu > * {
            background-color: #2a2a2a !important;
            border-top: 1px solid #333 !important;
            border-left: 1px solid #333 !important;
            border-right: 1px solid #333 !important;
            border-radius: 4px 4px 0px 0px !important;
            color: #888 !important;
            padding: 4px 12px !important;
            height: 20px !important;
            display: flex !important;
            align-items: center !important;
            cursor: pointer !important;
            margin-right: .2em !important;
            margin-left: .2em !important;
            font-size: 10pt !important;
        }

        .horizTabMenu > *:first-child {
            margin-left: .8em !important;
        }

        .horizTabMenu > *:hover {
            background-color: #333 !important;
            color: #fff !important;
        }

        .horizTabMenu > .selected {
            background-color: #1a1a1a !important;
            border-top: 2px solid var(--primary-color) !important;
            border-left: 1px solid #333 !important;
            border-right: 1px solid #333 !important;
            color: #fff !important;
            margin-bottom: -1px !important;
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

    // Estilos premium oscuros y translúcidos para el Buscador (find.html)
    find: `
        /* --- ESTILOS DEL BUSCADOR (find.html) --- */
        
        /* Cuerpo oscuro y translúcido - Seguro y aislado para la ventana del buscador */
        body[data-window="find"] {
            background-color: rgba(18, 18, 18, 0.7) !important;
            color: #e0e0e0 !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }

        /* Borde de la ventana */
        body[data-window="find"] #appBorder {
            border: 1px solid #333 !important;
        }

        /* Barra de aplicación superior */
        body[data-window="find"] .application-bar {
            background-color: transparent !important;
        }

        body[data-window="find"] .application-buttonbar span {
            color: #aaa !important;
        }

        body[data-window="find"] .application-buttonbar span:hover {
            color: #fff !important;
        }

        body[data-window="find"] .application-buttonbar .icon-cancel:hover {
            background-color: #e53935 !important;
            color: #fff !important;
        }

        /* Pestañas (Find, Replace, Put) */
        body[data-window="find"] #tabs {
            background: transparent !important;
            border: none !important;
        }

        body[data-window="find"] #tabs .ui-tabs-nav {
            background-color: rgba(30, 30, 30, 0.5) !important;
            border-bottom: 1px solid #333 !important;
            padding: 4px 4px 0 4px !important;
        }

        body[data-window="find"] #tabs .ui-tabs-nav li {
            background-color: rgba(45, 45, 45, 0.4) !important;
            border: 1px solid #333 !important;
            border-bottom: none !important;
            border-radius: 4px 4px 0 0 !important;
            margin-right: 4px !important;
            transition: background 0.2s !important;
        }

        body[data-window="find"] #tabs .ui-tabs-nav li:hover {
            background-color: rgba(60, 60, 60, 0.6) !important;
        }

        body[data-window="find"] #tabs .ui-tabs-nav li.ui-tabs-active {
            background-color: rgba(18, 18, 18, 0.75) !important;
            border-top: 2px solid var(--primary-color) !important;
            border-left: 1px solid #333 !important;
            border-right: 1px solid #333 !important;
        }

        body[data-window="find"] #tabs .ui-tabs-nav li a {
            color: #aaa !important;
            transition: color 0.2s !important;
        }

        body[data-window="find"] #tabs .ui-tabs-nav li.ui-tabs-active a {
            color: #fff !important;
            font-weight: bold !important;
        }

        /* Inputs y Textareas */
        body[data-window="find"] input[type="search"],
        body[data-window="find"] textarea,
        body[data-window="find"] input[type="text"] {
            background-color: rgba(30, 30, 30, 0.5) !important;
            border: 1px solid #444 !important;
            color: #fff !important;
            border-radius: 4px !important;
            padding: 4px 8px !important;
            transition: border-color 0.2s, background-color 0.2s !important;
        }

        body[data-window="find"] input[type="search"]:focus,
        body[data-window="find"] textarea:focus,
        body[data-window="find"] input[type="text"]:focus {
            border-color: var(--primary-color) !important;
            background-color: rgba(30, 30, 30, 0.75) !important;
            outline: none !important;
        }

        /* Selectores Dropdown - Estilizado compacto para evitar solapamientos y respetar la rejilla (.column4) */
        body[data-window="find"] select {
            background-color: rgba(30, 30, 30, 0.5) !important;
            border: 1px solid #444 !important;
            color: #fff !important;
            border-radius: 4px !important;
            padding: 0 4px !important;
            height: 20px !important;
            font-size: 11px !important;
            vertical-align: middle !important;
            max-width: 100% !important;
        }

        body[data-window="find"] select:focus {
            border-color: var(--primary-color) !important;
            outline: none !important;
        }

        /* Botón de Target y Menú desplegable */
        body[data-window="find"] #find .findOptionButton {
            background-color: rgba(45, 45, 45, 0.5) !important;
            border: 1px solid #444 !important;
            color: #ccc !important;
            border-left: none !important;
            height: 24px !important;
            cursor: pointer !important;
            border-radius: 0 4px 4px 0 !important;
        }

        body[data-window="find"] #find .findOptionButton:hover {
            background-color: var(--primary-color) !important;
            color: #fff !important;
        }

        body[data-window="find"] #find .findMenu {
            background-color: rgba(30, 30, 30, 0.75) !important;
            border: 1px solid #444 !important;
            border-top: none !important;
            color: #ccc !important;
            border-radius: 0 0 6px 6px !important;
        }

        /* Selectores de archivos y opciones de check */
        body[data-window="find"] .findOptions label,
        body[data-window="find"] .findMenu label,
        body[data-window="find"] .columnList label {
            color: #ccc !important;
            cursor: pointer !important;
        }

        body[data-window="find"] .findOptions label:hover,
        body[data-window="find"] .findMenu label:hover {
            color: #fff !important;
        }

        body[data-window="find"] .toggleFileSelector {
            color: #aaa !important;
        }

        body[data-window="find"] .toggleFileSelector:hover {
            color: var(--primary-color) !important;
        }

        /* Caja de selector de archivos */
        body[data-window="find"] .fileSelector {
            background-color: rgba(22, 22, 22, 0.6) !important;
            border: 1px solid #333 !important;
            border-radius: 6px !important;
            padding: 8px !important;
        }

        body[data-window="find"] .fileSelector label {
            color: #bbb !important;
            padding: 3px 6px !important;
            border-radius: 3px !important;
            transition: background 0.2s !important;
        }

        body[data-window="find"] .fileSelector label:hover {
            background-color: rgba(0, 188, 212, 0.15) !important;
            color: #fff !important;
        }

        /* Resultados de Búsqueda y Reemplazo */
        body[data-window="find"] .searchResult,
        body[data-window="find"] .replaceResult,
        body[data-window="find"] .putResult {
            background-color: rgba(22, 22, 22, 0.6) !important;
            border: 1px solid #333 !important;
            border-radius: 6px !important;
        }

        /* Barra superior de resultados */
        body[data-window="find"] .searchResultHeader {
            background-color: rgba(30, 30, 30, 0.75) !important;
            color: #fff !important;
            border-bottom: 2px solid var(--primary-color) !important;
        }

        /* Cabecera del contexto de archivo (.resultContext h2) */
        body[data-window="find"] .searchResult .resultContext h2,
        body[data-window="find"] .replaceResult .resultContext h2 {
            background-color: rgba(45, 45, 45, 0.75) !important;
            color: var(--primary-color) !important;
            border-bottom: 1px solid #333 !important;
            font-weight: bold !important;
            padding: 6px 8px !important;
        }

        body[data-window="find"] .searchResult .resultContext h2 .contextCount,
        body[data-window="find"] .replaceResult .resultContext h2 .contextCount {
            background-color: var(--primary-color) !important;
            color: #121212 !important;
            border: none !important;
            font-weight: bold !important;
        }

        /* Items individuales de la lista de resultados */
        body[data-window="find"] .searchResult .resultContext .resultItem,
        body[data-window="find"] .replaceResult .resultContext .resultItem {
            border-bottom: 1px solid #252525 !important;
            transition: background 0.2s, color 0.2s !important;
        }

        body[data-window="find"] .searchResult .resultContext .resultItem:nth-child(odd),
        body[data-window="find"] .replaceResult .resultContext .resultItem:nth-child(odd) {
            background-color: rgba(18, 18, 18, 0.35) !important;
            color: #ccc !important;
        }

        body[data-window="find"] .searchResult .resultContext .resultItem:nth-child(even),
        body[data-window="find"] .replaceResult .resultContext .resultItem:nth-child(even) {
            background-color: rgba(25, 25, 25, 0.35) !important;
            color: #ccc !important;
        }

        /* Hovers y selección */
        body[data-window="find"] .searchResult .resultContext .resultItem:hover,
        body[data-window="find"] .replaceResult .resultContext .resultItem:hover {
            background-color: rgba(0, 188, 212, 0.2) !important;
            color: #fff !important;
        }

        body[data-window="find"] .searchResult .resultContext .resultItem.selected,
        body[data-window="find"] .replaceResult .resultContext .resultItem.selected {
            background-color: rgba(0, 188, 212, 0.15) !important;
            border-left: 3px solid var(--primary-color) !important;
        }

        /* Resaltados de palabras clave (.highlight / .highlight2) */
        body[data-window="find"] .searchResult .resultContext .resultItem .highlight,
        body[data-window="find"] .replaceResult .resultContext .resultItem .highlight {
            background-color: rgba(0, 188, 212, 0.4) !important;
            color: #fff !important;
            border-radius: 2px !important;
            padding: 0 2px !important;
            font-weight: bold !important;
        }

        body[data-window="find"] .replaceResult .resultContext .resultItem .highlight2 {
            background-color: rgba(229, 57, 53, 0.4) !important;
            color: #fff !important;
            border-radius: 2px !important;
            padding: 0 2px !important;
        }

        /* Textos de referencia */
        body[data-window="find"] .searchResult .resultItem .texts h1.refference {
            border-left: 1px solid #444 !important;
            color: #888 !important;
        }

        /* Etiquetas de Fila y Columna */
        body[data-window="find"] .searchResult .resultContext .resultItem .rowLabel,
        body[data-window="find"] .searchResult .resultContext .resultItem .colLabel,
        body[data-window="find"] .replaceResult .resultContext .resultItem .rowLabel,
        body[data-window="find"] .replaceResult .resultContext .resultItem .colLabel {
            color: #888 !important;
        }

        /* Caja de selector de columnas modal */
        body[data-window="find"] .tabContent.targetColumnSelectorOpened .columnSelectorWrapper {
            background-color: rgba(0, 0, 0, 0.7) !important;
        }

        body[data-window="find"] .tabContent.targetColumnSelectorOpened .columnSelector {
            background-color: rgba(30, 30, 30, 0.75) !important;
            border: 1px solid #444 !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;
            color: #fff !important;
        }

        body[data-window="find"] .tabContent.targetColumnSelectorOpened .columnSelector hr {
            border-top: 1px solid #444 !important;
        }

         body[data-window="find"] .tabContent.targetColumnSelectorOpened .columnSelector .columnList label:hover {
            background-color: rgba(0, 188, 212, 0.15) !important;
        }
    `,

    translators: `
        /* --- ESTILOS DE LIVE TRANSLATION PANE (translator.html) --- */
        body[data-window="translators"] {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
        }

        body[data-window="translators"] .toolbar {
            background-color: #1a1a1a !important;
            border-bottom: 1px solid #333 !important;
        }

        body[data-window="translators"] .toolbar-content {
            background-color: transparent !important;
        }

        body[data-window="translators"] .menu-button {
            background-color: #2d2d2d !important;
            border: 1px solid #444 !important;
            color: #e0e0e0 !important;
        }

        body[data-window="translators"] .menu-button:hover {
            background-color: #3a3a3a !important;
            border-color: var(--primary-color) !important;
            color: var(--primary-color) !important;
        }

        body[data-window="translators"] .menu-button img {
            filter: invert(1) brightness(1.8) !important;
        }

        body[data-window="translators"] .mainPane {
            background-color: #121212 !important;
        }

        /* Tarjetas / Portlets de traductores */
        body[data-window="translators"] .portlet {
            background-color: #1a1a1a !important;
            border-color: #333 !important;
        }

        body[data-window="translators"] .portlet-header {
            background-color: #222222 !important;
            color: #ffffff !important;
        }
        
        body[data-window="translators"] .portlet:hover .portlet-header {
            background-color: #2a2a2a !important;
        }

        body[data-window="translators"] .portlet-title {
            color: #ffffff !important;
        }

        body[data-window="translators"] .portlet-shortcut {
            background-color: #111111 !important;
            color: var(--primary-color) !important;
            border: 1px solid #333 !important;
        }

        body[data-window="translators"] .portlet-content {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
            border-top: none !important;
        }

        body[data-window="translators"] .portlet-status {
            color: #888888 !important;
            background-color: #161616 !important;
            border-top: 1px solid #282828 !important;
        }

        body[data-window="translators"] .portlet-status img.inlineIcon {
            filter: invert(1) brightness(1.8) !important;
        }
    `,
    
    // Aquí podemos agregar más apartados en el futuro
    tools: `
        /* Estilos para herramientas adicionales */
    `
};

module.exports = secciones;
