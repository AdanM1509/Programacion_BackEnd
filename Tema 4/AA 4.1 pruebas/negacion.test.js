const numero = require('./negacion');

test('10 no debe ser igual a 20', () => {
    expect(numero()).not.toBe(20);
});