const express = require('express');
const app = express();
const doctorRouter = require('./routes/doctorRouter');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', doctorRouter);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
