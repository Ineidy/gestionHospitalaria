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
    async informacionDoctor(id) {
        let connection;
        try {
            connection = await this.conexion();
            const [results] = await connection.query('SELECT * FROM doctor WHERE id = ?', [id]);
            return { status: 200, message: "Información del doctor", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener la información del doctor", data: error }));
        } finally {
            if (connection) connection.release();
        }
    }

    async guardar({ nombre, genero, especialidad, fecha_nacimiento, estado }) {
        let connection;
        try {
            connection = await this.conexion();
            const [results] = await connection.query(
                'INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento, estado) VALUES (?, ?, ?, ?, ?)',
                [nombre, genero, especialidad, fecha_nacimiento, estado]
            );
            return { status: 201, message: `El usuario ${nombre} fue guardado exitosamente`, data: results  };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrió un error al guardar la información del doctor ${nombre}`, data: error }));
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
}

export default Doctor;
