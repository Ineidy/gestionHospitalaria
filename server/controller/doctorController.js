    import Doctor from '../model/doctorModel.js';

    export const obtenerTodosLosDoctores = async (req, res) => {
        try {
            let doctor = new Doctor();
            let resultado = await doctor.listaDoctores();
            if (resultado.status === 200) return res.status(200).json(resultado);
        } catch (error) {
            let err = JSON.parse(error.message);
            if (err.status === 500) return res.status(err.status).json(err);
        }
    };


    export const eliminarDoctor = async (req, res) => {
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

    export const obtenerTodosLosPacientes = async (req, res) => {
        try {
            let doctor = new Doctor();
            let resultado = await doctor.listaPacientes();
            if (resultado.status === 200) return res.status(200).json(resultado);
        } catch (error) {
            let err = JSON.parse(error.message);
            if (err.status === 500) return res.status(err.status).json(err);
        }
    };


    export const eliminarPacientes = async (req, res) => {
        try {
            let doctor = new Doctor();
            let { cedula } = req.params;
            let resultado = await doctor.eliminarPacientes(cedula);
            if (resultado.status === 200) return res.status(200).json(resultado);
        } catch (error) {
            let err = JSON.parse(error.message);
            if (err.status === 500) return res.status(err.status).json(err);
        }
    };

    export const obtenerTodosLosHospitales = async (req, res) => {
        try {
            let doctor = new Doctor();
            let resultado = await doctor.listarHospitales();
            if (resultado.status === 200) return res.status(200).json(resultado);
        } catch (error) {
            let err = JSON.parse(error.message);
            if (err.status === 500) return res.status(err.status).json(err);
        }
    };


    export const eliminarHospitales = async (req, res) => {
        try {
            let doctor = new Doctor();
            let { nit } = req.params;
            let resultado = await doctor.eliminarHospitales(nit);
            if (resultado.status === 200) return res.status(200).json(resultado);
        } catch (error) {
            let err = JSON.parse(error.message);
            if (err.status === 500) return res.status(err.status).json(err);
        }
    };

    export const obtenerTodosLosAvisos = async (req, res) => {
        try {
            let doctor = new Doctor();
            let resultado = await doctor.listarAvisos();
            if (resultado.status === 200) return res.status(200).json(resultado);
        } catch (error) {
            let err = JSON.parse(error.message);
            if (err.status === 500) return res.status(err.status).json(err);
        }
    };

