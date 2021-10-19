<<<<<<< HEAD

let registros = [];
function agregarRegistro(){
// constructor para crear los objetos 
  function Usuario(nombreUsuario,anoNacimiento,contrasenaUsuario){
    this.usuario = nombreUsuario;
    this.anoNacimiento = anoNacimiento;
    this.contrasena = contrasenaUsuario;

  }
=======
let registros = [];
function agregarRegistro(){
// constructor para crear los objetos 
  function Usuario(nombreUsuario,anoNacimiento,contrasenaUsuario){
    this.usuario = nombreUsuario;
    this.anoNacimiento = anoNacimiento;
    this.contrasena = contrasenaUsuario;

  }

  // Variables ara capturar los datos del formulario
  var usuario = document.getElementById("nombre_usuario").value;
  var anoNacimiento = document.getElementById("anoNacimiento_usuario").value;
  var contrasena = document.getElementById("contrasena_usuario").value;
>>>>>>> ed9b7aa7bf66709e5d009ca0dcab47b02867de79

  // Variables ara capturar los datos del formulario
  var usuario = document.getElementById("nombre_usuario").value;
  var anoNacimiento = document.getElementById("anoNacimiento_usuario").value;
  var contrasena = document.getElementById("contrasena_usuario").value;

<<<<<<< HEAD

  // Instancia del objeto usuario
  newReg = new Usuario(usuario,anoNacimiento,contrasena);

  // Funcion para agregar los datos al arreglo
  registros.push(newReg);

//  console.log(registros);

=======
  // Instancia del objeto usuario
  newReg = new Usuario(usuario,anoNacimiento,contrasena);

  // Funcion para agregar los datos al arreglo
  registros.push(newReg);

//  console.log(registros);

>>>>>>> ed9b7aa7bf66709e5d009ca0dcab47b02867de79
}



function EncontrarUsuarioPorEdad(arreglo) { 
      usuarioMayor="";      
      var edadMayor=2023;     
      arreglo.forEach(element => {  
          if(element.anoNacimiento <= edadMayor){        
              edadMayor = element.anoNacimiento;
              usuarioMayor =  element;
          }
      });
     
      return usuarioMayor;
  }

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
<<<<<<< HEAD
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
=======
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
>>>>>>> ed9b7aa7bf66709e5d009ca0dcab47b02867de79
