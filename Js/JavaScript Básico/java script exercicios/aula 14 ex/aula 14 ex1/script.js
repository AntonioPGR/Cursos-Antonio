function calcular(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pulo = document.getElementById('pulo')
    var res = document.getElementById('res')
    if( ini.value == 0 || fim.value == 0 || pulo.value == 0){
        window.alert('Por Favor, verifique os dados e tente novamente')
    }else{
        if( Number( pulo.value ) > Number( fim.value ) ){
            window.alert('Atenção, [PULO] nao pode ser maior que [FIM]')
        }else{
            var i = Number( ini.value )
            var f = Number( fim.value )
            var p = Number( pulo.value )
            if( i <= f){
                for( var c = i ; c <= f; i += p){
                    res.innerHTML += c
                }
            }
        }
    }
    }
