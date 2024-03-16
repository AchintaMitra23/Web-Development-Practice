const EventEmitter = require('events');

exports.endPoint = url = 'http://logger.io/log';

class Loggers extends EventEmitter {
    log = (message) => {
        console.log(message)
        this.emit('msgLog', { id: 1, name: 'Aparna' });
    }
}

module.exports = Loggers;