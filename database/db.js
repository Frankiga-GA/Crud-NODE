const mysql =  require('mysql');
const conexion = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'crudnode'

});
conexion.connect((error) => {
  if (error){
    console.error(`Error en la conexion OÑOOOOO: ${error}`);
    return;
  }
  console.log(`CONECTADO CORRECTAMENTE AL SERVIDOR OÑOOOOOO`)
});
//
module.exports = conexion;
