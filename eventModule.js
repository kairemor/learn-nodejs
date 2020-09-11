const EventEmitter = require('events')

//Creating class 
class MyEmitter extends EventEmitter {}

// instatiate a object
const myEmitter = new MyEmitter() ; 

// creating a event 

myEmitter.on('event', () => {
    console.log("The event is on emit guys"); 
})

myEmitter.emit('event'); 