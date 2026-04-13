import axios from 'axios';

const miToken = "token-falso-123";

const obtenerDatosProtegidos = async (token) => {
    try {
        const respuesta = await axios.get('https://reqres.in/api/users/2', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Acceso concedido. Datos:', respuesta.data);
    } catch (error) {
        console.error('Error de acceso:', error.response.status, error.response.data);
    }
};

obtenerDatosProtegidos(miToken);