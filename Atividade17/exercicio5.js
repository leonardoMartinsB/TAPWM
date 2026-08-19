const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('dados', function(fecha) {
    console.log(fecha);
});

ee.emit('dados', 'primeira vez: ' + Date.now());

setInterval(function() {
    ee.emit('dados', Date.now());
}, 500);