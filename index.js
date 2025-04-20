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

//os module
//give data about operating system
// const os = require('os')

// console.log(os.platform())
// console.log(os.arch())

// console.log(os.totalmem())
// console.log(os.freemem())

// console.log(os.homedir())
// console.log(os.hostname())

// //EventEmitter
// const EventEmitter = require('events')
// const emmiter = new EventEmitter()

// // emmiter.on('greet', (name)=>{
// //     console.log(`HELLO ${name}`)
// // })
// // emmiter.emit("greet", "smn")

// //custom event
// emmiter.on("orderPlaced", (order) => {
//     console.log(`order receiv3ed ${order}`)
// })
// emmiter.emit("orderPlaced" , {id: 1, item:"pizza"})

//practice
//Create a file log.txt, write a message, and append a new message after 2 seconds using setTimeout.
// const fs = require('fs')

// fs.writeFileSync("log.txt", 'new file')

// setTimeout(()=>{
//    const newLine = fs.appendFileSync("log.txt", "\nNew line added")
//    console.log("New line added to log.txt")
// },2000)

//Create a custom event userJoined, which logs: "User [name] has joined."
// const EventEmitter = require("events")
// const emmiter = new EventEmitter()

// emmiter.on("userJoined", (name)=>{
//     console.log(`User ${name} has joined`)
// })
// emmiter.emit("userJoined", "smn")

//Log your OS info: platform, total memory, home directory.
// const os = require('os')
// console.log(os.platform())
// console.log(os.totalmem())
// console.log(os.homedir())



//day 3
// HTTP Module, Creating a Server, and Routing (No Express Yet!)

// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.end("Assalamualaikum World")
// })

// server.listen(3000, () => {
//     console.log("server is open on the port 3000")
// })


//add a basic routing
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if(req.url === "/" && req.method === "GET" ){
//         res.writeHead(200, {"content-Type": "text/plain"}
           
//         )
//         res.end("Home page")
//     }else if(req.url === "/about" && req.method === "GET"){
//         res.writeHead(200, {"content-type": "text/plain"})
//         res.end("about page")
//     }else{
//         res.writeHead(404, {"content-type" : "text/plain"})
//         res.end("404 error")
//     }
// })

// server.listen(3000, ()=> {
//     console.log("server is on")
// })

//serve fs with html 
const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("home.html" , (err, data) => {
            if(err){
                res.writeHead(500)
                res.end("server error")
            }else{
                res.writeHead(200, {"content-type" : "text/html"});
                res.end(data)
            }
        })
        
    }else{
        res.writeHead(404)
        res.end('404 error')
    }
} )

server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})