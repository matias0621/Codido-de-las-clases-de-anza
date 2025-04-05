export function suma(num1, num2){
    return num1 + num2
}

export function resta(num1, num2){
    return num1 - num2
}

export function multiplicar(num1, num2){
    return num1 * num2
}

export function dividir(num1, num2){
    if (num1 == 0 || num2 == 0) return "Puto manda bien las cosas"
    return num1 / num2
}