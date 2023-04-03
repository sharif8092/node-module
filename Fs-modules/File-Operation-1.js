/**
 * 1.How to create new file?
 * 2.How to add content to this newly created file?
 * 3.How to append some content to already existing file?
 * 4.what is buffer data ?
 * 5.How to read the data inside the file?
 * 6.How to convert buffer data into readable format?
 * 7.How to delete file?
 */

const fs = require('fs');
// fs.writeFileSync('text.txt' , 'just testing fs module writeFileSync');

//2.How to add content to this newly created file?
// fs.appendFileSync("text.txt", " hi i am sharif kamran");


//5.How to read the data inside the file?
// const buffer_data = fs.readFileSync("text.txt");

// const readableData = buffer_data.toString();
// const x =fs.readFileSync('data.txt' , 'utf-8');
// console.log(readableData +"       " + x );

//How to make folder
// fs.mkdirSync('utils');

// fs.appendFileSync("utils/text.txt", " hi i am sharif kamran 2");

// fs.renameSync("text.txt" , "data.txt");


//7.How to delete file?
// fs.unlinkSync("utils/text.txt");

//8.How to delete folder?
// fs.rmdirSync("utils");



fs.mkdirSync('filesystemModule');
fs.writeFileSync('filesystemModule/test.txt', 'this is first file');
fs.appendFileSync('filesystemModule/test.txt', ' this is second file ');
const x = fs.readFileSync('filesystemModule/test.txt', 'utf-8');
console.log(x);

fs.unlinkSync('filesystemModule/test.txt');
fs.rmdirSync('filesystemModule')
