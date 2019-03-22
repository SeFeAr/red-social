var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema
var adm = new Schema({
	NOMBRE: String,
	CLAVE: String,
	EMAIL: String,
	IMAGEN: String,

	SALT: String
});

adm.methods.setPassword = function(password){
	console.log(password);
	//creating a unique salt for a particular user
	var salt = crypto.randomBytes(16).toString('hex');

	console.log(password);
	var claveysalt = []
//devolver el password encryptado

	claveysalt.push(crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')); // clave encriptada con el salt
	claveysalt.push(salt);

	return claveysalt;//devolvemos el vector
};
//pasar el password
adm.methods.validPassword = function(password,clavebuena,salt){
	console.log(password);
	console.log(clavebuena);

//encryptar con la clave del usuario
	var hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return clavebuena ===hash;
};
module.exports = mongoose.model('Administrador', adm);