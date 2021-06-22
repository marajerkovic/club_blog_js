console.log("esto es un log")

var contador
contador = 5
contador = 5 + 2 
console.log("mi contador vale: " + contador)

var mensaje
mensaje = "hola esto es un mensaje"
mensaje = "hola blabla"
console.log(mensaje)

function cambiarColor(elemento, color) {
    var titulo = document.getElementById(elemento)
    titulo.style.backgroundColor=color
    titulo.style.color='white'
    titulo.style.fontSize='15px'

    //alert("ok")
    /*asfsjf
    sdj
    sdj
    */
    console.log("cambio el color")
}

function mostrar(idTexto, idBoton) {
    var texto = document.getElementById(idTexto)
    var boton = document.getElementById(idBoton)
    console.log("mostrar")
    if (boton.innerHTML == "Mostrar más") {
        console.log("if")
        texto.style.maxHeight = "40em"
        boton.innerHTML = "Mostrar menos"
    } else {
        console.log("else")
        texto.style.maxHeight = "4em"
        boton.innerHTML = "Mostrar más"
    }
}