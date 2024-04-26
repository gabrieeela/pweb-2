const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Bemvindo</h1>");
});

app.get("/perfil", (req, res) => {
  res.send("<h1>Perfil de usuário</h1>");
});


app.listen(port, () => {
  console.log(`Aplicativo de exemplo escutando no porto ${port}`);
});
