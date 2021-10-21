
const botoes = document.getElementById ("botoes");
const semaforo = document.getElementById ("semaforo");

let colorindex = 0;
let intervalId = null;

const turnOn = {
    "vermelho":   () => semaforo.src= "vermelho.png",
    "amarelo":    () => semaforo.src= "amarelo.png",
    "verde":      () => semaforo.src= "verde.png",
    "automatico": () => intervalId = setInterval( trocaDeCor, 1000 )
    
}

const eventos = ( event ) => {
    stopAuto();
    turnOn[event.target.id]();
    
}

const trocaDeCor = () => {
    const colors = ["vermelho", "amarelo", "verde"]
    const color = colors[colorindex];
    turnOn[color]();
    nextIndex();
}

const nextIndex = () => {
    if (colorindex < 2) {
        colorindex++;
    } else {
        colorindex = 0;
    }
}

const stopAuto = () => {
    clearInterval (intervalId);

}





botoes.addEventListener ("click", eventos);

