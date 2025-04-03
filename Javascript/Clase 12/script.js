// Comentario de una linea

/* 
Comentario de 
multiples lineas
*/

//------------------------VARIABLES--------------------------//
let nombreDeLaVariable = "SAPEEEEEEEE"
nombreDeLaVariable = 5

// Esto esta mal no se usa mas
var variablesViejas = 3


nombreDeLaVariable = "Brayan" // String
nombreDeLaVariable = 5 // Int o entero
nombreDeLaVariable = 5.4 // float o double
nombreDeLaVariable = true  // 1 o 0
nombreDeLaVariable = false // Booleanas  
nombreDeLaVariable = null // existe la variable pero no tiene ningun valor

let num1 = 5
let num2 = "10.5"

nombreDeLaVariable = num1 + parseFloat(num2) // Suma
console.log(nombreDeLaVariable + " No pasa nada")
nombreDeLaVariable = num1 - num2  // Resta
console.log(nombreDeLaVariable)
nombreDeLaVariable = num1 * num2  // Multiplicacion
console.log(nombreDeLaVariable)
nombreDeLaVariable = num1 / num2  // Division
console.log(nombreDeLaVariable)
nombreDeLaVariable = num1 ** num2 // Elevar
console.log(nombreDeLaVariable)
nombreDeLaVariable = num1 % num2 // Resto
console.log(nombreDeLaVariable)

//--------------------------------------FUNCIONES----------------------------------//

function choripan() {
    console.log("Holaaaaaa gatos")
}

function funcionConParametros(nombre) {
    console.log("Hola " + nombre)
}

choripan()

funcionConParametros("😍")

nombreDeLaVariable = "Mati"

funcionConParametros(nombreDeLaVariable)

function brayanTeRoba(facuIngeniero, nawePagameGil) {
    console.log(facuIngeniero + nawePagameGil)
}

brayanTeRoba(5, 3)

/*
function dividir(num1, num2){
   let resultado = num1 / num2

   if (resultado == 4) {
    console.log("Te puse")
   }
   console.log(resultado)
}
   */

dividir(40, 10)

//------------------------------------IF-ELSE IF---ELSE----------------------------------//

function dividir(num1, num2) {
    let resultado = num1 / num2

    if (resultado == 4) {
        console.log("Te puse")
        console.log("A vos y a tu hermana")
    }

    else if (resultado == 5) console.log("Por el culo te la inco")

    else console.log("No hay rima, entonces se la pongo a tu prima")



    console.log(resultado)
}
dividir(40, 10)


function calcularDescuento(cantidad) {
    if (cantidad >= 10) {
        console.log("Tienes un descuento del 20%")
    }
    else if (cantidad >= 5) {
        console.log("Tienes un 10% de descuento")
    }
    else if (cantidad >= 3) {
        console.log("Tienes un 5% de descuento")
    }
    else {
        console.log("No tenes descuento compra mas cosas gil")
    }
}

calcularDescuento(10)
/*
calcularDescuento(8)
calcularDescuento(4)
calcularDescuento(1)*/

function comprobarDatosDeLosUsuario(nombre, edad) {
    if (nombre == "" || typeof nombre !== "string") {
        console.log("SOS UN PELOTUDO PONE BIEN TU NOMBRE PAJERO")
    }
    else if (!edad || typeof edad !== "number" || edad < 0) {
        console.log("NO SEAS VIRGO PONE BIEN TU EDAD VIEJO CHOTO")
    }
    else {
        console.log(`Bienvenido ${nombre} de ${edad} edad`)
    }
}

comprobarDatosDeLosUsuario("", 5)
comprobarDatosDeLosUsuario("Pepe", -5)
comprobarDatosDeLosUsuario("Brayan", 25)

//--------------------------------------------SWITCH Y BUCLES-------------------------------//

function pruebaDeSwitch(algo) {
    //El switch solo te deja numeros y palabras
    switch (algo) {
        case 8:
            console.log("El culo te abrocho")
            break
        case 9:
            console.log("El culo te llueve")
            break
        case 0:
            console.log("Chupale las bolas al carnicero")
            break
        default:
            console.log("no hay rima, entonces me cogo a tu prima")
            break
    }
}

pruebaDeSwitch(4)

function pruebaDeBucles() {
    let limite = 20
    let vueltas = 0
    let contador = 0
    const frutas = ["Manzana", "Banana", "Pera", "Narajan", "Mandarina"]


    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].charAt(0) === "M" || frutas[i].charAt(0) === "m") {
            frutas[i] = ""
        }
    }
    console.log(frutas)


    while (vueltas < limite) {

        if (contador < 100) {
            contador++
        }
        else {
            vueltas = 999
        }
        console.log(vueltas)
    }
}

pruebaDeBucles()


function calcularTotal() {
    const listaDePrecios = [2.99, 3.50, 6.66, 69, 85]

    let total = 0
    for (let i = 0; i < listaDePrecios.length; i++) {
        total += listaDePrecios[i]
    }

    console.log(`ME DEBES ${total} NAWE. PLATA O PLOMO, TU ELIGES`)
    return total
}

calcularTotal()


function contrasenia() {
    let contraseniaCorrecta = "PutoElQueLoLea"
    let intento = ""

    while (intento !== contraseniaCorrecta) {
        intento = prompt("Ingresa la contraseña gato: ")

        if (intento === contraseniaCorrecta) {
            console.log("Abrete sesamo")
        }
        else {
            console.log("Te equivocaste pa")
        }
    }
}


//-----------------------------------------------ARRAYS Y OBJETOS----------------//

// Ejercico 1





// Ejercicio 2
let array = [1, 2, 3, 4, 5, 6] // arreglos, arrays, listas 
console.log(array)

array.push("Alma Marcela Gozo") // agrega un dato al final del array sin necesidad de aclarar el indice

console.log(array)

array.pop()

console.log(array)

array.unshift("Benito Camela")

console.log(array)

array.shift()

console.log(array)

//----------------------- Ejemplos con forEach--------------//
array.forEach((num) => console.log(num * 2))
console.log("-----------------------------------------")
array.forEach((num) => {

})

console.log("Numero: " + X)

const numeros = [10, 20, 30, 40]
let suma = 0

numeros.forEach((num) => {
    suma += num
})

console.log(`ME DEBES ${suma} NAWE. PLATA O PLOMO, TU ELIGES, pero ahora con forEach`)


//-------ejemplo 2-------//
const temperaturaCelsius = [0, 20, 30, 40]
const temperaturaFaranheint = []

temperaturaCelsius.forEach((temp) => {
    temperaturaFaranheint.push(temp * 9 / 5 + 32)
})

console.log(temperaturaFaranheint)

let nuevoArreglo = [1, 2, 3, 4, 7, 6, 5, 8, 9, 10]

let arregloMapeado = nuevoArreglo.map((chorizo) => chorizo * 2)

let nombre = nuevoArreglo.map((chorizo) => {
    console.log("Puto el que lo lea")
})

nombre = nuevoArreglo

console.log(`El arreglo chorizo: ${nuevoArreglo}`)

let variable = calcularTotal()

console.log("El total es de: " + variable)

const arregloFiltado = nuevoArreglo.filter((milanesa) => milanesa < 0)

console.log(arregloFiltado)

const arregloConFind = nuevoArreglo.find((num) => num === 10)

console.log("Arreglo con Find: " + arregloConFind)

const arregloConFindIndex = nuevoArreglo.findIndex((num) => num === 5)

console.log("Arreglo con Find: " + arregloConFindIndex)

const arregloSome = nuevoArreglo.some((num) => num < 0)
console.log("Arreglo con some: " + arregloSome)

const arregloEvery = nuevoArreglo.every((num) => num > 0)
console.log("Arreglo con every: " + arregloEvery)

const fruta = ["Manzana", "Banana", "Naranja", "Pera"]
console.log("Incluyo Manzana? " + fruta.includes("Manzana"))
console.log("Incluyo Mandarina? " + fruta.includes("Mandarina"))

nuevoArreglo.splice(6, 1)

console.log(nuevoArreglo)
