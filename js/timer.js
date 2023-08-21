
var intervalId;
var segundos = 0;

// Função para iniciar o cronômetro
function iniciarCronometro() {
intervalId = setInterval(function() {
segundos++;
document.getElementById('cronometro').innerHTML = segundos + ' segundos';
}, 1000);
}

// Função para parar o cronômetro
function pararCronometro() {
clearInterval(intervalId);
}

