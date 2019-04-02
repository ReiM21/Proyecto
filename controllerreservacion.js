var Item = require('./reservacion');
module.exports = class hotel { //Aqui se declaran todos los eventos que pueden realizarse con los datos
   constructor( ) {}
Guardar(req,res) { //Evento guardar
  Item.create(
      {
   NOMBRE: req.body.NOMBRE,
    CORREO: req.body.CORREO,
    NUMERO: req.body.NUMERO,
    DIAENTRADA: req.body.DIAENTRADA,
    HORA: req.body.HORA,
    DIASALIDA: req.body.DIASALIDA,
    HORA2: req.body.HORA2,
    IMAGEN_P: req.body.IMAGEN_P,
            },
            //  Promesa
      function(err, item) {
        if (err)
            {
          res.send(err);}

          else{
            Item.find(function(err, item) {
          if (err)
            res.send(err)
          res.json(item);
        });
        }
      }); 
}

 Modificar(req,res) { //Evento modificar
		Item.update( {_id : req.body._id},
					{$set:
			{
    NOMBRE: req.body.NOMBRE,
    CORREO: req.body.CORREO,
    NUMERO: req.body.NUMERO,
    DIAENTRADA: req.body.DIAENTRADA,
    HORA: req.body.HORA,
    DIASALIDA: req.body.DIASALIDA,
    HORA2: req.body.HORA2,
    IMAGEN_P: req.body.IMAGEN_P,
            }},

			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtiene y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}
}
