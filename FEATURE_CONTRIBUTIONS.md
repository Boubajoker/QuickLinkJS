# Features Contributions

## QuickLinkJS class (constructor):

<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="#constructor-funtion">constructor</a></td>
        <td><p>The `constructor` function has the role to create a shortcut-url.</p></td>
    </tr>
    <tr>
        <td><a href="#init-funtion">init</a></td>
        <td><p>The `init` function has the role to initialize the shortcut.</p></td>
    </tr>
    <tr>
        <td><a href="#initsearch-function">init_search</a></td>
        <td><p>The `init_search` function has the role to create a shortcut-url but with a default `?Link=` text added to the shortcut-url.</p></td>
    </tr>
</table>

### `@constructor` funtion:

The constructor function has the role to create a shortcut-url. 

@param `shortcut_name` Type a random text (e.g: `HelloWorld`)

@param `redirect_string_name` The file to redirect after the user typed the `shortcut_name` in the url bar.

**NOTE: THE MODULE ADD'S AUTOMATICLY THE `?` SIGN TO YOUR CODE, BUT THE USER HAS TO TYPE THE ENTIRE TEXT WITH THE `?` SIGN !**

### `init` funtion:

The `init` function has the role to initialize the shortcut 

@param `shortcut_name` Type a random text (e.g: `HelloWorld`)

@param `redirect_string_name` The file to redirect after the user typed the `shortcut_name` in the url bar.

**NOTE: THE MODULE ADD'S AUTOMATICLY THE `?` SIGN TO YOUR CODE, BUT THE USER HAS TO TYPE THE ENTIRE TEXT WITH THE `?` SIGN !**

### `init_search` function:

The `init_search` function has the role to create a shortcut-url but with a default `?Link=` text added to the shortcut-url.

@param shortcut_name Type a random text (e.g: `HelloWorld`)

@param redirect_file_name The file to redirect after the user typed the `shortcut_name` in the url bar.

**NOTE: THE MODULE ADD'S AUTOMATICLY THE `?Link=` TEXT TO YOUR CODE, BUT THE USER HAS TO TYPE THE ENTIRE TEXT WITH THE `?Link=` TEXT !**