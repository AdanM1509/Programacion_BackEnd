// Ejercicios 1.2.1: Sintaxis básica de Node.js
// Alumno: Adan Adair Moo Noh


/*a. Integrar la informacion de cada ejercicio en comentarios
en línea o multilínea.

b. Declaración de todos los diferentes tipos de datos
(variable) y mostrar sus valores en consola.*/


var text = "Hola Mundo";

console.log(text);*/

----------------------------------------------------------------------------------

/*c. Array con diferentes tipos de datos*/

const datos = [
  25,                 // number
  "Hola Node.js",     // string
  true,               // boolean
  { nombre: "Adan" }, // object
  [1, 2, 3]           // array
];

console.log(datos);

--------------------------------------------------------------------------------------------------------------


/*d. Escribe una función polinómica de segundo grado que tome dos números y muestre el resultado*/

function polinomioSegundoGrado(x, a) {
  const b = 3;
  const c = 2;
  const resultado = a * x * x + b * x + c;
  console.log("Resultado:", resultado);
}

// Ejemplo de uso
polinomioSegundoGrado(2, 4);

------------------------------------------------------------------------------------------------------------------------------


/*e. Crea una función flecha que reciba un string y muestre su impresión aplicando un método de manipulación de cadenas*/

const manipularCadena = (texto) => {
  console.log(texto.toUpperCase());
};

// Ejemplo de uso
manipularCadena("a Adan Moo, le gusta el anime");*/

-------------------------------------------------------------------------------------------------------------------------------

/*f. Función que imprime los números del 1 al 10 en orden descendente*/

function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

imprimirDescendente();


----------------------------------------------------------------------------------------------------------------------

/*g.Crear un objeto que represente un objeto de tu institución*/

const institucion = {
  nombre: "Instituto Tecnológico Superior de Felipe Carrillo Puerto",
  carrera: "Ingeniería en Sistemas Computacionales",
  semestre: 8,
  Grupo: "B",
  turno: "Vespertino"
};

console.log(institucion);

-----------------------------------------------------------------------------------------------------------------------

/*h.Agregar un método al objeto e imprimir una descripción*/

const institucion = {
  nombre: "Instituto Tecnológico Superior de Felipe Carrillo Puerto",
  carrera: "Ingeniería en Sistemas Computacionales",
  semestre: 8,
  grupo: "B",
  turno: "Vespertino",
  descripcion() {
    console.log(
      `Estudio en el ${this.nombre}, en la carrera de ${this.carrera}, semestre ${this.semestre},grupo ${this.grupo}, turno ${this.turno}.`
    );
  }
};

institucion.descripcion();

---------------------------------------------------------------------------------------------------------------------------------------------------

/*i. Crear un módulo con funciones matemáticas y usarlo en otro archivo*/

const matematicas = require('./matematicas');

console.log("Suma:", matematicas.suma(5, 3));
console.log("Resta:", matematicas.resta(5, 3));
console.log("Multiplicación:", matematicas.multiplicacion(5, 3));
console.log("División:", matematicas.division(5, 3));

-----------------------------------------------------------------------------------------------

/*j. Función que simula una operación asíncrona con setTimeout y callback*/

function operacionAsincrona(callback) {
  setTimeout(() => {
    const resultado = "Operación completada";
    callback(resultado);
  }, 2000);
}

operacionAsincrona((mensaje) => {
  console.log(mensaje);
});

----------------------------------------------------------------------------------------------------------

/*k. Conversión de una cadena a número con manejo de errores*/

function convertirANumero(cadena) {
  try {
    const numero = Number(cadena);

    if (isNaN(numero)) {
      throw new Error("La conversión no es válida");
    }

    console.log("Número convertido:", numero);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Ejemplos
convertirANumero("123");
convertirANumero("abc");

