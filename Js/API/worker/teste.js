let counter = 0

timer = ()=>{
    counter++
    postMessage(counter)
    setTimeout('timer()', 1000)
}

timer()