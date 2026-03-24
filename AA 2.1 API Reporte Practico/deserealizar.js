const jsonString = '{"nombre":"Taco de pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';

const objetoDeserializado = JSON.parse(jsonString);

console.log(objetoDeserializado);