
function actualizarBarraCarga() {
    var tiempoTranscurrido = parseInt(localStorage.getItem('tiempoTranscurrido')) || 0;
    var progressBar = document.getElementById('progress-bar');
    var progress = document.getElementById('progress');
    var time = document.getElementById('time')
    var time = document.getElementById('seconds');
    var  h1 = document.getElementById('contador');
    var imagen = document.getElementById('imagen');
    var documentoOculto = document.getElementById('documentoOculto');
    var docOculto = document.getElementById('docOculto');

    //1800
    var porcentaje = (tiempoTranscurrido / 60) * 100;
    progress.style.width = porcentaje + '%';
    time.innerText = Math.floor(tiempoTranscurrido / 60) + ' minutos';
    var numeroActual = parseInt(localStorage.getItem('contador'));
    
    if (isNaN(numeroActual)){
        numeroActual = 0;
        
    }

    function incrementarNumero(){   
        var nuevoNumero = numeroActual + 1;
        h1.innerText = nuevoNumero;

        if (nuevoNumero >= 100 && nuevoNumero <= 200) {
            imagen.src = "img/r2.png";
        }
        if (nuevoNumero >= 200 && nuevoNumero <= 300) {
            imagen.src = "img/r3.png";
        }
        if (nuevoNumero >= 300 && nuevoNumero <= 400) {
            imagen.src = "img/r4.png";
        }
        if (nuevoNumero >= 400 && nuevoNumero <= 500) {
            imagen.src = "img/r5.png";
        }
        if (nuevoNumero >= 500 && nuevoNumero <= 600) {
            imagen.src = "img/r6.png";
        }

        localStorage.setItem('contador', nuevoNumero.toString());
        numeroActual = nuevoNumero;
        if (nuevoNumero >= 100) {
            documentoOculto.style.display = 'block';
        }
        if (nuevoNumero >= 150) {
            documentoOculto.style.display = 'none';
        }
        if (nuevoNumero >= 200) { 
            docOculto.style.display = 'block';
        }
        if (nuevoNumero >= 250) { 
            docOculto.style.display = 'none';
        }         
    }

    setInterval(incrementarNumero, 58000) 
    if (porcentaje >= 100) {

        progressBar.style.backgroundColor = 'black';
        progress.style.width = '100%'
        tiempoTranscurrido = 0;
        localStorage.setItem('tiempoTranscurrido', tiempoTranscurrido);
    }
    
    var segundos = tiempoTranscurrido % 60;
    var minutos = Math.floor(tiempoTranscurrido / 60) % 60;
    var horas = Math.floor(tiempoTranscurrido / 3600);

    seconds.innerText = horas + 'h ' + minutos + 'm ' + segundos + 's';
    localStorage.setItem('tiempoTranscurrido', tiempoTranscurrido);
}

function incrementarTiempoTranscurrido() {
    var tiempoTranscurrido = parseInt(localStorage.getItem('tiempoTranscurrido')) || 0;
    var now = new Date().getTime() - (tiempoTranscurrido * 1000);
    tiempoTranscurrido ++;
    localStorage.setItem('tiempoTranscurrido', tiempoTranscurrido);
    actualizarBarraCarga();
}
setInterval(incrementarTiempoTranscurrido, 1000);
setInterval(actualizarBarraCarga, 1000);

let titleText = ["Time is Learning", "Hacker master", "Anonox Hkrs"];
let counter = 0;
setInterval(function(){
    document.title = titleText[counter % titleText.length];
    counter++;
}, 2000);
console.log("alert")
