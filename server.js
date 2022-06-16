const http = require('http');
const fs = require('fs');

host = '127.0.0.1';
port = 3000;

const server = http.createServer((req, res) => {
    const urlpath = req.url;

    if (urlpath === '/' || urlpath === '/home'){
        res.statusCode = 200;
        res.setHeader = {'content-Type': 'text/html'};
        fs.createReadStream('./pages/home.html');
    }else if (urlpath === '/about'){
        res.statusCode = 200;
        res.setHeader = {'content-Type': 'text/html'};
        fs.createReadStream('./pages/about.html');
    }else if (urlpath === '/contact'){
      res.statusCode = 200;
      res.setHeader = { 'content-Type': 'text/html'};

      fs.createReadStream('./pages/contact.html')
    }
});

server.listen(port, host, () => {
    console.log(`server is running at ${host}:${port}`);
});
