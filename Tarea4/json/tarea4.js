window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    document.onkeydown = teclado;  //función teclado disponible
}

// Variables
guardarNumPantalla="0"; //guardar número en pantalla
iniciarNumPantalla=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
numSinUsar=0; //número oculto o en espera.
operacionEnCurso="no"; //operación en curso; "no" =  sin operación.

// Agregar coma al numero
function numero(numPulsado) { //recoge el número pulsado en el argumento.
    if (guardarNumPantalla=="0" || iniciarNumPantalla==1  ) { // inicializar un número,
        pantalla.innerHTML=numPulsado; //mostrar en pantalla
        guardarNumPantalla=numPulsado; //guardar número
        if (numPulsado==".") { //si escribimos una coma al principio del número
            pantalla.innerHTML="0."; //escribimos 0.
            guardarNumPantalla=numPulsado; //guardar número
            coma=1; //cambiar estado de la coma
        }
    } else { //continuar escribiendo un número
        if (numPulsado=="." && coma==0) { //si escribimos una coma decimal p�r primera vez
            pantalla.innerHTML+=numPulsado;
            guardarNumPantalla+=numPulsado;
            coma=1; //cambiar el estado de la coma
        } else if (numPulsado=="." && coma==1) {

        } else {
            pantalla.innerHTML+=numPulsado;
            guardarNumPantalla+=numPulsado
        }
    }
    iniciarNumPantalla=0 //el número está iniciado y podemos ampliarlo.
}

// Cambiar numeros al pulsar operacion
function operar(operacion) {
    numSinUsar=guardarNumPantalla //ponemos el 1� número en "numero en espera" para poder escribir el segundo.
    operacionEnCurso=operacion; //guardamos tipo de operación.
    iniciarNumPantalla=1; //inicializar pantalla.
}

// Clickar igual para calcular
function igualar() {
    if (operacionEnCurso=="no") { //no hay ninguna operación pendiente.
        pantalla.innerHTML=x;	//mostramos el mismo número
    } else { //con operación pendiente resolvemos
        respuestaOperacion=numSinUsar+operacionEnCurso+guardarNumPantalla; // escribimos la operación en una cadena
        solucion=eval(respuestaOperacion) //convertimos la cadena a código y resolvemos
        pantalla.innerHTML=solucion //mostramos la solución
        guardarNumPantalla=solucion; //guardamos la solución
        operacionEnCurso="no"; //ya no hay operaciones pendientes
        iniciarNumPantalla=1; //se puede reiniciar la pantalla.
    }
}

// Al clickar a la raiz se calcula automaticamente y se muestra
function raizCuadrada() {
    guardarNumPantalla=Math.sqrt(guardarNumPantalla) //resolver raíz cuadrada.
    pantalla.innerHTML=guardarNumPantalla; //mostrar en pantalla resultado
    operacionEnCurso="no"; //quitar operaciones pendientes.
    iniciarNumPantalla=1; //se puede reiniciar la pantalla
}

// Caluclo porcentaje
function porcentaje() {
    guardarNumPantalla=guardarNumPantalla/100 //dividir por 100 el número
    pantalla.innerHTML=guardarNumPantalla; //mostrar en pantalla
    igualar() //resolver y mostrar operaciones pendientes
    iniciarNumPantalla=1 //reiniciar la pantalla
}

// Funcion para transformar el numero negativo
function numNegativo() { 
    numeroNegativo=Number(guardarNumPantalla); //convertir en número
    numeroNegativo=-numeroNegativo; //cambiar de signo
    guardarNumPantalla=String(numeroNegativo); //volver a convertir a cadena
    pantalla.innerHTML=guardarNumPantalla; //mostrar en pantalla.
}

// Funcion para calcular un numero inverso
function numInverso() {
    numeroInverso=Number(guardarNumPantalla);
    numeroInverso=(1/numeroInverso);
    guardarNumPantalla=String(numeroInverso);		 
    pantalla.innerHTML=guardarNumPantalla;
    iniciarNumPantalla=1; //reiniciar pantalla al pulsar otro número.
}

// Funcion para borrar una vez atras
function retroceso(){
    cifras=guardarNumPantalla.length; //hayar número de caracteres en pantalla
    borrar=guardarNumPantalla.substr(cifras-1,cifras) //info del último caracter
    guardarNumPantalla=guardarNumPantalla.substr(0,cifras-1) //quitar el ultimo caracter
    if (guardarNumPantalla=="") {
        guardarNumPantalla="0";
    } //si ya no quedan caracteres, pondremos el 0

    if (borrar==".") {
        coma=0;
    } //Si hemos quitado la coma, se permite escribirla de nuevo.

    pantalla.innerHTML=guardarNumPantalla; //mostrar resultado en pantalla
}

// Funcion para borrar el numero en pantalla
function borradoParcial() {
    pantalla.innerHTML=0; //Borrado de pantalla;
    guardarNumPantalla=0; //Borrado indicador número pantalla.
    coma=0; //reiniciamos también la coma
}

// Funcion para limpiar calculadora
function borradoTotal() {
    pantalla.innerHTML=0; //poner pantalla a 0
    guardarNumPantalla="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    numSinUsar=0 //indicador de número oculto a 0;
    operacionEnCurso="no" //borrar operación en curso.
}

function teclado (elEvento) { 
    evento = elEvento || window.event;
    k=evento.keyCode; //número de código de la tecla.
    //teclas númericas del teclado alfamunérico
    if (k>47 && k<58) { 
       p=k-48; //buscar número a mostrar.
       p=String(p) //convertir a cadena para poder añádir en pantalla.
       numero(p); //enviar para mostrar en pantalla
    }	

    //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
    if (k>95 && k<106) {
       p=k-96;
       p=String(p);
       numero(p);
    }

    //teclas de coma decimal
    if (k==110 || k==190) {
        numero(".")
    } 

    //tecla multiplicación
    if (k==106) { 
        operar('*')
    }

    //tecla suma
    if (k==107) {
        operar('+')
    } 

    //tecla resta
    if (k==109) {
        operar('-')
    } 

    //tecla división
    if (k==111) {
        operar('/')
    } 

    //Tecla igual: intro o barra espaciadora
    if (k==32 || k==13) {
        igualar()
    } 

    //Tecla borrado total: "supr"
    if (k==46) {
        borradoTotal()
    } 

    //Retroceso en escritura : tecla retroceso.
    if (k==8) {
        retroceder()
    } 

    //Tecla borrado parcial: tecla de inicio.
    if (k==36) {
        borradoParcial()
    } 
}