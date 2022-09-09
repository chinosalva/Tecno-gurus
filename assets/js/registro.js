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
        advertencias.innerHTML = 'El campo nombre debe contar con nombre y apellido'
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
        advertencias.innerHTML = 'El campo correo debe incluir un @ y el .com'
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
        alert("El campo teléfono es requerido");
        telefono.focus();
        return false;
    }
    if(!buscarTelefono.exec(telefono.value))
    {
        advertencias.innerHTML = 'El campo teléfono debe incluir al menos 10 dígitos'
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
        advertencias.innerHTML = 'El campo contraseña deberá contener mínimo 8 carácteres; máximo 15; una letra minúscula y un dígito así como un carácter especial (p.e: @/&,$,/). No ingrese espacios en blanco.'
        contraseña.focus();
        return false;
    }

    if(expRegContraseña.exec(contraseña.value))
    {
        advertencias.innerHTML = ''
    }
    
    alert('¡Felicidades has ingresado con éxito!')
    return true;
    }
)