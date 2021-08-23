var idade = 70
console.log('voce tem ' + idade + ' anos, portanto')
if(idade < 16){
    console.log('você não pode votar')
}else{
    if(idade >=16 && idade < 18){
        console.log('seu voto é opcional')
    }else{
        if(idade >=18 && idade <60){
            console.log('seu voto é obrigatório')
        }else{
            console.log('seu voto é opcional')
        }
    }
}