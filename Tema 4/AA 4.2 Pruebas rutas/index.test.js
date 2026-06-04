// ADAN ADAIR MOO NOH 8B

import { jest } from '@jest/globals';
import request from 'supertest';

jest.unstable_mockModule('mongoose', () => ({
  default: {
    connect: jest.fn().mockImplementation(() => Promise.resolve()),
    model: jest.fn().mockReturnValue({
        find: jest.fn(),
        create: jest.fn(),
        findById: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn()
    }),
    Schema: class {
        constructor() {}
    }
  }
}));


jest.unstable_mockModule('./models/usuario.model.js', () => ({
  default: {
    find: jest.fn(),
    create: jest.fn()
  }
}));

const { default: app } = await import('./index.js');
const { default: Usuario } = await import('./models/usuario.model.js');

describe('Pruebas Unitarias - API CRUD', () => {

  test('GET /usuario - Debe retornar usuarios simulados', async () => {
   
    const mockData = [{ nombre: 'Adan', edad: 21, correo: 'adan@test.com' }];
    Usuario.find.mockResolvedValue(mockData);

    const res = await request(app).get('/usuario');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  test('POST /usuario - Debe crear un usuario simulado', async () => {
    const nuevoUser = { nombre: 'Juan', edad: 30, correo: 'juan@test.com' };
    Usuario.create.mockResolvedValue(nuevoUser);

    const res = await request(app)
      .post('/usuario')
      .send(nuevoUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.nombre).toBe('Juan');
  });
});