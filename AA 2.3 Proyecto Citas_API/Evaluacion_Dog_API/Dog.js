const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

// Configuración
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", async (req, res) => {
    try {
        const respuesta = await axios.get(DOG_API_URL, { timeout: 5000 });

        const imagen = respuesta.data?.message;

        if (!imagen || typeof imagen !== "string") {
            throw new Error("La API no devolvió una imagen válida");
        }

        res.render("index", { imagen });

    } catch (error) {
        const esFallaDeRed = !error.response;
        const mensaje = esFallaDeRed
            ? "No se pudo conectar con la API de perros. Revisa tu conexión."
            : `Error de la API (${error.response.status}): ${error.response.statusText}`;

        console.error("[Dog API Error]", error.message);

        res.status(500).render("error", { mensaje });
    }
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});