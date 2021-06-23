function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.getElementById('img')
    res.style.textAlign = 'center'
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
    if(sexo[0].checked){
        var genero = 'masculino'
        if(idade < 8){
            //criança
            res.innerText = `foi detectado uma criança do sexo ${genero}, com ${idade} anos`
            img.src = 'bebehomem.png'
        }else{
            if(idade < 18){
            //jovem
            res.innerText = `foi detectado um jovem do sexo ${genero}, com ${idade} anos`
            img.src = 'jovemhomem.png'
            }else{
                if(idade < 60){
                //adulto
                res.innerText = `foi detectado um adulto do sexo ${genero}, com ${idade} anos`
                img.src = 'homemadulto.png'
                }else{//idoso
                    res.innerText = `foi detectado um idoso do sexo ${genero}, com ${idade} anos`
                    img.src = 'idoso homem.png'
                }
            }
        }
    }
    else{
        var genero = 'feminino'
        if(idade < 8){
            //criança
            res.innerText = `foi detectado uma criança do sexo ${genero}, com ${idade} anos`
            img.src = 'bebemulher.png'
        }else{
            if(idade < 18){
            //jovem
            res.innerText = `foi detectado uma jovem do sexo ${genero}, com ${idade} anos`
            img.src = 'jovemmulher.png'
            }else{
                if(idade < 60){
                //adulto
                res.innerText = `foi detectado uma adulta do sexo ${genero}, com ${idade} anos`
                img.src = 'mulheradulta.png'
                }else{//idoso
                    res.innerText = `foi detectado uma idosa do sexo ${genero}, com ${idade} anos`
                    img.src = 'idosa mulher.png'
                }
            }
        }
    }
    }
}
// outro jeito de por imagem    
    //var img1 = document.createElement('img')
    //img1.setAttribute('id', 'foto')
    // onde vai por a img:
    //img.setAttribute('src', 'nome da foto)
    //depois disso para colocar a img no site:
    //res.appendChild('img')

