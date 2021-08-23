function calcular(){
    var numero = document.getElementById('numero')
    var multiplicador = '1'
    var  msg = document.getElementById('res')
    if(numero.value.length == 0){
        window.alert('Por favor, verifique os dados e tente novamente ')
    }else{
        msg.innerHTML = 'calculando... <br>'
        var n = Number(numero.value)
        var m = multiplicador
        for(var c = m; m <= 10 ; m++){
            var res = m*n
            msg.innerHTML += ` ${m} x ${n} = ${res} /`
        }
    }
}