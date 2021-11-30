let events = require('events');

// função a ser executada no evento
let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// criação do evento e definição de o que acontece quando ele ocorre
myEmitter = new events.EventEmitter();
myEmitter.on('celebration', listenerCallback);

// emissão do evento passando o 2 arg como parâmentro
myEmitter.emit('celebration', 'good times, come on!');