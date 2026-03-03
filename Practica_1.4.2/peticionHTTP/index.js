// Adan Adair Moo noh 8B //
// AA 1.4 Framework JS //

import express from 'express';

const app = express();
const port = 3000;

// GET
app.get('/', (req, res) => {
res.status(200).send('<h1>respuesta GET 289</h1>');
});

// POST
app.post('/registro', (req, res) => {
res.status(201).send('Registro terminado');

});

// PUT
app.put('/usuario/actualizar', (req, res) => {
res.status(200).send('Actualización correcta');

});

// PATCH
app.patch('/usuario/modificar', (req, res) => {
res.status(200).send('Modificación finalizada');
});

// DELETE
app.delete('/usuario/eliminar', (req, res) => {
res.status(200).send('Eliminación');

});

app.listen(port, () => {
console.log(`Servidor corriendo en http://localhost:3000`);

});