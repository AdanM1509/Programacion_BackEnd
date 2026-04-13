import axios from 'axios';

const login = async () => {
    try {
        const respuesta = await axios.post('https://reqres.in/api/login', {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        });
        console.log('Token recibido:', respuesta.data.token);
        return respuesta.data.token;
    } catch (error) {
        console.error('Error en login:', error.response.data);
    }
};

login();