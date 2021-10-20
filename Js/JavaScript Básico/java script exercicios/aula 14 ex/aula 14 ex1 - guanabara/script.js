function verificar(){
    var res = document.getElementById('res')
    let msg = document.getElementById('msg')
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    if(fim.value == 0 || ini.value == 0 ){
        window.alert('faltam dados, lembre-se, nenhuma informação pode estar vazia' )
    }else{
       msg.innerHTML = 'contando...'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if( p <= 0){
           window.alert('passo invalido, iremos considerar passo = 1')
           p = 1
       }
       if( i <= f ){
           //contagem para cima
           for(var c = i; c <= f; c += p ){
            res.innerHTML += ` ${c} \u{1F449}`
        }
       }else{ if( f <= i){
           // contagem para baixo
           // esta certo porem a pag ta travando
           for (var c = i; f <= i; c -=p){
               res.innerHTML += ` ${c} \u{1F449}`
           }
       }
       }

res.innerHTML += `\u{1F3C1}`
}
}