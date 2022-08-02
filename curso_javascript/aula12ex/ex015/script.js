function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Ano Inválido - Verifique os dados e tente novamente [ERRO]')
    } else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10 ) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10 ) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
