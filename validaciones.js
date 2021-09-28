//Variables de las funciones





//Funcion para validar el nombre de usuario

function validar_nombre_usuario(string){
  var username = document.getElementById("nombre_usuario").value
  var regularExpression = /([A-Za-z]$)/g;

  if (regularExpression.test(string)){
    if (string[0] === string[0].toUpperCase()){ // Esto evalua que la primera letra sea Mayúscula
      return true
    }
   }
  return false
}

//Funcion para validar el año de nacimiento

function validar_anoNacimiento_usuario(valor){
  var birthyear = document.getElementById("anoNacimiento_usuario").value
  if (typeof(valor) == "number"){
    if (valor > 0){
      if(valor >= 1900 && valor <= 2022){
        return true
      }
    }
  }
  return false
}

//Funcion para validar la contraseña

function validar_contrasena(string){
  var contrasena = document.getElementById("contrasena_usuario").value
  //var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (contrasena.length >= 6 && contrasena.match(/[A-Z]+/) && contrasena.match(/[a-z]+/) && contrasena.match(/[0-9]+/)){
    return true
  }else{
    return false
  }
  
  /*if(myregex.test(string)){
    alert(valor+" es valido :-) !");
       return true;
  }else{
    alert(valor+" NO es valido!");
    return false;      
   }*/  
}




//Module exports

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;