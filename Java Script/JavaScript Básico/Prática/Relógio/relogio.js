let msg = document.getElementById('hora_atual');
let imagem = document.getElementById('img');
let bgcolor = document.body.style;

let agora = new Date;
let hora = Number(agora.getHours());
let min = Number(agora.getMinutes());

msg.innerHTML = `Neste momento são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos`;

if (hora >= 6 && hora <= 12){
    bgcolor.backgroundColor = '#ffee7d';
    imagem.src = 'imgs/manha.jpg';
}else if (hora >= 13 && hora <= 18){
    bgcolor.backgroundColor = '#8be4fa';
    imagem.src = 'imgs/tarde.jpg';
}else{
    bgcolor.backgroundColor = '#2b2044'; 
    imagem.src = 'imgs/noite.jpg';
}

