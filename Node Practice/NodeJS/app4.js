// const logger = require('./misc/logger');
// logger.log('Hello');

// const path = require('path');
// console.log(path.parse(__filename));

// const os = require('os');
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());
// console.log(os.version());

// const { error } = require('console');
// const fs = require('fs');
// fs.readdir('./', (err, res) => {
//     if (err) {
//         console.log('Error : ', error);
//     } else {
//         console.log('Result : ', res);
//     }
// });

// const EventEmitter = require('events'); // EventEmitter is a class
// const emitter = new EventEmitter();
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called');
//     console.log(arg);
//     console.log('ID : ', arg.id);
//     console.log('URL : ', arg.url);
// });
// console.log(emitter.emit('messageLogged', { id: 1, url: 'http://' }));
//// Task....
// emitter.on('logging', (arg) => {
//     console.log('Data : ', arg.data);
// });
// emitter.emit('logging', { data: 'Hello World' });

// const EventEmitter = require('events'); // EventEmitter is a class
// const Loggers = require('./misc/loggerEvent');
// const logger = new Loggers();
// logger.on('msgLog', (arg) => {
//     console.log('ID : ', arg.id);
//     console.log('Name : ', arg.name);
// });
// logger.log('Hello');

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }
//     if (req.url === '/api/emp') {
//         res.write(JSON.stringify([1, 2, 3, 4, 5]));
//         res.end();
//     }
// });
// server.listen(3000);
// console.log('Listening on PORT : ', 3000);