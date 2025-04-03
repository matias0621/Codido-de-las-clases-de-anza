////////////////////// REPASO DE LAS FUNCIONES IMPORTANTES ////////////////////////////

let arrayDeRepaso = [1, 2, 3, 4, 5, 1, 2, 3, 9]

arrayDeRepaso.push("Tangamandapio")

console.log(arrayDeRepaso)

arrayDeRepaso.pop()

console.log(arrayDeRepaso)

arrayDeRepaso.unshift("Tangamandapio")

console.log(arrayDeRepaso)

arrayDeRepaso.shift()

console.log(arrayDeRepaso)

arrayDeRepaso.forEach((num) => {
    if (num == 5){
        console.log("Por el culo te la hinco")
    }
})

let arregloModificadoPorMap = arrayDeRepaso.map((num) => num ** 2)
console.log("Array despues del map")
console.log(arregloModificadoPorMap)

const valorEncontrado = arrayDeRepaso.find((num) => num > 5)
console.log(valorEncontrado)

//------------------------------- Objetos --------------------------//

let usuario = {
    nombre: "Brayan",
    cosasRobadas: ["Samsung A22", "Una billetera", "Un tanque sovietico t34", "Y un auto que se cruzo"],
    milanesaNapolita: () => {
        return "Que onda wachin"
    }
}
usuario.nombre = "Matias"

console.log(usuario.milanesaNapolita())

usuario.cosasRobadas.push("Un pc gamer")

console.log(usuario.cosasRobadas)

