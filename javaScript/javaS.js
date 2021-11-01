var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var lugar = document.getElementById('lugar');
var hora = document.getElementById('hora');
var fecha = document.getElementById('fecha');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    

    var mensajeError = [];

    if(nombre.value === ''){
        alert('ingrese un nombre');
    }
    
    if(email.value === ''){
        alert('ingrese un E-mail');
    }

    if(lugar.value === ''){
        alert('ingrese una ubicaion');
    }
    
    if(hora.value === ''){
        alert('ingrese un horario');
    }

    if(fecha.value === ''){
        alert('ingrese una fecha');
    }
}