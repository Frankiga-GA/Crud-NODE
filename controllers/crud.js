const conexion = require('../database/db');

exports.save = (req, res) => {
    const tipo = req.bosy.tipo;
    const marca = req.bosy.marca;
    const color = req.bosy.color;

    console.log(tipo, marca, color)
   conexion.query(`INSERT INTO vehiculos SET ?`, {tipo: tipo, marca: marca, color: color});
 
  }
