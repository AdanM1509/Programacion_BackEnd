const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', async (req, res) => {
    try {

        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;

        res.render('index', { quote, character });

    } catch (error) {
        console.log("La API principal falló, usando respaldo...");

        try {
        
            const backup = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
            
            res.render('index', {
                quote: backup.data[0].quote,
                character: backup.data[0].author
            });
        } catch (backupError) {
        
            res.render('index', {
                quote: "Someone's shadow says it all and is connected to darkness. The bigger the shadow, the stronger that person will become.",
                character: "Jin-Woo Sung"
            });
        }
    }
});


app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:3000`);
});