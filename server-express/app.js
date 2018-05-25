var fs = require('fs')
var http = require('http');

const file = fs.readFileSync('./word.docx', 'utf8')

console.log(file)

//create a server object:
http.createServer(function (req, res) {
    res.write
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
