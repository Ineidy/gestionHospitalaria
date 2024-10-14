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
