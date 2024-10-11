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

    export const obtenerUnDoctorPorId = async (req, res) => {
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

    export const guardarDoctor = async (req, res) => {
        try {
            const { nombre_completo, genero, especialidad, fecha_nacimiento, estado } = req.body;
            console.log(req.body);
    
            const doctor = new Doctor();
            const resultado = await doctor.guardar({
                nombre: nombre_completo,
                genero,
                especialidad,
                fecha_nacimiento,
                estado
            });
            
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json(JSON.parse(error.message));
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
