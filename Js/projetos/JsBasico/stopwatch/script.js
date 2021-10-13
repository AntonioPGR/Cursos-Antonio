"use strict"
var sec_insert = document.querySelector('span#sec')
var milsec_insert = document.querySelector('span#milsec')
var sec = 0
var milsec = 0
let start = document.querySelector('button#bt_start')
let stop = document.querySelector('button#bt_stop')
let restart = document.querySelector('button#bt_restart')
let clock;

let exibir = ()=>{
    if (sec < 10){
        sec_insert.innerHTML = `0${sec}`
    }else{
        sec_insert.innerHTML = sec
    }

    if (milsec < 10){
        milsec_insert.innerHTML = `0${milsec}`
    }else{
        milsec_insert.innerHTML = milsec
    }
}

window.onload = function(){
    start.addEventListener('click', function(e){
        clock = setInterval(function(){
            if (milsec < 99){
                milsec += 1
            }else{
                sec += 1
                milsec = 0
            }
            exibir()
        }, 10)
    })
    stop.addEventListener('click', function(e){
        clearInterval(clock)
    })
    restart.addEventListener('click', function(e){
        clearInterval(clock)
        sec = 0
        milsec = 0
        exibir()
    })
}

