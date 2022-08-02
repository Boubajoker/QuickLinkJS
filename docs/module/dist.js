/*----------------------------------------------------------------
    QuickLinkJs Copyright (c) Boubajoker 2022. All right reserved.
    Project under MIT License.
---------------------------------------------------------------- */
//!PROJECT SOURCE CODE: https://github.com/Boubajoker/QuickLinkJS/

console.log('%c QuickLinkJS is currently active in this page', 'color: rgb(210, 160, 95); font-size: 15px; background-color: rgb(21, 16, 45); width: 100\%; height: 100\%; border-radius: 5px;');

class QuickLinkJS {
    base_url = `${document.location.origin}${document.location.pathname}`;

    constructor(shortcut_name = null, redirect_file_name = null) {
        if (document.URL === this.base_url + "?" + shortcut_name) { window.location = redirect_file_name };
    };

    init(shortcut_name, redirect_file_name) {
        if (document.URL === this.base_url + "?" + shortcut_name) { window.location = redirect_file_name };
    };

    init_search(shortcut_name, redirect_file_name) {
        if (document.URL === this.base_url + "?Link=" + shortcut_name) { window.location = redirect_file_name };
    };

    init_custom_search(shortcut_name, redirect_file_name, key_search_name) {
        if (document.URL === this.base_url + `?${key_search_name}=` + shortcut_name) { window.location = redirect_file_name}
    };
};