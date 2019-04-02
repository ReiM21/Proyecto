var Item = require('./login');
    let administradorinstanciado = new Item();
module.exports = class _Administrador {  //Aqui se declaran todos los eventos que pueden realizarse con los datos
   constructor( ) {}
Guardar(req,res) { //Evento guardar
    var claveysaltlocal = administradorinstanciado.setPassword(req.body.CLAVE);
    console.log(claveysaltlocal[0]);
   console.log(req.body.CLAVE);
   console.log(req.body);
  Item.create(
      {
   NOMBRE: req.body.NOMBRE,
       EMAIL: req.body.EMAIL,
    CLAVE: claveysaltlocal[0],
    IMAGEN: req.body.IMAGEN,
             SALT: claveysaltlocal[1]
            },
      function(err, item) {
        if (err)
                    {
          res.send(err);}
          else{    
            Item.find(function(err, item) {
          if (err)
            res.send(err)

          for(var ele in item)
          {
            item[ele].SALT= "Que paso amiguito?";
            item[ele].CLAVE = "ayuwuki";
          }
          res.json(item);
        });}}); }

    Login(req,res) {  //Evento login
      console.log(req.body);
    	Item.find({EMAIL:req.body.EMAIL}, function(err, item) { //Validacion de datos referiendose a account
       console.log("encontro el email");
       console.log(item);
			if (err){
				res.send(err)}
        else{console.log(item[0].CLAVE);
            if(administradorinstanciado.validPassword(req.body.CLAVE,item[0].CLAVE,item[0].SALT))
                {
                         console.log("entro a validacion de clave");
                    item[0].SALT="NO F..ING WAY";
					res.json(item); // devuelve todas las Personas en JSON
                }
            else
                {
                    res.status(400).send({
                    message : "Datos incorrectos"
                });
                }}});}}
