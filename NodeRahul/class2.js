// const os = require('os');

const fs = require('fs')

// console.log(" has changed");

// values of os.platform()

// darwin (macOS)

// freebsd (FreeBSD)

// linux (Linux)

// sunos (SunOS)

// win32 (Windows)

// if(os.platform() === 'win32'){

// console.log("Windows");

// }

// os.cpus().forEach((cpu, index) => {

// console.log(`CPU ${index} : ${cpu.model}`);

// })

// console.log(os.arch()); //architecture

// console.log(os.freemem()); //free memory

// console.log(os.networkInterfaces()); //total memory

// File System Module

// fs.mkdir('test123')

// .then(() => {

// console.log('folder created')

// })

// .catch((err) => {

// console.log(err)

// })

// fs.watch('test123/test.txt').then((event, filename) => {

// console.log(event, filename)

// })

// fs.writeFile('test123/test.txt', 'Hello World')

// .then(() => {

// console.log('file created')

// })

// .catch((err) => {

// console.log(err)

// })

// fs.readFile('test123/test.txt', (err,data) => {

// console.log(data);

// })

// fs.appendFile('test123/test.txt', 'this will append ? ')

// try {

// const value = fs.readFileSync('test123/tesere.txt', 'utf8')

// } catch (err) {

// // console.log(err)

// console.log('code is running')

// }

// console.log('end of code');

const EventEmitter = require('events');

class ExamOverEventEmitter extends EventEmitter {}

const examOver = new ExamOverEventEmitter();

examOver.on('examOver', () => {

console.log('exam is over says student 1');

})

examOver.on('examStarts', () => {

console.log('exam is over says student 2');

})

examOver.emit('examOver');

examOver.emit('examOver');


