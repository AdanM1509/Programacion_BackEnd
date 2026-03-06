/* Adan Adair Moo Noh 8B */
/* AA 1.4 Frameworks JS */

import express from "express";
import bodyParser from "body-parser";

const app = express();
const puerto = 3000;

// middleware para leer formularios
app.use(bodyParser.urlencoded({extended:true}));

// carpeta publica
app.use(express.static("public"));

// ruta POST
app.post("/submit", (req,res)=>{

    console.log("Datos recibidos del formulario:");
    console.log(req.body);

    res.send("Datos recibidos correctamente");

});

app.listen(puerto, ()=>{
    console.log("Servidor ejecutándose en http://localhost:3000");
});