import axios from 'axios';

// Configuración de la petición
const API_KEY = 'd53d8979e954a044c6f4cbc118d8c1b3'; // Reemplaza con tu llave real
const CIUDAD = 'Mexico';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CIUDAD}&appid=${API_KEY}&units=metric`;

const obtenerClima = async () => {
    try {
        const respuesta = await axios.get(URL);
        console.log(`--- Clima en ${respuesta.data.name} ---`);
        console.log(`Temperatura: ${respuesta.data.main.temp}°C`);
        console.log(`Humedad: ${respuesta.data.main.humidity}%`);
        console.log(`Descripción: ${respuesta.data.weather[0].description}`);
    } catch (error) {
        // Axios nos da detalles del error en error.response [cite: 21]
        console.error('Error al consultar el clima:', error.response ? error.response.data.message : error.message);
    }
};

obtenerClima();