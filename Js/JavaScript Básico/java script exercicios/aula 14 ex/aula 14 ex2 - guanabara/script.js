function calcular(){
    var numero = document.getElementById('numero')
    var multiplicador = '1'
    var  msg = document.getElementById('res')
    var div = document.getElementById('div')
    var selct = document.getElementById('select')
    if(numero.value.length == 0){
        window.alert('Por favor, verifique os dados e tente novamente ')
    }else{
        msg.innerHTML = 'calculando... <br>'
        div.innerHTML = ""
        var n = Number(numero.value)
        var m = multiplicador
        selct.innerHTML = ''
        for(var c = m; m <= 10 ; m++){
            var res = m*n
            let item = document.createElement('option')
            item.text = ` ${m} x ${n} = ${res}`
            item.value = `selct${c}`
            selct.appendChild(item)
        }
    }
}