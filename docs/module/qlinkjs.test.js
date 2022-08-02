/*----------------------------------------------------------------
    QuickLinkJs Copyright (c) Boubajoker 2022. All right reserved.
    Project under MIT License.

    * This is a QuickLinkJS test file, to test the module.
---------------------------------------------------------------- */

const quicklinkjs = new QuickLinkJS();

quicklinkjs.init('test', "../");
quicklinkjs.init('hello_qlinkjs', '../');

quicklinkjs.init_search('test', '../#table_of_content');
quicklinkjs.init_search('hello_qlinkjs', '../#table_of_content');
quicklinkjs.init_custom_search('test', '../#table_of_content', 'key');