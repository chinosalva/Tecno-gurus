const nombre = document.getElementById('exampleInputName')
const email = document.getElementById('exampleInputEmail')
const telefono = document.getElementById('exampleInputTelefono')
const contraseña = document.getElementById('exampleInputPassword1')
const formulario = document.getElementById('form')
const advertencias = document.getElementById('advertencia')
const test = document.getElementById('test')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegContraseña= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/;  
    const buscarTelefono = /\d{10}/;

       //Campo nombre
    if(!nombre.value)
    {
        alert("El campo nombre es requerido");
        nombre.focus();
        return false;
    }
    if (!expRegNombre.exec(nombre.value) || nombre.value.length < 22)
    {
        advertencias.innerHTML = 'El campo nombre debe contar con nombre y apellido.'
        nombre.focus();
        return false;
    }

    if (expRegNombre.exec(nombre.value) || nombre.value.length > 22)
    {
        advertencias.innerHTML = ''
    }


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
       // campo telefono
    if(!telefono.value)
    {
        alert("El campo telefono es requerido");
        telefono.focus();
        return false;
    }
    if(!buscarTelefono.exec(telefono.value))
    {
        advertencias.innerHTML = 'El campo telefono debe incluir al menos 10 digitos.'
        telefono.focus();
        return false;
    }
    if(buscarTelefono.exec(telefono.value))
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
    
    alert('feliciades has ingresado con exito')
    return true;
    }
)