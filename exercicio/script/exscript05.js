let num =document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)
        }else{
            window.alert('Valor invalido ou ja encontrado na lista')
        }
        num.value = ''
        num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let lot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        soma += valores=[pos]
        for(let pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${lot} numero cadastrados</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> a soma dos valores da: ${soma}</p>`
    }
}
