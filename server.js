// Name: Borja, Karl Vladimir B.
// WD-303

var myLogModule = require('./routes.js');
var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>Welcome to my Node.js Application</h1></body></html>'
    );
    res.write(
      myLogModule.root(
        'Karl Vladimir B. Borja. This is an activity about basics of Node.js'
      )
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>This is the About Page</h1></body></html>');
    res.write(
      myLogModule.about(
        'Hello Karl Vladimir B. Borja. This activity will teach on how to deal with a simple server and local modules in Node.js'
      )
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>This is the Contact Page</h1></body></html>');
    res.write(
      myLogModule.contact(
        'Karl Vladimir B. Borja, if you want additional details about this activity go to this site: <a href="https://www.tutorialsteacher.com/nodejs/nodejs-tutorials">Tutorialsteacher</a>'
      )
    );

    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>This is the Gallery Page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid Request!');
  }
});

server.listen(4000);
console.log('Node.js web server at port 4000 is running..');
