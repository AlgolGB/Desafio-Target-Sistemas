const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    fetch("dados.json").then(dados => dados.json()).then(dados => {
        const faturamentoTotal = dados.reduce((acumulador, dia) => acumulador + dia.valor, 0);
        const media = faturamentoTotal/30;
        const faturamentoMin = dados.reduce((min, dia) => dia.valor < min && dia.valor > 0 ? dia.valor : min, dados[0].valor);
        const faturamentoMax = dados.reduce((max, dia) => dia.valor > max ? dia.valor : max, dados[0].valor);
        const qtdDias = dados.reduce((qtd, dia) => {return dia.valor > media ?  qtd + 1 : qtd}, 0);
        
        resp.innerText =  `Menor faturamento ocorrido no mês: R$ ${faturamentoMin.toFixed(2)}\nMaior faturamento ocorrido no mês: R$ ${faturamentoMax.toFixed(2)}\nQuantidade de dias em que o faturamento foi maior que a média diária: ${qtdDias}`;
    });
});