
//#region  import / config
import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');
const btoa = require('btoa');
const cors = require('cors');
const app = express();
let port: number = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler());
app.use(cors());
//#endregion

const pathes = {
    pdf: path.join(__dirname, '..', 'word.pdf'),
    word: path.join(__dirname, '..', 'word.docx')
}

const fileWord = fs.readFileSync(pathes.word);
const filePDF = fs.readFileSync(pathes.pdf);

app.get('/pdf/inline', function (req, res, next) {
    var file = fs.createReadStream(pathes.pdf);
    var stat = fs.statSync(pathes.pdf);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=quote.pdf');    
    file.pipe(res);
});

app.get('/pdf/attachment', function (req, res, next) {
    var file = fs.createReadStream(pathes.pdf);
    var stat = fs.statSync(pathes.pdf);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');    
    file.pipe(res);
});

// app.post('/', (req, res) => {

//     res.contentType("application/pdf");
//     res.send(filePDF)

// });

app.listen(port, function () {
    console.log('Server listening on port %d in %s mode', port, app.settings.env);
});

