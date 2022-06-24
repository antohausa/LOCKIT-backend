import { config } from 'dotenv'
config();

import app from './app.js'

const PORT = process.env.PORT || 5000

app.listen(PORT, '0.0.0.0', () => {
    console.clear()
    console.log(`El servidor está inicializado en el puerto ${PORT}`);
});