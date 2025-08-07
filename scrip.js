

function consumoMensual(){
    let consumo = Number(prompt("Ingrese el consumo en kwh: "))
    return consumo
}
let consumo = consumoMensual()

function tarifaBase (){
    let tarifa = Number(prompt("Ingrese el valor del kwh: "))
    return tarifa
}

let tarifa = tarifaBase()

const cargoFijo = function(){
    let cargoFijo = Number(prompt("Ingrese el valor cargo fijo por servicio: "))
    return cargoFijo
}
let cargo = cargoFijo()

const cargoIva = function(){
    let cargoIva = Number(prompt("Ingrese el valor del IVA: "))
    return cargoIva
}

Let Iva = valorIva()

const calcularSubtotal = () => {
    let subto = consumo * tarifa
    return subto
}

let subTotal = calcularSubtotal()