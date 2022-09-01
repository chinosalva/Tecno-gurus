const $formularioRegistro = document.getElementById("formularioRegistro");
const $alertaContrasena = document.getElementById("contra");
const $alertaNombre = document.getElementById("alertaNombre");
const $alertaEmail = document.getElementById("alertaEmail");
const $alertaTelefono = document.getElementById("alertaTelefono");
let $alertaContrasenaIcono = document.getElementById("alertContraIcono");
let $alertaNombreIcono = document.getElementById("alertNombreIcono");
let $alertaEmailIcono = document.getElementById("alertEmailIcono");
let $alertaTelIcono = document.getElementById("alertTelIcono");




/* Eventos */

$formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const $inputEmail = document.getElementById("inputEmail");
   
    
    const $inputPassword = document.getElementById("inputPassword");
   

    const $inputName = document.getElementById("inputName");

    
  
    validarRegistro($inputEmail.value, $inputPassword.value, $inputName.value);
    
})

function validarRegistro(valor1, valor2, valor3){
    /*$alertaContrasena.style.color = "#EBCE07";
    $alertaEmail.style.color = "#EBCE07";
    $alertaNombre.style.color = "#EBCE07";
    $alertaTelefono.style.color = "#EBCE07";*/
   // document.getElementById("error_message").innerHTML="";
    $alertaContrasenaIcono.innerHTML = ' ';
    $alertaEmailIcono.innerHTML = ' ';
    $alertaNombreIcono.innerHTML = ' ';
    
    /* const buscarNombre1 = /([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;/ */
    const buscarNombre2 = /([a-zA-Z]{2,})((\s[a-zA-Z]{2,}){2,})/;
    const buscarEmail = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;
    const buscarPassword = /^[a-zA-z0-9]{10,50}$/; //^(?=\w\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,10}$/;/ //^[a-zA-Z0-9]{8}$/; */
    
    /*console.log(valor1);
    console.log(valor2);*/
    const tamValor2 = valor2.split("").length;
    console.log(tamValor2);

    let validacion01 = buscarEmail.test(valor1);
    let validacion02 = buscarPassword.test(valor2);
    let validacion03 = buscarNombre2.test(valor3);
    
    console.log(validacion01);
    console.log(validacion02);
    console.log(validacion03);
    
    if (validacion01 == true && (validacion02 == true) && validacion03 == true){ 
        console.log("ok");
    }else if (validacion02 == false){

        
        /* /alert ("no ok");/
        /document.getElementById("error_message").innerHTML= '"La contraseña es incorrecta" ';/ */
        $alertaContrasenaIcono.innerHTML = 'Formato inválido <i class="bi bi-exclamation-lg"></i>';
        $alertaContrasenaIcono.style.color = "#010101";
        

       /* $alertaContrasenaIcono.innerHTML =' <i class="bi bi-exclamation-circle-fill"></i>';*/


    }else if (validacion03 == false){
        
        $alertaNombreIcono.innerHTML = 'Formato inválido <i class="bi bi-exclamation-circle-fill"></i>';
        $alertaNombreIcono.style.color = "#010101";
    }else if(validacion01 == false){
       
        $alertaEmailIcono.innerHTML = 'Formato inválido <i class="bi bi-exclamation-circle-fill"></i>';
        $alertaEmailIcono.style.color = "#010101";
    }else {
        alert("Revisa datos");
    }
   
}