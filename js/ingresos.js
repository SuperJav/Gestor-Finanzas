import {Ingresos} from "../db/ingresosJSON.js"
export let ingresos

export async function regarcarIngresos() {
    ingresos=Ingresos
    return ingresos
}

export function AddNewIngreso(newIngreso){
    const fechaActual = new Date();

    let newIngresoJson={
        "codigo": newIngreso.codigo,
        "descripcion": newIngreso.inputDescripcion,
        "fecha": `${fechaActual.getFullYear()}-${fechaActual.getMonth()}-${fechaActual.getDate()}`,
        "cantidad": newIngreso.inputCantidad
    }
    ingresos.push(newIngresoJson)
}

export function DeleteIngreso(i){
    Ingresos.splice(i,1)
}



