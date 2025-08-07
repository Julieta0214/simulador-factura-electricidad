
//Función declarativa que retorne el consumo mensual en kilovatios//
function consumoMensual(){
    let consumo = Number(prompt("Ingrese el consumo en kwh: "))
    return consumo
}
let consumo = consumoMensual()
//Función declarativa que retorne la tarifa base por kilovatio//
function tarifaBase (){
    let tarifa = Number(prompt("Ingrese el valor del kwh: "))
    return tarifa
}

let tarifa = tarifaBase()
//Función de expresión que retorne el cargo fijo por servicio//
const cargoFijo = function(){
    let cargoFijo = Number(prompt("Ingrese el valor cargo fijo por servicio: "))
    return cargoFijo
}
let cargo = cargoFijo()
//Función de expresión que retorne el valor del IVA como porcentaje fijo//
const cargoIva = function(){
    let cargoIva = Number(prompt("Ingrese el valor del IVA: "))
    return cargoIva
}

let Iva = valorIva()
//Función flecha que retorne el subtotal multiplicando consumo por tarifa//
const calcularSubtotal = () =>{
    let subtotal = consumo * tarifa
    return subtotal
}

let subTotal = calcularSubtotal()
//Función flecha que retorne el valor del IVA aplicado sobre el subtotal//
const valorSubtotalIva = () =>{
    let valorSubIva = iva/100 * subTotal
    return valorSubIva
}

let valorSubIva = valorSubtotalIva()
//Función flecha que retorne el total a pagar sumando subtotal, IVA y cargo fijo//
const totalPagarServicio = () =>{
    let valorPagar =  subTotal + valorSubIva + cargo
    return valorPagar
}

let totalPagar = totalPagarServicio()
//Función final (de cualquier tipo, tú eliges) que imprima en consola todos los resultados con descripciones claras (consumo, tarifa, subtotal, IVA, cargo fijo y total)//
function resultadoEjecucion(){
    console.log("El consumo del mes fue: " + consumo)
    console.log("La tarifa del mes es : " + tarifa)
    console.log("El subtotal del consumo: " + subtotal)
    console.log("El subtotal del iva es : " + valorSubIva)
    console.log("Elvalor del cargo fijo es: " + cargo)
    console.log("El valor total a pagar es: " + totalPagar)
}
resultadoEjecucion()