 import {Egresos} from "../db/egresos.JSON.js"
 export let egresos

export async function regarcarEngresos() {
   egresos=Egresos
   return egresos
}

export function AddNewEgreso(newEgreso){
    const fechaActual = new Date();

    let newEgresoJson={
        "codigo": newEgreso.codigo,
        "descripcion": newEgreso.inputDescripcion,
        "fecha": `${fechaActual.getFullYear()}-${fechaActual.getMonth()}-${fechaActual.getDate()}`,
        "cantidad": newEgreso.inputCantidad
    }
    egresos.push(newEgresoJson)
}
export function DeleteEgreso(i){
    Egresos.splice(i,1)
}