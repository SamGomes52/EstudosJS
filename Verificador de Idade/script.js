function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os seus dados novamente!')
    } else {
        var formGen = document.getElementsByName('radgen')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formGen[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 3) {
                // bebê
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if(idade < 12) {
                // criança
                img.setAttribute('src', 'imagens/crianca-m.jpg')
            } else if(idade < 31) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if(idade < 64) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 3) {
                // bebê
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if(idade < 12) {
                // criança
                img.setAttribute('src', 'imagens/crianca-f.jpg')
            } else if(idade < 31) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if(idade < 64) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}