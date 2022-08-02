function verificar() {
    let caixa1 = Number(document.getElementById('boxnum1').value)
    let caixa2 = Number(document.getElementById('boxnum2').value)
    let caixa3 = Number(document.getElementById('boxnum3').value)
    let InformaResp = document.getElementById("Respostas");
    let Respostas=[]
    
    Respostas.push(caixa1)
    Respostas.push(caixa2)
    Respostas.push(caixa3)

    if(caixa1 == '' || caixa2 == '' || caixa3 == '') {
        InformaResp.innerHTML = "Preencha todos os campos..."
    } else {
        InformaResp.innerHTML = `Ordem Crescente: ${Respostas.sort((caixa1, caixa2) => caixa1 - caixa2)}`
    }
}
