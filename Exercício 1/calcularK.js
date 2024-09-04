const frm = document.querySelector("form");
const resp = document.getElementById("outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let soma = 0;
    for(let k = 0; k < 13; k++){
        soma += k;
    }
    resp.innerText = soma;
});