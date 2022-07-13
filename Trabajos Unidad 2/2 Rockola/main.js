let sonAir=document.getElementById('song1');
let sonBossa=document.getElementById('song2');
let sonBring=document.getElementById('song3');
let sonBrutal=document.getElementById('song4');
let sonHeart=document.getElementById('song5');
let sonChan=document.getElementById('song6');
let sonDonde=document.getElementById('song7');
let sonLove=document.getElementById('song8');
let sonDueles=document.getElementById('song9');
let sonFairytale=document.getElementById('song10');
let sonHot=document.getElementById('song11');
let sonWanna=document.getElementById('song12');
let sonLife=document.getElementById('song13');
let sonKarma=document.getElementById('song14');
let sonSaber=document.getElementById('song15');

let can=0;

let btnMoneda=document.getElementById('moneda');
let cancion=document.getElementById("cancion");
let btnPlay=document.getElementById("play");
let nombre=document.getElementById("nom");
let artista=document.getElementById("art");


sonAir.addEventListener("click", function () {
    alert('Seleccionaste la de Air');
    document.getElementById("img").src = "img/Air.png";
    can = 1;
});

sonBossa.addEventListener("click", function () {
    alert('Seleccionaste la de Bossa No Sé');
    document.getElementById("img").src = "img/Bossa.png";
    can = 2;
});

sonBring.addEventListener("click", function () {
    alert('Seleccionaste la de Bring Me To Life');
    document.getElementById("img").src = "img/Bring.png";
    can = 3;
});

sonBrutal.addEventListener("click", function () {
    alert('Seleccionaste la de Brutal');
    document.getElementById("img").src = "img/Brutal.png";
    can = 4;
});

sonHeart.addEventListener("click", function () {
    alert('Seleccionaste la de Can You Feel My Heart');
    document.getElementById("img").src = "img/Heart.png";
    can = 5;
});

sonChan.addEventListener("click", function () {
    alert('Seleccionaste la de Changing Environment');
    document.getElementById("img").src = "img/Chan.png";
    can = 6;
});

sonDonde.addEventListener("click", function () {
    alert('Seleccionaste la de ¿Donde Estabas tú?');
    document.getElementById("img").src = "img/Donde.png";
    can = 7;
});

sonLove.addEventListener("click", function () {
    alert('Seleccionaste la de Do It For Love');
    document.getElementById("img").src = "img/Love.png";
    can = 8;
});

sonDueles.addEventListener("click", function () {
    alert('Seleccionaste la de Dueles Tan Bien');
    document.getElementById("img").src = "img/Dueles.png";
    can = 9;
});

sonFairytale.addEventListener("click", function () {
    alert('Seleccionaste la de Fairytale');
    document.getElementById("img").src = "img/Fairytale.png";
    can = 10;
});

sonHot.addEventListener("click", function () {
    alert('Seleccionaste la de Hotline Bling');
    document.getElementById("img").src = "img/Hot.png";
    can = 11;
});

sonWanna.addEventListener("click", function () {
    alert('Seleccionaste la de I Wanna Be Your Slave');
    document.getElementById("img").src = "img/Wanna.png";
    can = 12;
});

sonLife.addEventListener("click", function () {
    alert("Seleccionaste la de It's My Life");
    document.getElementById("img").src = "img/Life.png";
    can = 13;
});

sonKarma.addEventListener("click", function () {
    alert('Seleccionaste la de Karma');
    document.getElementById("img").src = "img/Karma.png";
    can = 14;
});

sonSaber.addEventListener("click", function () {
    alert('Seleccionaste la de Quisiera Saber');
    document.getElementById("img").src = "img/Saber.png";
    can = 15;
});


btnPlay.addEventListener("click", function(){
    cancion.innerHTML = '<audio src="" autoplay></audio>' ;
})

btnMoneda.addEventListener('click', function() {
    alert('Se ingresaron los creditos');
    switch (can){
        case 1:
            alert('Moneda ingresada! \nSe reproduce Air de BJMO')
            cancion.innerHTML = '<audio src="snd/Air.mp3" autoplay></audio>';
            nombre.innerHTML="Air";
            artista.innerHTML="BJMO";
        break;
        case 2:
            alert('Moneda ingresada! \nSe reproduce Bossa No Sé de Cuco')
            cancion.innerHTML = '<audio src="snd/Bossa.mp3" autoplay ></audio>';
            nombre.innerHTML="Bossa No Sé";
            artista.innerHTML="Cuco";
        break;
        case 3:
            alert('Moneda ingresada! \nSe reproduce Bring Me To Life de Evanescence')
            cancion.innerHTML = '<audio src="snd/Bring.mp3" autoplay></audio>';
            nombre.innerHTML="Bring Me To Life";
            artista.innerHTML="Evanescence";
        break;
        case 4:
            alert('Moneda ingresada! \nSe reproduce Brutal de Olivia Rodrigo')
            cancion.innerHTML = '<audio src="snd/Brutal.mp3" autoplay></audio>';
            nombre.innerHTML="Brutal";
            artista.innerHTML="Olivia Rodrigo";
        break;
        case 5:
            alert('Moneda ingresada! \nSe reproduce Can You Feel My Heart de Bring Me The Horizon')
            cancion.innerHTML = '<audio src="snd/Heart.mp3" autoplay></audio>';
            nombre.innerHTML="Can You Feel My Heart";
            artista.innerHTML="Bring Me The Horizon";
        break;
        case 6:
            alert('Moneda ingresada! \nSe reproduce Changing Environment de Gustav X')
            cancion.innerHTML = '<audio src="snd/Chan.mp3" autoplay></audio>';
            nombre.innerHTML="Changin Environment";
            artista.innerHTML="Gustav X";
        break;
        case 7:
            alert('Moneda ingresada! \nSe reproduce ¿Donde Estabas Tú? de Danna Paola')
            cancion.innerHTML = '<audio src="snd/Donde.mp3" autoplay></audio>';
            nombre.innerHTML="¿Donde Estabas Tú?";
            artista.innerHTML="Danna Paola";
        break;
        case 8:
            alert('Moneda ingresada! \nSe reproduce Do It For Love de P-Holla')
            cancion.innerHTML = '<audio src="snd/Love.mp3" autoplay></audio>';
            nombre.innerHTML="Do It For Love";
            artista.innerHTML="P-Holla";
        break;
        case 9:
            alert('Moneda ingresada! \nSe reproduce Dueles Tan Bien de Bruses')
            cancion.innerHTML = '<audio src="snd/Dueles.mp3" autoplay></audio>';
            nombre.innerHTML="Dueles Tan Bien";
            artista.innerHTML="Bruses";
        break;
        case 10:
            alert('Moneda ingresada! \nSe reproduce Fairytale de Alexander Rybak')
            cancion.innerHTML = '<audio src="snd/Fairytale.mp3" autoplay></audio>';
            nombre.innerHTML="Fairytale";
            artista.innerHTML="Alexander Rybak";
        break;
        case 11:
            alert('Moneda ingresada! \nSe reproduce Hotline Bling de Drake')
            cancion.innerHTML = '<audio src="snd/Hot.mp3" autoplay></audio>';
            nombre.innerHTML="Hotline Bling";
            artista.innerHTML="Drake";
        break;
        case 12:
            alert('Moneda ingresada! \nSe reproduce I Wanna Be Your Slave de Maneskin')
            cancion.innerHTML = '<audio src="snd/Wanna.mp3" autoplay></audio>';
            nombre.innerHTML="I Wanna Be Your Slave";
            artista.innerHTML="Maneskin";
        break;
        case 13:
            alert("Moneda ingresada! \nSe reproduce It's My Life de Bon Jovi")
            cancion.innerHTML = '<audio src="snd/Life.mp3" autoplay></audio>';
            nombre.innerHTML="It's My Life";
            artista.innerHTML="Bon Jovi";
        break;
        case 14:
            alert('Moneda ingresada! \nSe reproduce Karma de AJR')
            cancion.innerHTML = '<audio src="snd/Karma.mp3" autoplay></audio>';
            nombre.innerHTML="Karma";
            artista.innerHTML="AJR";
        break;
        case 15:
            alert('Moneda ingresada! \nSe reproduce Quisiera Saber de Carin Leon')
            cancion.innerHTML = '<audio src="snd/Saber.mp3" autoplay></audio>';
            nombre.innerHTML="Quisiera Saber";
            artista.innerHTML="Carin Leon";
        break;
    }
})