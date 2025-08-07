

function consumoMensual(){
    let consumo = Number(prompt("Ingrese el consumo en kwh: "))
    return consumo
}


function tarifaBase (){
    let tarifa = Number(prompt("Ingrese el valor del kwh: "))
    return tarifa
}

const cargoFijo = function(){
    let cargoFijo = Number(prompt("Ingrese el valor cargo fijo por servicio: "))
    return cargoFijo
}