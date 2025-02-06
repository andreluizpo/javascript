function contar() {
    var num_inic = Number(document.getElementById('num_inic').value)
    var num_fim = Number(document.getElementById('num_fim').value)
    var num_pass = Number(document.getElementById('num_pass').value)
    var res = document.getElementById('res')
    var cont = num_inic

    if (num_inic == '') {
        res.innerText = 'Impossível contar!'
    } else if (num_pass == '0') {
        window.alert('Passo inválido! Será considera PASSO como 1.')
        num_pass = 1
        res.innerHTML = `Contando: <br>`
        while (cont < num_fim) {
            res.innerHTML += `${cont} &#x1F449`
            cont += num_pass
        }
        res.innerHTML += `${cont} &#x1F3C1`
    } else {
        res.innerHTML = `Contando: <br>`
        while (cont < num_fim) {
            res.innerHTML += `${cont} &#x1F449`
            cont += num_pass
        }
        res.innerHTML += `${cont} &#x1F3C1`
    }
}