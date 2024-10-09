import mysql from 'mysql2/promise';

class Driver {
    connection = null;

    // Método para crear la conexión
    async conexion() {
        try {
            this.connection = await mysql.createConnection({
                host: 'localhost',
                user: 'campus2023',
                password: 'campus2023',
                port: 3306,
                database: 'hospital'
            });
            console.log('Conexión Establecida');
        } catch (error) {
            console.error('Error al establecer la conexión:', error);
        }
    }

    // Método para cerrar la conexión
    async cerrarConexion() {
        if (this.connection) {
            try {
                await this.connection.end();
                console.log('Conexión cerrada');
            } catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        }
    }

    // Método para ejecutar consultas
    async ejecutarConsulta(query, params = []) {
        if (!this.connection) {
            console.error('No hay conexión a la base de datos.');
            return;
        }

        try {
            const [results] = await this.connection.execute(query, params);
            return results;
        } catch (error) {
            console.error('Error en la consulta:', error);
        }
    }
}

// Ejemplo de uso
(async () => {
    const db = new Driver();
    await db.conexion();

    // Ejemplo de una consulta
    const doctores = await db.ejecutarConsulta('SELECT * FROM doctor');
    console.log(doctores);

    // Cerrar la conexión cuando ya no se necesite
    await db.cerrarConexion();
})();
