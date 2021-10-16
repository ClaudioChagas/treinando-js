
var ligar = document.getElementById ("ligar");
var desligar = document.getElementById ("desligar");
var lamp = document.getElementById ("lamp");

function isLampQuebrada() {
    return lamp.src.indexOf ("quebrada") > -1
}

function lampLigar() {
    if ( !isLampQuebrada()) {
        lamp.src = "ligada.jpg";
    }

}

function lampDesligar() {
    if ( !isLampQuebrada()) {
        lamp.src = "desligada.jpg";
    }
}

function lampQuebrada () {
    lamp.src = "quebrada.jpg";
}

ligar.addEventListener ( "click", lampLigar);
lamp.addEventListener ("mouseover", lampLigar)

desligar.addEventListener ("click", lampDesligar);
lamp.addEventListener ("mouseleave", lampDesligar);

lamp.addEventListener ("dblclick", lampQuebrada);