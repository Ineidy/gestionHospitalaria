import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
import doctorRouter from './routes/doctorRouter.js';

app.use(express.json());

app.use('/api', doctorRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
