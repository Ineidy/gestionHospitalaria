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

}

export default Doctor;
