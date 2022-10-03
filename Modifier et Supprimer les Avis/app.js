
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send ('Hello ANAS')
// })

// app.listen(3000) 
let http = require('http')
const port=3000;
http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('hello world!')
    res.end()
}).listen(port, function(){
    console.log(`Node.js web server at localhost:${port} is running`);
})