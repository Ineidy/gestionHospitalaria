import mysql from 'mysql2/promise';

class Conexion {
    connection = null;

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


(async () => {
    const db = new Conexion();
    await db.conexion();

    const doctores = await db.ejecutarConsulta('SELECT * FROM doctor');
    console.log(doctores);

    await db.cerrarConexion();
})();


export default Conexion;;