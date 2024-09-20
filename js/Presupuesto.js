let monto=document.getElementsByClassName("monto")



export function mostrarPresupuesto() {
    setTimeout(() => {
        
        let suma=(parseFloat(50000)+parseFloat(monto[1].textContent))
        let resta=(suma-parseFloat(monto[2].textContent))
        monto[0].textContent=parseFloat(resta)
    }, 500);
    
}
