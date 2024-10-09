// Importar la conexión a la base de datos
const Conexion = require('../helper/conexion');

class Doctor extends Conexion {
    constructor() {
        super();
    }

    // Obtener la lista de todos los doctores
    async listaDoctores() {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query('SELECT * from doctor');
            return { status: 200, message: "Lista de todos los doctores", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener todos los doctores", data: error }));
        }
    }

    // Obtener información de un doctor por ID
    async informacionDoctor(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query('SELECT * FROM doctor WHERE id = ?', [id]);
            return { status: 200, message: "Información del doctor", data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: "Ocurrió un error al obtener la información del doctor", data: error }));
        }
    }

    // Guardar un nuevo doctor
    async guardar({ nombre, genero, especialidad, fecha_nacimiento, estado }) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query(
                'INSERT INTO doctor (nombre_completo, genero, especialidad_fk, fecha_nacimiento, estado) VALUES (?, ?, ?, ?, ?)',
                [nombre, genero, especialidad, fecha_nacimiento, estado]
            );
            return { status: 201, message: `El usuario ${nombre} fue guardado exitosamente`, data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrió un error al guardar la información del doctor ${nombre}`, data: error }));
        }
    }

    // Eliminar un doctor por ID
    async eliminar(id) {
        try {
            let driver = await this.conexion;
            const [results] = await driver.data.query('DELETE FROM doctor WHERE id = ? LIMIT 1', [id]);
            return { status: 200, message: `El usuario ${id} fue eliminado exitosamente`, data: results };
        } catch (error) {
            throw new Error(JSON.stringify({ status: 500, message: `Ocurrió un error al eliminar el doctor ${id}`, data: error }));
        }
    }
}

module.exports = Doctor;
