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
        advertencias.innerHTML = 'El campo correo debe incluir una @ y el .com'
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
        advertencias.innerHTML = 'El campo contraseña debera contener, Minimo 8 caracteres, Maximo 15, Al menos una letra minuscula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial'
        contraseña.focus();
        return false;
    }

    if(expRegContraseña.exec(contraseña.value))
    {
        advertencias.innerHTML = ''
    }
    
    
    return true;
    }
)