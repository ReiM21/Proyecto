class ADMINISTRADOR {

  // El constructor siempre debe ser la primera funcion justo debajo de pelicula

constructor(_id,  //  El ID es otorgado por MongoDB
  NOMBRE,
  EMAIL,
  CLAVE,
  IMAGEN,
  SALT,
) {  // Atributos de la clase
this._id=_id;
this.NOMBRE =NOMBRE;
this.EMAIL=EMAIL;
this.CLAVE=CLAVE;
this.IMAGEN=IMAGEN;
}
Guardar() { //  Guarda los valores de cada atributo
var objetoaenviar = this; //  Guarda la clase
// Return a new promise.
return new Promise(function(resolve, reject) {  //  Promesa
// Do the usual XHR stuff

try {

       var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevoadmin');  //  Abre el link con al atributo nueva pelicula
xhr.setRequestHeader('Content-Type', 'application/json'); //  Formato JSON
xhr.onload = function() {
if (xhr.status === 200) {
resolve(JSON.parse(xhr.responseText));
}
else
{
   reject(xhr);
}
};
xhr.send(JSON.stringify(objetoaenviar));  //  Convierte la promesa en tipo texto



}
catch(err) {
reject(err.message);

}
});
}

login() { //  Las mismas cosas que guardar pero cambia el link al atributo modificar

var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

try {

       var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/loginadmin');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
resolve(JSON.parse(xhr.responseText));
}
else
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
$("#imagen").change(function(){  //  Obtiene la imagen y la cambia a texto
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
        
