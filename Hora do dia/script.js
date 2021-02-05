function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if(hora < 6){
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#0b1f3b'
    } else if(hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#ec9f65'
    } else if(hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#e37b23'
    } else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#59466f'
    }
}
