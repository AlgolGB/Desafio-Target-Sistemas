const frm = document.querySelector("form");
const resp = document.getElementById("outResposta");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    const sequencia=[0, 1];
    let aux = 0;
    for (let i = 0; i <= numero; i++) {
        aux = sequencia[i] + sequencia[i + 1];
        sequencia.push(aux);
        if(aux >= numero){
            break
        };
    };
    if(sequencia.includes(numero)){
        resp.innerText = `O número ${numero} faz parte da sequência de fibonacci.`;
    }else{
        resp.innerText = `O número ${numero} não faz parte da sequência de fibonacci.`;
    };
    console.log(sequencia.join(";"));
});