var mongoose=require('mongoose');
var crypto=require('crypto');
var Schema=mongoose.Schema;
var re=new Schema({  //Datos requeridos para reservar un  hotel y se guardan en la base de datos
  NOMBRE:String,
  CORREO:String,
  NUMERO:String,
  DIAENTRADA:String,
  HORA:String,
  DIASALIDA:String,
  HORA2:String,
  SALT:String
});

re.methods.setPassword=function(password){
  console.log(password);
  var salt=crypto.randomBytes(16).toString('hex');
  console.log(password);
  var claveysalt=[]
  claveysalt.push(crypto.pbkdf2Sync(password, salt,1000,64,'sha512').toString('hex'));
  claveysalt.push(salt);
  return claveysalt;
};

re.methods.validPassword=function(password,clavebuena,salt){
  console.log(this.CLAVE);
  console.log(password);
  console.log(clavebuena);

  var hash=crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex');
  return clavebuena===hash;
};
module.exports=mongoose.model('reservacion',re);
