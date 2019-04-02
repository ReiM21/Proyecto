var Item = require('./Hoteles');
module.exports = class hotel {  //Aqui se declaran todos los eventos que pueden realizarse con los datos
   constructor( ) {}
Guardar(req,res) {  //Evento guardar
  Item.create(
      {
   NOMBRE_HOTEL: req.body.NOMBRE_HOTEL,
    LUGAR: req.body.LUGAR,
    CATEGORIA: req.body.CATEGORIA,
    ESTRELLAS: req.body.ESTRELLAS,
    PRECIOXNOCHE: req.body.SECCION_ESTUDIANTE,
    IMAGEN_HOTEL: req.body.IMAGEN_HOTEL,
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

 Modificar(req,res) {  //Evento modificar
		Item.update( {_id : req.body._id},
					{$set:
			{
        NOMBRE_HOTEL: req.body.NOMBRE_HOTEL,
         LUGAR: req.body.LUGARE,
         CATEGORIA: req.body.CATEGORIA,
         ESTRELLAS: req.body.ESTRELLAS,
         PRECIOXNOCHE: req.body.PRECIOXNOCHE,
         IMAGEN_HOTEL: req.body.IMAGEN_HOTEL,
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
