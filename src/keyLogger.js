const EventEmitter = require('events');

export default class KeyLogger extends EventEmitter {

    static KEYCODES = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 }

    constructor() {
        super()
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        if(Object.values(KeyLogger.KEYCODES).includes(event.keyCode)){
            this.emit('keyDown', event.keyCode)
        }
    }
}