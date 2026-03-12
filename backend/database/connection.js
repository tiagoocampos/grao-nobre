import mysql from 'mysql2';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kingzena555*',
    database: 'grao_nobre'
})

export default connection;