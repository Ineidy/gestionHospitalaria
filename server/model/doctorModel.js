import Conexion from '../helper/conexion.js';

class Doctor extends Conexion {
    constructor() {
        super();
    }

    async listaDoctores() {
        let connection;
        try {
            connection = await this.conexion();
            let query = 'SELECT * FROM doctor';
            const [results] = await connection.query(query);
            return { status: 200, message: "Lista de todos los doctores", data: results };
        } catch (error) {
            console.log(error);
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los doctores", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    async eliminar(id) {
        let connection;
        try {
            connection = await this.conexion();
            const [results] = await connection.query('DELETE FROM doctor WHERE id = ? LIMIT 1', [id]);
            return { status: 200, message: `El usuario ${id} fue eliminado exitosamente`, data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrió un error al eliminar el doctor ${id}`, data: error }));
        } finally {
            if (connection) connection.release();
        }
    }


    async agregarDoctor(doctorData, contactoData) {
        let connection;
        try {
            connection = await this.conexion();
            const [resultDoctor] = await connection.query(
                'INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento, estado) VALUES (?, ?, ?, ?, "Aprobado")',
                [doctorData.nombre_completo, doctorData.genero, doctorData.especialidad_fk, doctorData.fecha_nacimiento]
            );
            const doctorId = resultDoctor.insertId; 
            const contactPromises = contactoData.map(contacto => {
                return connection.query(
                    'INSERT INTO comunicacion_doctores (doctor_fk, tipo, contacto) VALUES (?, ?, ?)',
                    [doctorId, contacto.tipo, contacto.contacto]
                );
            });
            await Promise.all(contactPromises);
            return { status: 200, message: "Doctor y contactos agregados exitosamente" };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Error al agregar el doctor", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    
    async listaPacientes() {
        let connection;
        try {
            connection = await this.conexion();
            let query = 'SELECT * FROM paciente';
            const [results] = await connection.query(query);
            return { status: 200, message: "Lista de todos los pacientes", data: results };
        } catch (error) {
            console.log(error);
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los pacientes", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    async eliminarPacientes(cedula) {
        let connection;
        try {
            connection = await this.conexion();
            const [results] = await connection.query('DELETE FROM paciente WHERE cedula = ? LIMIT 1', [cedula]);
            return { status: 200, message: `El paciente ${cedula} fue eliminado exitosamente`, data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrió un error al eliminar el paciente ${cedula}`, data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    async listarHospitales() {
        let connection;
        try {
            connection = await this.conexion();
            let query = 'SELECT * FROM hospital';
            const [results] = await connection.query(query);
            return { status: 200, message: "Lista de todos los hospitales", data: results };
        } catch (error) {
            console.log(error);
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los hospitales", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    async eliminarHospitales(nit) {
        let connection;
        try {
            connection = await this.conexion();
            const [results] = await connection.query('DELETE FROM hospital WHERE nit = ? LIMIT 1', [nit]);
            return { status: 200, message: `El hospital ${nit} fue eliminado exitosamente`, data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrió un error al eliminar el hospital ${nit}`, data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    async listarAvisos() {
        let connection;
        try {
            connection = await this.conexion();
            let query = 'SELECT * FROM aviso';
            const [results] = await connection.query(query);
            return { status: 200, message: "Lista de todos los Avisos", data: results };
        } catch (error) {
            console.log(error);
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los Avisos", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }


    async listarContactos() {
        let connection;
        try {
            connection = await this.conexion();
            let query = 'SELECT * FROM contacto_hospital';
            const [results] = await connection.query(query);
            return { status: 200, message: "Lista de todos los Contactos", data: results };
        } catch (error) {
            console.log(error);
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los Contactos", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

}

export default Doctor;
