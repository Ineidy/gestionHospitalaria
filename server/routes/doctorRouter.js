import express from 'express';
const router = express.Router();
import * as doctorController from '../controller/doctorController.js';

router.get('/doctores', doctorController.obtenerTodosLosDoctores);
router.delete('/doctor/:id', doctorController.eliminarDoctor);
router.get('/pacientes', doctorController.obtenerTodosLosPacientes);
router.delete('/paciente/:cedula', doctorController.eliminarPacientes);

export default  router;
