/**
 * DARK Mode - Real-Time Settings Panel
 * Injects a dynamic Fontello moon icon into the toolbar and provides a native config dialog.
 * All user-facing UI texts are in English for global compatibility.
 */

const fs = require('fs');
const path = require('path');

module.exports = function (thisAddon) {
    // Solo inyectar la interfaz de configuración en la ventana principal de la aplicación
    if (typeof window === 'undefined' || !window.location.pathname.endsWith('trans.html')) {
        return;
    }

    /**
     * Inyecta el botón de la luna en la barra de herramientas principal
     */
    function injectToolbarButton() {
        // Si ya está inyectado, no duplicar
        if ($('#btn-darkmode-config').length > 0) return;

        const targetToolbar = $('.toolbar-content[data-id="toolbar5"]');
        if (targetToolbar.length === 0) {
            // Reintentar en un momento si el DOM no está completamente cargado
            setTimeout(injectToolbarButton, 500);
            return;
        }

        // Crear botón usando la clase icon-moon nativa y responsiva de Fontello
        const $button = $(`
            <button id="btn-darkmode-config" class="menu-button button-darkmode" title="Dark Mode Settings" style="padding: 4px 8px;">
                <i class="icon-moon" style="font-size: 1.1em;"></i>
            </button>
        `);

        // Insertar antes del botón de ayuda para mantener armonía visual (restaurado a preferencia del usuario)
        const helpButton = targetToolbar.find('.button-help');
        if (helpButton.length > 0) {
            $button.insertBefore(helpButton);
        } else {
            targetToolbar.append($button);
        }

        // Evento de clic para abrir la modal de configuración
        $button.on('click', function (e) {
            e.preventDefault();
            openSettingsDialog();
        });
    }

    /**
     * Abre el diálogo de configuración nativo de JQuery UI
     */
    function openSettingsDialog() {
        let $dialog = $('#dark-mode-settings-dialog');
        if ($dialog.length === 0) {
            $dialog = $('<div id="dark-mode-settings-dialog" style="padding: 15px; font-family: sans-serif; font-size: 13px;"></div>');
            $('body').append($dialog);
        }

        // Obtener el estado actual de la configuración del addon
        const disableOptions = thisAddon.getConfig("disableOptions") || false;
        const disableFind = thisAddon.getConfig("disableFind") || false;

        $dialog.html(`
            <p style="margin-bottom: 15px; font-weight: bold; color: var(--text-color, #e0e0e0);">
                Customize which sections of Translator++ have the Dark Mode addon applied:
            </p>
            <div style="margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 15px; display: flex; flex-direction: column; gap: 15px;">
                <label style="display: flex; align-items: flex-start; cursor: pointer; font-weight: normal; color: var(--text-color, #e0e0e0); margin: 0;">
                    <input type="checkbox" id="chk-dark-mode-opt" ${disableOptions ? '' : 'checked'} style="margin-right: 10px; margin-top: 3px;" />
                    <div>
                        <strong>Apply Dark Mode to "Options" window</strong>
                        <span style="font-size: 0.85em; color: #888; display: block; margin-top: 4px; line-height: 1.3;">
                            Includes user profile, Patreon levels, stats badges, and the Add-ons manager.
                        </span>
                    </div>
                </label>
                <label style="display: flex; align-items: flex-start; cursor: pointer; font-weight: normal; color: var(--text-color, #e0e0e0); margin: 0;">
                    <input type="checkbox" id="chk-dark-mode-find" ${disableFind ? '' : 'checked'} style="margin-right: 10px; margin-top: 3px;" />
                    <div>
                        <strong>Apply Dark Mode to "Search" window</strong>
                        <span style="font-size: 0.85em; color: #888; display: block; margin-top: 4px; line-height: 1.3;">
                            Applies a highly translucent dark design to the find, replace, and put tabs, letting you read underlying grids with maximum comfort.
                        </span>
                    </div>
                </label>
            </div>
            <p style="font-size: 0.85em; color: #888; margin: 0; line-height: 1.3;">
                * Preferences are saved automatically to your global Translator++ configurations.
            </p>
        `);

        // Mostrar diálogo modal nativo
        $dialog.dialog({
            title: "DARK Mode Customizer",
            modal: true,
            width: 500,
            height: 'auto',
            resizable: false,
            buttons: [
                {
                    text: "Cancel",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "Save & Apply",
                    click: function () {
                        const applyOptions = $('#chk-dark-mode-opt').prop('checked');
                        const applyFind = $('#chk-dark-mode-find').prop('checked');

                        // Guardar la configuración nativamente
                        thisAddon.setConfig("disableOptions", !applyOptions);
                        thisAddon.setConfig("disableFind", !applyFind);

                        // Aplicar los cambios inmediatamente en caliente
                        if (typeof thisAddon.applyStylesRealTime === 'function') {
                            thisAddon.applyStylesRealTime();
                        }

                        $(this).dialog("close");
                    }
                }
            ]
        });
    }

    // Inicializar inyección del botón al cargar el script
    $(document).ready(function () {
        injectToolbarButton();
    });
};
