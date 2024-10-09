import mysql from 'mysql2/promise';

class driver{
    connection;
    async conexion(){
        try {
            this.connection = await mysql.createConnection({
                host     : 'localhost',
                user     : 'campus2023',
                password : 'campus2023',
                port: 3306,
                database : 'hospital'
            })
            console.log('Conexion Establecida');
            
        } catch (error) {
            console.log(error)
        }
    }
}

let obj = new driver()
obj.conexion()