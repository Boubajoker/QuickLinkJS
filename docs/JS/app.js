let html_code = document.querySelector('#html_code');
let js_code = document.querySelector('#js_code');

js_code.innerText = "let quicklinkjs = new QuickLinkJS();\n\nquicklinkjs.init('test', \"../\");"
html_code.innerText = "<script src=\"https://boubajoker.github.io/QuickLinkJS/src/dist.js\"></script>";

document.addEventListener('keydown', (e)=>{
    e.preventDefault();

    if  (
        e.key.toLocaleLowerCase() === "d"
        && e.altKey
        && e.ctrlKey
    ) {
        window.location = "./src/";
    }
});