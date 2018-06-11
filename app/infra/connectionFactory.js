const mysql = require('mysql')

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
        
    })
}

//WRAPPER
module.exports = function (){
    return createDBConnection;

}