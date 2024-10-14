import express from 'express';
const router = express.Router();
import * as doctorController from '../controller/doctorController.js';

router.get('/doctores', doctorController.obtenerTodosLosDoctores);
router.delete('/doctor/:id', doctorController.eliminarDoctor);

export default  router;
