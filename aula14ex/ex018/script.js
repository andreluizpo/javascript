function calcular() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('selTab')
    
    if (num.value.length == '') {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)

        tab.innerHTML = ''
        for (var i = 0; i <= 10; i++) {
            var result = document.createElement('option')
            result.text = `${n} x ${i} = ${n * i}`
            result.value = `tab${i}`
            tab.appendChild(result)
        }
    }
}