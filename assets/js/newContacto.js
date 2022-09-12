const nombre = document.getElementById('exampleInputName')
const email = document.getElementById('exampleInputEmail')
const experiencia = document.getElementById('exampleInputExperiencia')
const formulario = document.getElementById('form')
const advertencias = document.getElementById('advertencia')
const test = document.getElementById('test')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    var expRegNombre= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/;  
    const buscarExperiencia = /\w{30}/;

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
       // campo asunto
    if(!experiencia.value)
    {
        alert("El campo telefono es requerido");
        experiencia.focus();
        return false;
    }
    if(!buscarExperiencia.exec(experiencia.value))
    {
        advertencias.innerHTML = 'El campo experiencia debe contener al menos 30 caracteres.'
        experiencia.focus();
        return false;
    }
    if(buscarExperiencia.exec(experiencia.value))
    {
        advertencias.innerHTML = ''
    }

    return true;
    }
)