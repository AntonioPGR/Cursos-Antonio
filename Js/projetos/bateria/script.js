document.addEventListener('keydown', event => {
    switch(event.key){
        /* parte baixa */
        case 'a':
            var audio = new Audio('sound/tom-low.wav');
            audio.play();
            break
        case 's':
            var audio = new Audio('sound/tom-mid.wav');
            audio.play();
            break
        case 'd':
            var audio = new Audio('sound/tom-high.wav');
            audio.play();
            break
        case 'f':
            var audio = new Audio('sound/snare.wav');
            audio.play();
            break
        case 'k':
            var audio = new Audio('sound/kick.wav');
            audio.play();
            break

        /* discos */
        case 't':
            var audio = new Audio('sound/crash.wav');
            audio.play();
            break
        case 'r':
            var audio = new Audio('sound/ride.wav');
            audio.play();
        case 'u':
            var audio = new Audio('sound/hithat-open.wav');
            audio.play();
        case 'i':
            var audio = new Audio('sound/hithat-close.wav');
            audio.play();
            break
  }
})