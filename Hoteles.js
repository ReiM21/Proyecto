var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var hoteles = new Schema({
	//Datos que se guardan en la base de datos
  NOMBRE_HOTEL: String,
  LUGAR: String,
  CATEGORIA: String,
  ESTRELLAS: Number,
  PRECIOXNOCHE: Number,
  IMAGEN_HOTEL: String,
});


module.exports = mongoose.model('Hoteles' , hoteles);
