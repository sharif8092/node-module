const os = require("os");
console.log(os.arch());

const freeMemory = os.freemem();
const TotalMemory = os.totalmem();
console.log(`${freeMemory/1024/1024/1024} and total memory is ${os.totalmem/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.platform());

os.cpus().forEach((cpu, index) => {
console.log( `CPU ${index} ${cpu.model}`);
    
     })


     setInterval(()=>{
    console.log(`${freeMemory/1024/1024/1024} and total memory is ${os.totalmem/1024/1024/1024}`);
      
     },5000)
