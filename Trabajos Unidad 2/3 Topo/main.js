/*let temporizador=false;
let timer=30;
let timerInicial=30;
let contador=0;

let btnTopo=document.getElementById("topo");
let mostrarTiempo=document.getElementById("tiempo");
let mostrarAciertos=document.getElementById("acierto");
let imgFinal=document.getElementById("fin");

function contarTiempo(){
    const tiempoRegresivo=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML=`Tiempo: ${timer} segundos`;
        
        if(timer==0){
            alert("¡¡SE ACABO EL TIEMPO!!");
            clearInterval(tiempoRegresivo);

            btnTopo.innerHTML=`<img src="img/topo2.png" alt=""`;
            imgFinal.innerHTML=`<img src="img/topo2.png" style="width: 10%">`
            mostrarTiempo.innerHTML=`Tardaste ${timerInicial-timer} segundos`;
            mostrarAciertos.innerHTML=`¡Vaya! Lo golpeaste ${contador} veces :0`;
        }
    },10000);
}

function bloqueo(){
    for(let i=0;i<=15;i++){

        btnTopo.disabled=true;
    }
}

btnTopo.addEventListener('click', function(){
    contador++;
    mostrarAciertos.innerHTML=`Aciertos: ${contador}`;
    contarTiempo();
    topo();
});

function topo(){
    let x=window.innerWidth-btnTopo.offsetWidth;
    let y=window.innerHeight-btnTopo.offsetHeight;

    let aleatorioX=Math.floor(Math.random()*x);
    let aleatorioY=Math.floor(Math.random()*y);

    btnTopo.style.position='absolute';
    btnTopo.style.top=aleatorioY+'px';
    btnTopo.style.left=aleatorioX+'px';
}*/

const cuadro = document.querySelectorAll(".cuadro");
const tiempoFaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoActual = tiempoFaltante.textContent;
let tiempoTotal=50;

let canFondo=new Audio('snd/fondo.wav');

function cuadroAzar() {
    canFondo.play();
  cuadro.forEach((nombreDeClase) => {
    nombreDeClase.classList.remove("topo");
  });
  let posicionAlAzar = cuadro[Math.floor(Math.random() * 12)];
  posicionAlAzar.classList.add("topo");

  posicionTopo = posicionAlAzar.id;
}

cuadro.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posicionTopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posicionTopo = null;
    }
  });
});

function moverTopo() {
  tiempoTopo = setInterval(cuadroAzar, 1000);
}

moverTopo();
function cuentaRegresiva() {
  tiempoActual--;
  tiempoFaltante.textContent = tiempoActual;

  if (tiempoActual === 0) {
    clearInterval(idTiempo);
    clearInterval(tiempoTopo);
    alert("¡¡¡SE ACABO EL TIEMPO!!!");
    puntaje.innerHTML=`Le pegaste a ${resultado} topos`;
  }
}

let idTiempo = setInterval(cuentaRegresiva, 500);
