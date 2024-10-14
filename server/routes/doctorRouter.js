import express from 'express';
const router = express.Router();
import * as doctorController from '../controller/doctorController.js';

router.get('/doctores', doctorController.obtenerTodosLosDoctores);
router.delete('/doctor/:id', doctorController.eliminarDoctor);
router.get('/pacientes', doctorController.obtenerTodosLosPacientes);
router.delete('/paciente/:cedula', doctorController.eliminarPacientes);
router.get('/hospitales', doctorController.obtenerTodosLosHospitales);
router.delete('/hospital/:nit', doctorController.eliminarHospitales);
router.get('/avisos', doctorController.obtenerTodosLosAvisos);


export default  router;
