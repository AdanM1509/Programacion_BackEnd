// Ejercicios 1.2.1: Sintaxis básica de Node.js
// Alumno: Adan Adair Moo Noh


/*i. Crear un módulo con funciones matemáticas y usarlo en otro archivo*/

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

module.exports = {
  suma,
  resta,
  multiplicacion,
  division
};
