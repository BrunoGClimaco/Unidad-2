// Declaracíon de variables
let targetasDestapadas=0;
let targeta1=null;
let targeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimentos=0;
let aciertos=0;
let temporizador=false;
let timer=30;
let timerInicial=30;
let tiempoRegresivoId=null;

//Crear variables para los sonidos
let sonPerder=new Audio('snd/perder.wav');
let sonGanar=new Audio('snd/ganar.wav');
let sonFin=new Audio('snd/fin.wav');
let sonFondo=new Audio('snd/fondo.wav');

// Variables para HTML
let mostrarMovimientos=document.getElementById('movimientos');
let mostrarAciertos=document.getElementById('aciertos');
let mostrarTiempo=document.getElementById('tiempoRestante');

// Generacion de arreglo aleatorio por medio de función
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros=numeros.sort(() => {return Math.random()-0.5});
console.log(numeros);

//Funcion para el control del tiempo

function contarTiempo(){
    sonFondo.play();
    tiempoRegresivoId=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML=`Tiempo: ${timer} segundos`;
        
        if(timer==0){
            clearInterval(tiempoRegresivoId);
            bloquearTargetas();
            alert("¡AY NO! Perdiste :c");
            sonFin.play();
        }
    },1000);
}

//Funcion para bloquear tarjetas al perder

function bloquearTargetas(){
    for (let i=0;i<=15;i++){
        let targetaBloqueada=document.getElementById(i);
        targetaBloqueada.innerHTML=`<img src="img/${numeros[i]}.png" alt="">`;
        targetaBloqueada.disabled=true;
    }
}


// Funcion principal "Mostrar tarjeta"


function destapar(id){
    if(temporizador==false){
        contarTiempo();
        temporizador=true;
    }

    targetasDestapadas++;
    console.log(targetasDestapadas);

   

    if(targetasDestapadas==1){

        // Mostrar primer numero

        targeta1=document.getElementById(id);
        primerResultado=numeros[id];
        targeta1.innerHTML=`<img src="img/${primerResultado}.png" alt="">`;

        // Deshabilitar primer tarjeta

        targeta1.disabled=true;
    }
    else if(targetasDestapadas==2){

        // Mostrar segundo numero

        targeta2=document.getElementById(id);
        segundoResultado=numeros[id];
        targeta2.innerHTML=`<img src="img/${segundoResultado}.png" alt="">`;

        // Deshabilitar segunda tarjeta

        targeta2.disabled=true;

        //incrementar movimientos

        movimentos++;
        mostrarMovimientos.innerHTML=`Movimientos: ${movimentos}`;

       //comparar si el resultado es correcto
       
        if(primerResultado==segundoResultado){
            
            //Si es correcto reiniciar contador de destapados

            targetasDestapadas=0;

            //Si es correcto incrementar aciertos 
            
            aciertos++;
            mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`;
            sonGanar.play();

            if(aciertos==8){
                sonFin.play();
                alert("¡OH SI! Ganaste c:");
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML=`¡WOW! Tuviste los ${aciertos} aciertos :P`;
                mostrarTiempo.innerHTML=`¡INCREIBLE! Tardaste ${timerInicial-timer} segundos :0`;
                mostrarMovimientos.innerHTML=`¡VAYA! Hiciste ${movimentos} movimientos *.*`;
            }
        }
        else{

            //Si es incorrecto volver a ocultar los valores
            sonPerder.play();
            setTimeout(()=>{
                targeta1.innerHTML=' ';
                targeta2.innerHTML=' ';
                targeta1.disabled=false;
                targeta2.disabled=false;
                targetasDestapadas=0;
            },800);
        }
    }
}