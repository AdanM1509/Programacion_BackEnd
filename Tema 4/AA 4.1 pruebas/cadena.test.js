const mensaje = require('./cadena');

test('La cadena contiene la palabra porfavor', () => {
    expect(mensaje()).toMatch(/porfavor/);
});