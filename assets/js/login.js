const email = document.getElementById('exampleInputEmail')
const contraseña = document.getElementById('exampleInputPassword1')
const formulario = document.getElementById('form')
const advertencias = document.getElementById('advertencia')
const test = document.getElementById('test')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    var expRegContraseña= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 

       //campo email
    if(!email.value)
    {
        alert("El campo correo es requerido");
        email.focus();
        return false;
    }
    if(!expRegCorreo.exec(email.value))
    {
        advertencias.innerHTML = 'El campo correo debe incluir un @ y el .com'
        email.focus();
        return false;
    }
    if(expRegCorreo.exec(email.value))
    {
        advertencias.innerHTML = ''
    }
    //Campo contraseña
    if(!contraseña.value)
    {
        alert("El campo contraseña es requerido");
        contraseña.focus();
        return false;
    }
    if(!expRegContraseña.exec(contraseña.value))
    {
        advertencias.innerHTML = 'El campo contraseña deberá contener mínimo 8 carácteres; máximo 15; una letra minúscula y un dígito así como un carácter especial (p.e: @/&,$,/). No ingrese espacios en blanco.'
        contraseña.focus();
        return false;
    }

    if(expRegContraseña.exec(contraseña.value))
    {
        advertencias.innerHTML = ''
    }
    alert('¡Felicidades has ingresado con éxito!');
    return true;
    }
)