let http = require("http");

let fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/event") {
    fs.readFile("event.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/testmonial") {
    fs.readFile("testmonial.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (error, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
console.log("Server is running on 3000");
