var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');

var app = express();
var jsonFileName = null
app.use(bodyParser.json()); // for parsing application/json

app.get('/', function(req, res){
    res.send('yo');
    
});

app.get('/test', function(req, res){
    jsonFileName = req.query.filename;
    //fs.readFile(jsonFileName, readTest.bind((null, jsonFileName)))
    //demo = fs.readFile(jsonFileName, readTest.bind((null, res)))
    var data=fs.readFileSync(jsonFileName, 'utf8');
    var demo = JSON.stringify(JSON.parse(data), null, 1);
    res.send(demo);      
});

app.post('/test', function (req, res){
    // tempData = ""
    // temp = JSON.stringify(req.body);
    // for (x = 1; x<tempData.length; i++){
    //     tempData += temp.charAt(x);
    // }
    // data = "{\n" + tempData + "\n}" 
    try{
        fs.writeFile('./test.json', JSON.stringify(req.body, null, 1), function(err) {
            if (err) throw err;
            console.log('Replaced!');
          });
        res.send(req.body);
    }catch(error){
        console.log(error);
        res.send("Internal server failure");
    }
    res.send()
});

// app.post('/', function (req, res) {
//     res.send('POST request to homepage');
//   });
   

// app.get('/test', function(req, res){
//     jsonFileName = req.query.filename;
//     //fs.readFile(jsonFileName, readTest.bind((null, jsonFileName)))
//     //demo = fs.readFile(jsonFileName, readTest.bind((null, res)))
//     var data=fs.readFileSync(jsonFileName, 'utf8');
//     res.send(data)
   
    //res.send(tempURL.query.filename)
    //readJsonFileName = .query.filename
    //res.send(readJsonFileName)
// });

// app.post('/test', function (req, res){
//     //bind passes in reference to readTest function and passes is res to given readTest scope of res
//     //fs.readFile('test.html', readTest.bind(null, res));
//     //var demo = JSON.parse();   
//     try{
//         console.log(req.body);
//         res.send(req.body);
//     }catch(error){
//         console.log(error);
//         res.send("Internal server failure");
//     }
//     res.send()
// });


//read
function readTest(res, err, data){
    res.write(data);
    res.end();
};


// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });

app.listen(8080);
console.log('listening on port 8080')