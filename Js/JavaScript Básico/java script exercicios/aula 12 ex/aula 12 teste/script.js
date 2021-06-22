var agora = new Date()
var dia = agora.getDay()
var mesn = agora.getMonth()
var msg = document.getElementById('msg')
var img = document.getElementById('img')
if( dia >= '21' && mesn == '11' ){
    document.body.style.background = '#FFFACD'
    msg.innerHTML = 'estamos no verão'
    img.src = 'verão.png'
}else{if(mesn == '1'){
    document.body.style.background = '#FFFACD'
    msg.innerHTML = 'estamos no verão'
    img.src = 'verão.png'
}else{if(dia < '20' && mesn == '2' ){
    document.body.style.background = '#FFFACD'
    msg.innerHTML = 'estamos no verão'
    img.src = 'verão.png'
    // fim verão
}else{if(dia >= '20' && mesn == '2'){
    document.body.style.background = '#FF7F50'
    msg.innerHTML = 'estamos no outono'
    img.src = 'outono.png'
}else{if(mesn == '3' || mesn == '4'){
    document.body.style.background = '#FF7F50'
    msg.innerHTML = 'estamos no outono'
    img.src = 'outono.png'
}else{if ( dia < '20' && mesn == '5') {
    document.body.style.background = '#FF7F50'
    msg.innerHTML = 'estamos no outono'
    img.src = 'outono.png'
    // fim outono
}else{if(dia >= '20' && mesn == '5'){
    document.body.style.background = '#00BFFF'
    msg.innerHTML = 'estamos no inverno'
    img.src = 'inverno.png'
}else{if(mesn == '6' || mesn == '7'){
    document.body.style.background = '#00BFFF'
    msg.innerHTML = 'estamos no inverno'
    img.src = 'inverno.png'
}else{if( dia < '22' && mesn == '8' ){
    document.body.style.background = '#00BFFF'
    msg.innerHTML = 'estamos no inverno'
    img.src = 'inverno.png'
    //fim do inverno
}else{if(dia >= '22' && mesn == '8'){
    document.body.style.background = '#FF69B4'
    msg.innerHTML = 'estamos na primavera'
    img.src = 'primavera.png'
}else{if(mesn == '9' || mesn == '10'){
    document.body.style.background = '#FF69B4'
    msg.innerHTML = 'estamos na primavera'
    img.src = 'primavera.png'
}else{if( dia < '21' && mesn == '11' ){
    document.body.style.background = '#FF69B4'
    msg.innerHTML = 'estamos na primavera'
    img.src = 'primavera.png'
    //fim da primavera
}
}
}
}
}
}
}
}
}
}
}
}