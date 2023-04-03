const fs = require("fs");

// const x =fs.readFileSync("text.txt","utf-8");

// fs.readFile("data.txt", "utf-8", (err,data)=>{

//     console.log(data);
// });
// console.log("after data call" + x);


fs.writeFile("shark" , "my name is sharif kamran", (err)=>{
    console.log(err);
});

fs.rename("shark", "shark.txt", (err)=>{
  console.log(err);
});
   
fs.writeFile("shark.txt", "i am adding new data", (err)=>{
    console.log(err);
})

fs.readFile("shark.txt" , "utf-8", (err,data)=>{
    console.log(data);
})

