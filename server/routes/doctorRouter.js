import express from 'express';
const router = express.Router();
import * as doctorController from '../controller/doctorController.js';

router.get('/doctores', doctorController.obtenerTodosLosDoctores);
router.get('/doctor/:id', doctorController.obtenerUnDoctorPorId);
router.post('/doctor', doctorController.guardarDoctor);
router.delete('/doctor/:id', doctorController.eliminarDoctor);

export default  router;
