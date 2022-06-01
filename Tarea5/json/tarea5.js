window.onload = function() { //tras cargar la página ...
    visor1=document.getElementById("visor"); //referencia al visor
    tituloImagen=document.getElementById("titulo"); //referencia al pie de foto
}

function imagen(numImagen) { //cambiar la imagen
    rutaImagen="/UD31/Tarea5/img/foto"+numImagen+".jpg"; //ruta de la nueva imagen
    document.images["fotoVisor"].src=rutaImagen; //cambiar imagen
    t=document.images["fotos"+numImagen].alt; //texto de pie de foto
    tituloImagen.innerHTML=t; //cambiar pie de foto
}