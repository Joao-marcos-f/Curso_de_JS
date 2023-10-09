function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if( fano.value.length == 0 || fano.value > ano){
        window.alert('[error] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >= 0 && idade <= 10)
            {
            //criança
            img.setAttribute('src', 'imagens/criançahomem.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemhomem.jpg')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/senhor.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade <= 10)
            {
            //criança
            img.setAttribute('src', 'imagens/criançamulher.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemmulher.jpg')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }
        res.innerHTML = `detectamos ${gênero} com ${idade} anos`
        img.style.maxWidth = '250px'
        img.style.maxHeight = '500px'
        img.style.borderRadius = '5px'
        res.appendChild(img)
    }
}