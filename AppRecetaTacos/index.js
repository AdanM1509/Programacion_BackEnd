import express from "express";
import bodyParser from "body-parser";
import { readFileSync } from "fs";

const app = express();
const PORT = 3000;

// Leer y deserializar el JSON
const recetaJSON = readFileSync("./recetaTacos.json", "utf-8");
const recetasTacos = JSON.parse(recetaJSON);

// Middlewares
app.use(express.static("public"));
app.use(bodyParser.json());

// Endpoint GET /receta/:type
app.get("/receta/:type", (req, res) => {
  const type = req.params.type;
  const receta = recetasTacos.find(r => r.type === type);

  if (receta) {
    res.json(receta);
  } else {
    res.status(404).json({ error: "Receta no encontrada" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});