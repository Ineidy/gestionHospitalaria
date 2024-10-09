const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Rutas CRUD para doctores
router.get('/doctores', doctorController.obtenerTodosLosDoctores);
router.get('/doctor/:id', doctorController.obtenerUnDoctorPorId);
router.post('/doctor', doctorController.guardarDoctor);
router.delete('/doctor/:id', doctorController.eliminarDoctor);

module.exports = router;
