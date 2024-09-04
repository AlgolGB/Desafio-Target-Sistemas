const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = frm.inTexto.value.trim();
    let textoInverso = "";
    for(let i = texto.length; i > -1; i--){
        textoInverso += texto.substr(i, 1);
    }
    resp.innerText = `Texto invertido:\n${textoInverso}`;
});