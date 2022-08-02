const html_code = document.querySelector('#html_code');
const js_code = document.querySelector('#js_code');
const copy_html_code = document.querySelector('#copy_html_code');
const copy_js_code = document.querySelector('#copy_js_code');
const details = document.querySelector('details');
const table = document.querySelector('table');
const footer = document.querySelector('footer');

js_code.innerText = "const quicklinkjs = new QuickLinkJS();\n\nquicklinkjs.init('test', \"../\");";
html_code.innerText = "<script src=\"https://boubajoker.github.io/QuickLinkJS/src/dist.js\"></script>";

copy_html_code.addEventListener('click', ()=>{
    navigator.clipboard.writeText('<script src=\"https://boubajoker.github.io/QuickLinkJS/src/dist.js\"></script>');
});

copy_js_code.addEventListener('click', ()=>{
    navigator.clipboard.writeText('const quicklinkjs = new QuickLinkJS();\n\nquicklinkjs.init(\'test\', \"../\");');
});

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(`[INFO]: typed \`${e.key}\``);

    if (
        e.key.toLocaleLowerCase() === "d"
        && e.altKey
        && e.ctrlKey
    ) {
        window.location = "./module/";
    };

    if (
        e.key.toLocaleLowerCase() === "d"
        && e.altKey
        && e.metaKey
    ) {
        document.body.style.animation = "dynamic 5s ease-in-out infinite";
    };
});