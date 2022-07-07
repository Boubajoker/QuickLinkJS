let html_code = document.querySelector('#html_code');
let js_code = document.querySelector('#js_code');
let details = document.querySelector('details');
let table = document.querySelector('table')

js_code.innerText = "let quicklinkjs = new QuickLinkJS();\n\nquicklinkjs.init('test', \"../\");"
html_code.innerText = "<script src=\"https://boubajoker.github.io/QuickLinkJS/src/dist.js\"></script>";

details.addEventListener('click', ()=>{
    table.style.display = "block";
    if (details.open) {
        table.style.display = "none";
    };
});

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