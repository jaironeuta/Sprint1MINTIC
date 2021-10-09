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


  // Instancia del objeto usuario
  newReg = new Usuario(usuario,anoNacimiento,contrasena);

  // Funcion para agregar los datos al arreglo
  registros.push(newReg);

//  console.log(registros);

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
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
