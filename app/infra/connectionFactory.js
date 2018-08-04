const mysql = require('mysql');

function createDBConnection() {
  if (process.env.NODE_ENV !== 'test') {
    return mysql.createConnection({
      host: 'localhost',
      user: 'renan',
      password: 'renan',
      database: 'casadocodigo_nodejs',
    });
  } if (process.env.NODE_ENV === 'test') {
    return mysql.createConnection({
      host: 'localhost',
      user: 'renan',
      password: 'renan',
      database: 'casadocodigo_nodejs_test',
    });
  }
}

// WRAPPER
module.exports = () => { 
  return createDBConnection;
};
