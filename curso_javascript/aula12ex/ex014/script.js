function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}:${minuto} horas.`
    //var hora = 10
    //mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        imagem.src= 'fotomanha.png'
        document.body.style.background = '#a17f5391'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        imagem.src= 'fototarde.png'
        document.body.style.background = '#2f69a5'
    } else {
        // Boa noite
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}