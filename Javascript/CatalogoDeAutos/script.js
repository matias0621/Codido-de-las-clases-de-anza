const formAutos = document.getElementById("form-auto")
const modelo = document.getElementById("input-modelo")
const marca = document.getElementById("input-marca")
const anio = document.getElementById("input-anio")
const linkDeLaImagen = document.getElementById("input-imagen")
const listaDeAuto = document.getElementById("lista-autos")

let autos = JSON.parse(localStorage.getItem("autos")) || []

function guardarAutosEnLocalStorage(){
    localStorage.setItem("autos", JSON.stringify(autos))
}

formAutos.addEventListener("submit", (e) => {
    e.preventDefault()

    agregarAutos(modelo.value, marca.value, anio.value, linkDeLaImagen.value) 
    modelo.value = ""
    marca.value = ""
    anio.value = ""
    linkDeLaImagen.value = ""
})

function agregarAutos(modelo, marca, anio, link) {
    const nuevo = {modelo, marca, anio, link}

    autos = [...autos, nuevo]
    
    guardarAutosEnLocalStorage()
    renderizarAutos()
}

function renderizarAutos() {
    listaDeAuto.innerHTML = ""

    autos.forEach((auto, index) => {
        const li = document.createElement("li")

        li.innerHTML = `${auto.modelo} ${auto.marca} - Año: ${auto.anio}
        <img src="${auto.link}" alt="${auto.modelo}">
        <button onclick="eliminarAuto(${index})" >❎</button>
        `

        listaDeAuto.appendChild(li)
    })
}

function eliminarAuto(index) {
    autos = autos.filter((_, i) => i != index)
    guardarAutosEnLocalStorage()
    renderizarAutos()
}

renderizarAutos()




// JSON Todos los putos lenguajes de programacion Object Notacion
