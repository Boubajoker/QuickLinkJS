/*----------------------------------------------------------------
    QuickLinkJs Copyright (c) Boubajoker 2022. All right reserved.
    Project under MIT License.
---------------------------------------------------------------- */
//!PROJECT SOURCE CODE: https://github.com/Boubajoker/QuickLinkJS/

class QuickLinkJS {
    base_url = `${document.location.origin}${document.location.pathname}`;

    constructor (shortcut_name=null, redirect_file_name=null) {
        if (document.URL === this.base_url + "?" + shortcut_name) {window.location = redirect_file_name};
    };

    init(shortcut_name, redirect_file_name) {
        if (document.URL === this.base_url + "?" + shortcut_name) {window.location = redirect_file_name};
    };

    init_search(shortcut_name, redirect_file_name) {
        if (document.URL === this.base_url + "?Link=" + shortcut_name) {window.location = redirect_file_name};
    };
    except_host(host) {
        if (document.location.host == host) {throw new Error(`[ERROR]: host-type ${host} is not allowed to be redirected`)}
    };
};