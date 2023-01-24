
var letters = ["e", "i", "a", "o", "u"];
var words = ["enter", "imes", "ai", "ober", "ufat"];

function sololetras(e){
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghijklmnopqrstuvwxyz"

  especiales = [8,13,32];
  tecla_especial = false;
      for (var i in especiales){
        if (key == especiales[i]){
          tecla_especial = true;
          break;
        }
      }

      if (letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("Ingresar solo letras minúsculas y sin acentos...!");
        return false;
      }
   
}  

function encriptar() {
    var text = document.getElementById("textoEncriptar").value.toLowerCase();
    var result = text;
            if (text === "") {
            alert("No se ingresó texto...");
        } 

            else {
            
        for (var i = 0; i < letters.length; i++) {
        result = result.split(letters[i]).join(words[i]);
    }
    
    document.getElementById("textoDesencriptado").innerHTML = result;
    document.getElementById("textoDesencriptado").style.display = "block";
    document.getElementById('nene').style.display = "none";
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none"; 
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

        }
    

}


function desencriptar() {
    var text = document.getElementById("textoEncriptar").value.toLowerCase();
    var result = text;
          if (text === "") {
          alert("No se ingresó texto...");
          }

          else{  
          for (var i = 0; i < letters.length; i++) {
          result = result.split(words[i]).join(letters[i]);
          }
    document.getElementById("textoDesencriptado").innerHTML = result;
    document.getElementById("textoEncriptar").value = "";
          }

}

function copiar() {
    var textoresultado = document.querySelector("#textoDesencriptado");
    textoresultado.select();
    document.execCommand("copy");
    document.getElementById("textoEncriptar").value = "";
    alert("Texto copiado...");
}
  



