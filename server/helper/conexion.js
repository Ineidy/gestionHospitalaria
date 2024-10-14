import mysql from 'mysql2/promise';

class Conexion {
    pool = null;
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'campus2023',
            port: 3306,
            database: 'hospital',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }
    async conexion() {
        try {
            const connection = await this.pool.getConnection(); 
            console.log('Conexión establecida');
            return connection;
        } catch (error) {
            console.error('Error al establecer la conexión:', error);
            throw error;
        }
    }
    async cerrarConexion() {
        if (this.pool) {
            try {
                await this.pool.end();
                console.log('Conexión cerrada');
            } catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        }
    }
}
export default Conexion;
