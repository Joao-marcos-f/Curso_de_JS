
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `agora são ${hora}:${min}`

    if(hora >= 0 && hora <= 12){
        //bom dia
        img.src = 'imagens/pexels-matthias-groeneveld-5933631.jpg'
        document.body.style.background = '#FDF0DF '
    }else if(hora > 12 && hora <= 18){
        //boa tarde
        img.src = 'imagens/pexels-nihat-69224.jpg'
    }
    else{
        //boa noite
        img.src = 'imagens/pexels-eberhard-grossgasteiger-2098427.jpg'
        document.body.style.background = '#11131B'
    }
}