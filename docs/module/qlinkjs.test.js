/*----------------------------------------------------------------
    QuickLinkJs Copyright (c) Boubajoker 2022. All right reserved.
    Project under MIT License.

    * This is a QuickLinkJS test file, to test the module.
---------------------------------------------------------------- */

const quicklinkjs = new QuickLinkJS();
const test_box = document.querySelector('#test_box');

function test() {
    console.log('hi !')
};

quicklinkjs.init('test', "../");
quicklinkjs.init('hello_qlinkjs', '../');

quicklinkjs.init_search('test', '../#table_of_content');
quicklinkjs.init_search('hello_qlinkjs', '../#table_of_content');
quicklinkjs.init_custom_search('test', '../#table_of_content', 'key');

quicklinkjs.init_custom_key('action', 'show-more', test);