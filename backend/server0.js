const express = require("express");
//instanciation d’express
const app = express();
//definition du port par défaut
const port = process.env.PORT || 4500;
//gestion des routes
app.get("/", (req, res) => {
 res.set("Content-Type", "text/html");
 res.send("Hello world !!");
});
app.listen(port, () => {
 console.log("Server app listening on port " + port);
});