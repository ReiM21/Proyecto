class reservacion {
  constructor(_id,
  NOMBRE,
  CORREO,
  NUMERO,
  DIAENTRADA,
  HORA,
  DIASALIDA,
  HORA2,
  IMAGEN_P,
){
 
  this._id=_id;
  this.NOMBRE =NOMBRE;
  this.CORREO=CORREO;
  this.NUMERO=NUMERO;
  this.DIAENTRADA=DIAENTRADA;
  this.HORA=HORA;
  this.DIASALIDA=DIASALIDA;
  this.HORA2=HORA2;
  this.IMAGEN_P=IMAGEN_P;
 
}

Guardar() { //  Guarda los valores de cada atributo
var objetoaenviar = this; //  Guarda la clase
return new Promise(function(resolve, reject) {  //  Promesa

try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/nuevareservacion');  //  Abre el link con al atributo nueva pelicula
    xhr.setRequestHeader('Content-Type', 'application/json'); //  Formato JSON
    xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else
            {
               reject(xhr);
            }
    };  //  XHR ONLOAD
    xhr.send(JSON.stringify(objetoaenviar));  //  Convierte la promesa en tipo texto
  } //  FIN DEL TRY
    catch(err) {
      reject(err.message);
    }
  }); //  RETURN, PROMISE
} //  Fin de guardar

Modificar() { //  Las mismas cosas que guardar pero cambia el link al atributo modificar

  var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/modificahotel');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
       resolve(JSON.parse(xhr.responseText));
    } else
       {
          reject(xhr);
       }
};
xhr.send(JSON.stringify(objetoaenviar));

}
  catch(err) {
    reject(err.message);
  }
  });
}


    }
          let imagenenbase64 = "";
      $("#imagen_hotel").change(function(){  //  Obtiene la imagen y la cambia a texto
        readURL(this);
      });

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

          imagenenbase64=e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
      }
    }


    function Guardar_reservacion() //  Despues de presionar el boton, se viene aqui donde obtiene los valores
        {
            var registroinstanciado = new reservacion(0, //  Un objeto con todos los atributos que le agrega el usuario
            document.getElementById("nombre").value,
             document.getElementById("correo").value,
            document.getElementById("num").value,
           document.getElementById("de").value,
            document.getElementById("hora").value,
            document.getElementById("ds").value,
           document.getElementById("hora2").value,
          imagenenbase64,
          "",
            );

            registroinstanciado.Guardar().then(function(response) {
    console.log("Exito", response);
        alert("Guardado con exito");

    }, function(error) {
    console.error("Failed!", error);
         alert("Error " + error);

    });
}







  