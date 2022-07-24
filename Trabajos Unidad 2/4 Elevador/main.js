var elevador = document.getElementById('e');
var b1= document.getElementById('btn1');
var b2= document.getElementById('btn2');
var b3= document.getElementById('btn3');
var capl=0;
var capA=0;
var capS=0;
var perder=false;
var t;
var pos=0; 
var val;
var ps1=0, ps2=0, ps3=0, ps4=0, ps5=0;
var puntaje=0;

b1.addEventListener('click', function(){
    if(perder==false){
        capl=5;
        capS = capl-capA;
        document.getElementById('cap').textContent=capS;
        jugar();
    }
})
b2.addEventListener('click', function(){
    if(perder==false){
        capl=8;
        capS = capl-capA;
        document.getElementById('cap').textContent=capS;
        jugar();
    }
})
b3.addEventListener('click', function(){
    if(perder==false){
        capl=12;
        capS = capl-capA;
        document.getElementById('cap').textContent=capS;
        jugar();
    }
})

document.onkeydown = function(e) {        
    if(perder==false){
        t = e.keyCode;
    if (t==87) {
        if(pos<6){
            pos++;
            mov(pos);
        }
    }
    if (t == 83) {
        if(pos>-1){
            pos--;
            mov(pos);
        }
    }
    if (t == 69) {
        inter();
        personasp5(ps5);
        personasp4(ps4);
        personasp3(ps3);
        personasp2(ps2);
        personasp1(ps1);
    }else{
        return false;
    }
    }
}

function jugar(){
    val=setInterval(() => {
        aux=Math.floor(Math.random() * (6 - 0) + 0);
        switch(aux){
            case 1:
                ps1++;
                document.getElementById('p1').textContent=ps1;
                personasp1(ps1);
                if(ps1==5){
                    alert("¡¡¡Perdiste!!!\nTu puntaje fue de: "+puntaje);
                    clearInterval(val);
                    perder=true;
                }
                break;
            case 2:
                ps2++;
                document.getElementById('p2').textContent=ps2;
                personasp2(ps2);
                if(ps2==5){
                    alert("¡¡¡Perdiste!!!\nTu puntaje fue de: "+puntaje);
                    clearInterval(val);
                    perder=true;
                }
                break;
            case 3:
                ps3++;
                document.getElementById('p3').textContent=ps3;
                personasp3(ps3);
                if(ps3==5){
                    alert("¡¡¡Perdiste!!!\nTu puntaje fue de: "+puntaje);
                    clearInterval(val);
                    perder=true;
                }
                break;
            case 4:
                ps4++;
                document.getElementById('p4').textContent=ps4;
                personasp4(ps4);
                if(ps4==5){
                    alert("¡¡¡Perdiste!!!\nTu puntaje fue de: "+puntaje);
                    clearInterval(val);
                    perder=true;
                }
                break;
            case 5:
                ps5++;
                document.getElementById('p5').textContent=ps5;
                personasp5(ps5);
                if(ps5==5){
                    alert("¡¡¡Perdiste!!!\nTu puntaje fue de: "+puntaje);
                    clearInterval(val);
                    perder=true;
                }
                break;
        }
    }, 400);
}

function mov(p){
    switch(p){
        case 5:
            elevador.style.marginTop="10px"
            break;
        case 4:
            elevador.style.marginTop="120px"
            break;
        case 3:
            elevador.style.marginTop="230px"
            break;
        case 2:
            elevador.style.marginTop="340px"
            break;
        case 1:
            elevador.style.marginTop="450px"
            break;
        case 0:
            elevador.style.marginTop="560px"
            break;
    }
}

function inter(){
    switch(pos){
        case 5:
            if(ps5>0){
                if(ps5<=capS){
                    capA +=ps5;
                    capS = capl-capA;
                    ps5=0;
                    
                }
            }
            document.getElementById('p5').textContent=ps5;
            personasp5(ps5);
            break;
        case 4:
            if(ps4>0){
                if(ps4<=capS){
                    capA +=ps4;
                    capS = capl-capA;
                    ps4=0;
                }
            }
            document.getElementById('p4').textContent=ps4;
            personasp4(ps4);
            break;
        case 3:
            if(ps3>0){
                if(ps3<=capS){
                    capA +=ps3;
                    capS = capl-capA;
                    ps3=0;
                }
            }
            document.getElementById('p3').textContent=ps3;
            personasp3(ps3);
            break;
        case 2:
            if(ps2>0){
                if(ps2<=capS){
                    capA +=ps2;
                    capS = capl-capA;
                    ps2=0;
                }
            }
            document.getElementById('p2').textContent=ps2;
            personasp2(ps2);
            break;
        case 1:
            if(ps1>0){
                if(ps1<=capS){
                    capA +=ps1;
                    capS = capl-capA;
                    ps1=0;
                }
            }
            document.getElementById('p1').textContent=ps1;
            personasp1(ps1);
            break;
        case 0:
            puntaje+=capA;
            capA=0;
            capS=capl;
            document.getElementById('p0').textContent="Puntaje: "+puntaje;
            break;
    }
    document.getElementById('cap').textContent=capS;
}

function personasp1(canti){
    switch(canti){
        case 0:
            document.getElementById('piso1').style.background="none"
            break;
        case 1:
            document.getElementById('piso1').style.backgroundImage="url(img/1.png)"
            break;
        case 2:
            document.getElementById('piso1').style.backgroundImage="url(img/2.png)"
            break;
        case 3:
            document.getElementById('piso1').style.backgroundImage="url(img/3.png)"
            break;
        case 4:
            document.getElementById('piso1').style.backgroundImage="url(img/4.png)"
            break;
        case 5:
            document.getElementById('piso1').style.backgroundImage="url(img/5.png)"
            break;
    }
}
function personasp2(canti){
    switch(canti){
        case 0:
            document.getElementById('piso2').style.background="none"
            break;
        case 1:
            document.getElementById('piso2').style.backgroundImage="url(img/1.png)"
            break;
        case 2:
            document.getElementById('piso2').style.backgroundImage="url(img/2.png)"
            break;
        case 3:
            document.getElementById('piso2').style.backgroundImage="url(img/3.png)"
            break;
        case 4:
            document.getElementById('piso2').style.backgroundImage="url(img/4.png)"
            break;
        case 5:
            document.getElementById('piso2').style.backgroundImage="url(img/5.png)"
            break;
    }
}
function personasp3(canti){
    switch(canti){
        case 0:
            document.getElementById('piso3').style.background="none"
            break;
        case 1:
            document.getElementById('piso3').style.backgroundImage="url(img/1.png)"
            break;
        case 2:
            document.getElementById('piso3').style.backgroundImage="url(img/2.png)"
            break;
        case 3:
            document.getElementById('piso3').style.backgroundImage="url(img/3.png)"
            break;
        case 4:
            document.getElementById('piso3').style.backgroundImage="url(img/4.png)"
            break;
        case 5:
            document.getElementById('piso3').style.backgroundImage="url(img/5.png)"
            break;
    }
}
function personasp4(canti){
    switch(canti){
        case 0:
            document.getElementById('piso4').style.background="none"
            break;
        case 1:
            document.getElementById('piso4').style.backgroundImage="url(img/1.png)"
            break;
        case 2:
            document.getElementById('piso4').style.backgroundImage="url(img/2.png)"
            break;
        case 3:
            document.getElementById('piso4').style.backgroundImage="url(img/3.png)"
            break;
        case 4:
            document.getElementById('piso4').style.backgroundImage="url(img/4.png)"
            break;
        case 5:
            document.getElementById('piso4').style.backgroundImage="url(img/5.png)"
            break;
    }
}
function personasp5(canti){
    switch(canti){
        case 0:
            document.getElementById('piso5').style.background="none"
            break;
        case 1:
            document.getElementById('piso5').style.backgroundImage="url(img/1.png)"
            break;
        case 2:
            document.getElementById('piso5').style.backgroundImage="url(img/2.png)"
            break;
        case 3:
            document.getElementById('piso5').style.backgroundImage="url(img/3.png)"
            break;
        case 4:
            document.getElementById('piso5').style.backgroundImage="url(img/4.png)"
            break;
        case 5:
            document.getElementById('piso5').style.backgroundImage="url(img/5.png)"
            break;
    }
}