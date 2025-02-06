function contar() {
    var num_inic = document.getElementById('num_inic')
    var num_fim = document.getElementById('num_fim')
    var num_pass = document.getElementById('num_pass')
    var res = document.getElementById('res')

    if (num_inic.value.length == 0 || num_fim.value.length == 0 || num_pass.value.length == 0) {
        res.innerHTML = 'Inpossível contar!'
        //window.alert('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(num_inic.value)
        var f = Number(num_fim.value)
        var p = Number(num_pass.value)

        if (p <= 0) {
            window.alert('Passo inválido! Será considerado PASSO como 1')
            p = 1
        }

        if (i < f){
            // Contagem crescente
            for(var cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(var cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}