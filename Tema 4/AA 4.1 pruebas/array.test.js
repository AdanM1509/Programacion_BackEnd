const frutas = require('./array');

test('El array contiene Flash Reverso', () => {
    expect(frutas()).toContain('Flash Reverso');
});