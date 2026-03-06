/* Adan Adair Moo Noh 8B */
/* AA 1.4 Frameworks JS */


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var nombreEquipo = "";

function registrador(req, res, next) {

    if(req.body && req.body.mascota && req.body.adjetivo){

        console.log("Datos recibidos:");
        console.log(req.body);

        nombreEquipo = req.body.mascota + " " + req.body.adjetivo;
    }

    next();
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(registrador);

app.post("/submit", (req, res) => {
    res.send(`Nombre del equipo:<br><br>${nombreEquipo} ✌`);
});

app.listen(port, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});