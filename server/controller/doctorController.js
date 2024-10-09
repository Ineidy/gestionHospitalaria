// Importar los modelos necesarios
const Doctor = require('../model/doctorModel');

// Obtener todos los doctores
exports.obtenerTodosLosDoctores = async (req, res) => {
    try {
        let doctor = new Doctor();
        let resultado = await doctor.listaDoctores();
        if (resultado.status === 200) return res.status(200).json(resultado);
    } catch (error) {
        let err = JSON.parse(error.message);
        if (err.status === 500) return res.status(err.status).json(err);
    }
};

// Obtener un doctor por su ID
exports.obtenerUnDoctorPorId = async (req, res) => {
    try {
        let doctor = new Doctor();
        let { id } = req.params;
        let resultado = await doctor.informacionDoctor(id);
        if (resultado.status === 200) return res.status(200).json(resultado);
    } catch (error) {
        let err = JSON.parse(error.message);
        if (err.status === 500) return res.status(err.status).json(err);
    }
};

// Guardar un nuevo doctor
exports.guardarDoctor = async (req, res) => {
    try {
        let doctor = new Doctor();
        let resultado = await doctor.guardar(req.body);
        if (resultado.status === 201) return res.status(201).json(resultado);
    } catch (error) {
        let err = JSON.parse(error.message);
        if (err.status === 500) return res.status(err.status).json(err);
    }
};

// Eliminar un doctor por su ID
exports.eliminarDoctor = async (req, res) => {
    try {
        let doctor = new Doctor();
        let { id } = req.params;
        let resultado = await doctor.eliminar(id);
        if (resultado.status === 200) return res.status(200).json(resultado);
    } catch (error) {
        let err = JSON.parse(error.message);
        if (err.status === 500) return res.status(err.status).json(err);
    }
};
