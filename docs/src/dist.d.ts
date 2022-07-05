/** 
   ----------------------------------------------------------------
    QuickLinkJs Copyright (c) Boubajoker 2022. All right reserved.
    Project under MIT License.
   ----------------------------------------------------------------
**/
//!PROJECT SOURCE CODE: https://github.com/Boubajoker/QuickLinkJS/
/// <reference lib="QuickLinkJS"/>

class QuickLinkJS {
    /**
     * ## `@constructor` funtion:
     * 
     * The constructor function has the role to create a shortcut-url. 
     * 
     * @param shortcut_name Type a random text (e.g: `HelloWorld`)
     * 
     * @param redirect_string_name The file to redirect after the user typed the `shortcut_name` in the url bar.
     * 
     * **NOTE: THE MODULE ADD'S AUTOMATICLY THE `?` SIGN TO YOUR CODE, BUT THE USER HAS TO TYPE THE ENTIRE TEXT WITH THE `?` SIGN !**
     */
    constructor (shortcut_name: string=null, redirect_string_name: string=null): () => QuickLinkJS;
    /**
     * ## `init` funtion:
     * 
     * The `init` function has the role to initialize the shortcut 
     * 
     * @param shortcut_name Type a random text (e.g: `HelloWorld`)
     * 
     * @param redirect_string_name The file to redirect after the user typed the `shortcut_name` in the url bar.
     * 
     * **NOTE: THE MODULE ADD'S AUTOMATICLY THE `?` SIGN TO YOUR CODE, BUT THE USER HAS TO TYPE THE ENTIRE TEXT WITH THE `?` SIGN !**
     */
    init(shortcut_name: string, redirect_string_name: string): () => QuickLinkJS;
    /**
     * ## `init_search` function:
     * 
     * The `init_search` function has the role to create a shortcut-url but with a default `?Link=` text added to the shortcut-url.
     *  
     * @param shortcut_name Type a random text (e.g: `HelloWorld`)
     * @param redirect_file_name The file to redirect after the user typed the `shortcut_name` in the url bar.
     * 
     * **NOTE: THE MODULE ADD'S AUTOMATICLY THE `?Link=` TEXT TO YOUR CODE, BUT THE USER HAS TO TYPE THE ENTIRE TEXT WITH THE `?Link=` TEXT !**
     */
    init_search(shortcut_name: string, redirect_file_name: string): () => QuickLinkJS;
};