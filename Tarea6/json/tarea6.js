// Funcion para coger la hora actual
function actual() {
    fecha=new Date();
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual
    if (hora<10) { //cuando hora tiene dos cifras para la hora
        hora="0"+hora;
    }
    
    if (minuto<10) { //cuando minuto tiene dos cifras para el minuto
        minuto="0"+minuto;
    }

    if (segundo<10) { //cuando segundos tiene dos cifras para el segundo
        segundo="0"+segundo;
    }
    //Imprimimos el reloj
    reloj = hora+" : "+minuto+" : "+segundo;	
    return reloj;
}

// Funcion para avanzar el tiempo
function actualizar() {
    horaActual=actual(); //Usamos la funcion actual para coger la hora en la que estamos
    reloj=document.getElementById("reloj"); //usamos el id='reloj' del html
    reloj.innerHTML=horaActual; //incluir hora en elemento
}
setInterval(actualizar,1000); //iniciar contador