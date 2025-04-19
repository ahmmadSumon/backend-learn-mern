// //day 1
// // console.log("Hello from backend")

// // // const add = require("./math")
// // // console.log(add(5,5))

// // const {addition, subtract} = require("./math")

// // console.log("ADD" , addition(22 , 25))
// // console.log("Minus" , subtract(25, 18))

// //day 2
// //File System Module(fs)
// const fs = require('fs')

// //write to a file
// const write = fs.writeFileSync('hello.txt', "hello nodejs")
// fs.writeFileSync('delhobe.txt', "hello nodejs")

// //read from  a file
// const content = fs.readFileSync('hello.txt', 'utf-8')
// console.log(content)


// //append to a file
// fs.appendFileSync('hello.txt', '\nNew line added.')

// //read from  a file
// const content1 = fs.readFileSync('hello.txt', 'utf-8')
// console.log(content1)

// //delete a file
// fs.unlinkSync('delhobe.txt')
// //Real-life Use:
// //Storing logs, temp files, backups
// //Saving user-uploaded files

//Path Module
// const path = require('path');

// console.log(path.basename(__filename)) //filename index.js 
// console.log(path.dirname(__filename)) //folder name 
// console.log(path.extname(__filename)) //extension name .js

// const fullPath = path.join(__dirname, 'folder', "file.txt")
// console.log(fullPath)