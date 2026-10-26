const http = require('http');
const fs = require('fs');
const path = require('path');
const page = path.join(__dirname, 'index.html');
http.createServer((req, res) => {
  if (req.url === '/portrait.png') {
    res.writeHead(200, {'Content-Type': 'image/png', 'Cache-Control': 'no-store'});
    return fs.createReadStream(path.join(__dirname, 'portrait.png')).pipe(res);
  }
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store'});
    return fs.createReadStream(page).pipe(res);
  }
  res.writeHead(404); res.end('Not found');
}).listen(3000, '127.0.0.1', () => console.log('Local: http://localhost:3000'));
