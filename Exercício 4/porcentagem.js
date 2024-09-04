const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const receitaEstados = [{estado: "SP", faturamento: 67836.43},{estado: "RJ", faturamento: 36678.66},{estado: "MG", faturamento: 29229.88},{estado: "ES", faturamento: 27165.48},{estado: "Demais estados", faturamento: 19849.53}];

    const receitaTotal = receitaEstados.reduce((total, estado) => total + estado.faturamento, 0);
    let resposta = "";

    for(estado of receitaEstados){
        const porcentagem = (estado.faturamento * 100)/receitaTotal;
        resposta += `${estado.estado} representa ${porcentagem.toFixed(2)}% do faturamento total da empresa.\n`;
    };
    resp.innerText = resposta;
});
