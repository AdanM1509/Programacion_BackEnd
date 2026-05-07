// ADAN ADAIR MOO NOH 8B

import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const uri = process.env.uri;

const client = new MongoClient(uri);

let usuariosCollection;

async function conectarDB() {
    try {

        await client.connect();

        console.log('Conexión exitosa a MongoDB');

        const db = client.db('CRUD_API');

        usuariosCollection = db.collection('usuarios');

    } catch (error) {

        console.error('Error al conectar:', error);

    }
}

conectarDB();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});


app.post('/usuario', async (req, res) => {
    try {

        const nuevoUsuario = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            edad: req.body.edad
        };

        const resultado = await usuariosCollection.insertOne(nuevoUsuario);

        res.status(201).json(resultado);

    } catch (error) {

        console.error('Error al crear usuario:', error);

        res.status(500).json({
            error: 'Error al crear usuario'
        });
    }
});


app.get('/usuario', async (req, res) => {
    try {

        const usuarios = await usuariosCollection.find().toArray();

        res.status(200).json(usuarios);

    } catch (error) {

        console.error('Error al obtener usuarios:', error);

        res.status(500).json({
            error: 'Error al obtener usuarios'
        });
    }
});


app.get('/usuario/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const usuario = await usuariosCollection.findOne({
            _id: new ObjectId(id)
        });

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }

        res.status(200).json(usuario);

    } catch (error) {

        console.error('Error al buscar usuario:', error);

        res.status(500).json({
            error: 'Error al buscar usuario'
        });
    }
});


app.put('/usuario/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const resultado = await usuariosCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: req.body
            }
        );

        res.status(200).json(resultado);

    } catch (error) {

        console.error('Error al actualizar usuario:', error);

        res.status(500).json({
            error: 'Error al actualizar usuario'
        });
    }
});


app.delete('/usuario/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const resultado = await usuariosCollection.deleteOne({
            _id: new ObjectId(id)
        });

        res.status(200).json({
            mensaje: 'Usuario eliminado correctamente'
        });

    } catch (error) {

        console.error('Error al eliminar usuario:', error);

        res.status(500).json({
            error: 'Error al eliminar usuario'
        });
    }
});


app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});