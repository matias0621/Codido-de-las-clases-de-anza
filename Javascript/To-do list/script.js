const formulario = document.getElementById("formulario")
const inputTexto = document.getElementById("texto-de-tarea")
const textoDeLasTarea = document.getElementById("texto-de-las-tarea")

let listaDeTarea = []

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    if (inputTexto.value != "") listaDeTarea.push(inputTexto.value)
    pasarDatosAlHTML()
})

function pasarDatosAlHTML(){
    textoDeLasTarea.innerHTML = "" 

    listaDeTarea.forEach((tarea, index) => {
        const li = document.createElement("li")

        const btnCheck = document.createElement("button")
        btnCheck.textContent = "✅"
        btnCheck.classList.add("btn-check")
        btnCheck.onclick = () => eliminarTarea(index)
        li.textContent = tarea
        li.classList.add("tareas")
        li.appendChild(btnCheck)

        textoDeLasTarea.appendChild(li)
    })

}

function eliminarTarea(index) {
    listaDeTarea.splice(index, 1)
    pasarDatosAlHTML()
}
