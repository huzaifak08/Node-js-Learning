// Events: Remove "type": "module", from package.json because we are using CMJS module.

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
    console.log('Please turn off the motor');

    // Gentle Reminder:
    setTimeout(() => { // non blocking: execute at the very end.
        console.log('Turn of the motor please');
    }, 3000)
});

myEmitter.emit('waterFull');