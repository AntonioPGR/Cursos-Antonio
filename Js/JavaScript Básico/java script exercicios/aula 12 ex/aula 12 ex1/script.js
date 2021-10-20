var img = document.getElementById('imagem')
var msg = document.getElementById('msg')
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
if(hora >= 0 && hora < 12){
    document.body.style.background = '#F0E68C'
    msg.innerText = 'agora são ' + hora + ' horas e ' + minutos + ' minutos. Bom Dia'
    img.src = 'fotomanhã.png'
}else{
    if(hora >= 12 && hora < 18){
        document.body.style.background = '#FA8072'
        msg.innerText = 'agora são ' + hora + ' horas e ' + minutos + ' minutos. Boa Tarde'
        img.src = 'fototarde.png.png'
    }else{
        document.body.style.background = '#9370DB'
        msg.innerText = 'agora são ' + hora + ' horas e ' + minutos + ' minutos. Boa Noite'
        img.src = 'fotonoite.png'
    }
}