//module os
const os = require("os");

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());

//module path
const path = require("path");

const filePath = path.join("public", "dist", "styles.css");

console.log(filePath);
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.parse(filePath));
console.log(path.resolve("dist"));

//module http response
const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello world");
    res.end();
  })
  .listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });

//module http request
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Welcome to the server");
    return res.end();
  }

  if (req.url === "/about") {
    res.write("About");
    return res.end();
  }

  res.write(`
        <h1>Not Found</h1>
        <p>Esta pagina no se encontro</p>
        <a href='/'>Volver a la pagina principal</a>
    `);
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

//file system sync
const fs = require("fs");

const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

fs.writeFileSync("./data/third.txt", "Este es un 3er archivo");

const title = "Contenido del 4to archivo ";
fs.writeFileSync("./data/fourth.txt", title, {
  flag: "a", //append
});

//file system async
const fs = require("fs");

fs.readFile("./data/first.txt", "utf-8", function (error, data) {
  console.log(error);
  console.log(data);
});

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  console.log(error);
  console.log(data);
});

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});