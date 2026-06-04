// ADAN ADAIR MOO NOH 8B

import { jest } from '@jest/globals';
import request from 'supertest';

jest.unstable_mockModule('mongoose', () => ({
  default: {
    connect: jest.fn().mockResolvedValue(true),
    model: jest.fn().mockReturnValue({
      find: jest.fn(),
      create: jest.fn(),
      findById: jest.fn(),
      findByIdAndUpdate: jest.fn(),
      findByIdAndDelete: jest.fn(),
    }),
    Schema: class { constructor() {} }
  }
}));


jest.unstable_mockModule('./models/usuario.model.js', () => ({
  default: {
    find: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  }
}));


const { default: app } = await import('./index.js');
const { default: Usuario } = await import('./models/usuario.model.js');

describe('Pruebas Unitarias del CRUD de Usuarios', () => {


  test('POST /usuario - Debe crear un usuario correctamente', async () => {
    const nuevoUser = { nombre: 'Adan Adair', edad: 21, correo: 'adan@test.com' };
    Usuario.create.mockResolvedValue(nuevoUser);

    const res = await request(app).post('/usuario').send(nuevoUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.nombre).toBe('Adan Adair');
  });


  test('GET /usuario - Debe obtener la lista de usuarios', async () => {
    const listaFalsa = [{ nombre: 'Adan', edad: 21, correo: 'adan@test.com' }];
    Usuario.find.mockResolvedValue(listaFalsa);

    const res = await request(app).get('/usuario');

    expect(res.statusCode).toBe(200);
    expect(res.body[0].nombre).toBe('Adan');
  });


  test('GET /usuario/:id - Debe obtener un usuario por su ID', async () => {
    const userFalso = { nombre: 'Adan', edad: 21 };
    Usuario.findById.mockResolvedValue(userFalso);

    const res = await request(app).get('/usuario/12345');

    expect(res.statusCode).toBe(200);
    expect(res.body.nombre).toBe('Adan');
  });

  test('PUT /usuario/:id - Debe actualizar los datos de un usuario', async () => {
    const userActualizado = { nombre: 'Adan Modificado', edad: 22 };
    Usuario.findByIdAndUpdate.mockResolvedValue(userActualizado);

    const res = await request(app)
      .put('/usuario/12345')
      .send({ nombre: 'Adan Modificado' });

    expect(res.statusCode).toBe(200);
    expect(res.body.nombre).toBe('Adan Modificado');
  });

  test('DELETE /usuario/:id - Debe eliminar un usuario', async () => {
    Usuario.findByIdAndDelete.mockResolvedValue({ _id: '12345' });

    const res = await request(app).delete('/usuario/12345');

    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe('Usuario eliminado correctamente');
  });

  test('GET /usuario/:id - Debe dar 404 si el usuario no existe', async () => {
    Usuario.findById.mockResolvedValue(null);

    const res = await request(app).get('/usuario/999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Usuario no encontrado');
  });
});