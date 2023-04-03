
const http = require('http');

const server = http.createServer((request,responce)=>{
    responce.write('hello world2 \n');
    responce.write('hello world2 \n');
    responce.write('hello world2 \n');
    responce.write('hello world1 \n');
  
    responce.end('hi');
});
server.listen(3000,()=>{
    console.log('sever is listening at 3000 port');
})
