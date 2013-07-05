var express = require('express');
var fs      = require('fs');

var app     = express.createServer(express.logger());

var buffer  = new buffer(fs.readFileSync('index.html'));

app.get('/',
        function(req, res) { res.send(buffer.toString()); }
       );

var port = process.env.PORT || 5000;
app.listen(port, function()
                 { console.log("Listening on " + port); }
          );