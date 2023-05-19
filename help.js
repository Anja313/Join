async function init() {


    await includeHTML();
    menuInit();


}





function buttonAboutus() {
    document.getElementById('containAboutus').classList.remove('d-none');
    document.getElementById('containKanban').classList.add('d-none');
    document.getElementById('containImprint').classList.add('d-none');
}



function buttonKanban() {
    document.getElementById('containAboutus').classList.add('d-none');
    document.getElementById('containKanban').classList.remove('d-none');
    document.getElementById('containImprint').classList.add('d-none');
}


function buttonImprint() {
    document.getElementById('containImprint').classList.remove('d-none');
    document.getElementById('containKanban').classList.add('d-none');
    document.getElementById('containAboutus').classList.add('d-none');
}










async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        let file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}