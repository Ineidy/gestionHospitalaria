import express from 'express';
const router = express.Router();
import * as doctorController from '../controller/doctorController.js';

router.post('/doctor', doctorController.agregarDoctor)
router.get('/doctores', doctorController.obtenerTodosLosDoctores);
router.delete('/doctor/:id', doctorController.eliminarDoctor);
router.get('/pacientes', doctorController.obtenerTodosLosPacientes);
router.delete('/paciente/:cedula', doctorController.eliminarPacientes);
router.get('/hospitales', doctorController.obtenerTodosLosHospitales);
router.delete('/hospital/:nit', doctorController.eliminarHospitales);
router.get('/avisos', doctorController.obtenerTodosLosAvisos);
router.get('/contactos', doctorController.obtenerTodosLosContactos);


export default  router;
