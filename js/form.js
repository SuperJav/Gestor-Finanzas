let form=document.querySelector("#formularioInsert")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

function clearForm() { 
    document.querySelector("#descripcion").value=""
    document.querySelector("#monto").value=""
    document.getElementById("select-opcion").value=0
 }
export function recibirFormInsert(){
    let inputDescripcion=document.querySelector("#descripcion").value
    let inputCantidad=document.querySelector("#monto").value
    let regexCantidad=/^[-+]?\d*(\.\d+)?$/;
    let select=document.getElementById("select-opcion").selectedIndex

    let entradas={
        inputDescripcion,
        inputCantidad,
        select
    }

    if (!regexCantidad.test(entradas.inputCantidad)) {
        alert("Cantidad incorrecta.")
    }else{
        
        if (entradas.inputDescripcion !== "") {
            if (entradas.inputCantidad >=5) {

                if (select === 0) {
                    alert("Debe de seleccionar un tipo de movimiento.")
                }else{
                    clearForm()
                    return entradas
                }
            }else{
                alert("Debe de colocar un valor mayor a 5.")
            }
        }else{
            alert("Debes de colocar una descripción.")
        }
    }
    
}








