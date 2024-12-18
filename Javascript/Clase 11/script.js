//----------------------------EJEMPLOS DE VARIABLES-----------------------------//
let meVineAHacerElDNI = "brayan"
var otraVariable = "Mati" // Esto no va mas ❎
const variableContant = "PERO NO TRAJO EL DNI" // Esta variable no va a cambiar
let mensaje = "Hola como andas" // Si es let si va a cambiar
let numeroEntero = 5 // Int de entero
let numeroConComa = 53.6 // Float o Double
let palabras = "Brayan" // String
let caracteres = 'e' // Letras basicamente
let booleanos = true // Boleanos osea solo verdadero o falso o tambien 1 o 0

//----------------------------EJEMPLO DE MENU DESPLEGABLE--------------------------//
const botonQueApretar = document.getElementById("boton-que-tenes-apretar")
const menu = document.getElementById("menu")

botonQueApretar.addEventListener("click", () => {
    menu.classList.toggle("arrastrarMenu")
})

//----------------------------HTML DINAMICO----------------------------------//
const botonQueSiTenesQueApretar = document.getElementById("apretame-a-mi")
const textoSecreto = document.getElementById("texto-secreto")
let texto = "<div class='texto-secreto'>Descubriste este texto super secreto</div>"

botonQueSiTenesQueApretar.addEventListener("click", () => {
    textoSecreto.innerHTML = texto
})


