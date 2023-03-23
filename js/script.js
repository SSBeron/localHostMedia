const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("../index.html", (err, data) => {
      if (err) {
        res.end("The error has occurred! Please contact with Sultan!");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/TWD") {
    fs.readFile("../media1.html", (err, data) => {
      if (err) {
        res.end("The error has occurred! Please contact with Sultan!");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/Flash") {
    fs.readFile("../media2.html", (err, data) => {
      if (err) {
        res.end("The error has occurred! Please contact with Sultan!");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/time") {
    fs.readFile("../time.html", (err, data) => {
      if (err) {
        res.end("The error has occurred! Please contact with Sultan!");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile("../error", (err, data) => {
      if (err) {
        res.end("The error has occurred! Please contact with Sultan!");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  }
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
