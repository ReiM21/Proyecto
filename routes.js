var controllerhoteles = require('./controller_hoteles.js');
var controllerAdministrador = require('./controlleradministrador.js');
var controllerreservacion = require('./controllerreservacion.js');


module.exports = function(app) {
  //  RUTAS DEL ESTUDIANTE
  var clasehoteles = new controllerhoteles(); //  Muestra el response segun el request del usuario
  app.post('/api/nuevohotel' , clasehoteles.Guardar); //  Muestra el response segun el request del usuario

 

  var claseadm=new controllerAdministrador();
   app.post('/api/nuevoadmin', claseadm.Guardar);
   app.post('/api/loginadmin', claseadm.Login);

  var clasereservacion = new controllerreservacion(); //  Muestra el response segun el request del usuario
  app.post('/api/nuevareservacion' , clasereservacion.Guardar); //  Muestra el response segun el request del usuario


  app.get('*' , function(req , res) { //  localhost 8080
    res.sendfile('./login.html'); //  Carga unica de la vista
  });
}
