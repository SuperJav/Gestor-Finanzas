import {ingresos,regarcarIngresos,AddNewIngreso,DeleteIngreso} from "./ingresos.js"
import {egresos,regarcarEngresos,AddNewEgreso,DeleteEgreso} from "./egresos.js"
import {mostrarPresupuesto} from "./Presupuesto.js"
import {recibirFormInsert} from "./form.js"

let containerIngreso=document.getElementsByClassName("container-articles")
let monto=document.getElementsByClassName("monto")
let fecha=document.getElementById("fecha")
let buttonEnviar=document.getElementById("enviar")
let buttonDelete=document.getElementsByClassName("delete")
let buttonDeleteEgreso=document.getElementsByClassName("delete-egreso")
let dataForm;
let dataIngresos=[]





buttonEnviar.addEventListener("click",()=>{
    dataForm= recibirFormInsert()
    if (typeof dataForm === "object") {
         if (dataForm.select == 1) {
                 dataForm.codigo=(++ingresos.length)
                 AddNewIngreso(dataForm)
                 containerIngreso[0].innerHTML=""
                 MostrarIngresos()

         } else if (dataForm.select == 2) {
             dataForm.codigo=(++egresos.length)
                 AddNewEgreso(dataForm)
                 containerIngreso[1].innerHTML=""
                 MostrarEngresoss()
         }
    }
})



function tiempo(fehca) { 
    let fechas=new Date(fehca).getFullYear()
    return fechas
 }

fecha.addEventListener("change",()=>{
    let filtradosIngreso=[]
    let filtradosEgreso=[]
    let dataIngreso=[]
    let dataEgresos=[]
    filtradosIngreso=ingresos
    filtradosEgreso=egresos
    const fechaselect = new Date(fecha.value);
    let totalIngresos=0
    let totalEngresos=0

    filtradosIngreso.forEach((item)=>{
        if (tiempo(item.fecha) >= fechaselect.getFullYear()) {
            dataIngreso.push(item)
        }
    })
    containerIngreso[0].innerHTML=""
    dataIngreso.forEach((item,num)=>{
        totalIngresos+=parseFloat(item.cantidad)
            containerIngreso[0].innerHTML+=`<article key="${num}" class="article-ingresos">
                                                <p>${item.codigo}</p>
                                                <p class="container-descricion-fecha">
                                                    <span>${item.descripcion}</span>
                                                    <span class="fecha">${item.fecha}</span>
                                                </p>
                                                <p>$${item.cantidad}</p>
                                                <button class="button-delete"><img src="./icons/icon-delete.png" alt="icon-eliminar"></button>
                                            </article>` 
        })
        monto[1].innerHTML=`${totalIngresos}`

    filtradosEgreso.forEach((item)=>{
        if (tiempo(item.fecha) >= fechaselect.getFullYear()) {
            dataEgresos.push(item)
        }
    })
    containerIngreso[1].innerHTML=""
    dataEgresos.forEach((item,num)=>{
        totalEngresos+=parseFloat(item.cantidad)
        containerIngreso[1].innerHTML+=`<article key=${num} class="article-engresos">
                                            <p>${item.codigo}</p>
                                            <p class="container-descricion-fecha">
                                                <span>${item.descripcion}</span>
                                                <span class="fecha">${item.fecha}</span>
                                            </p>
                                            <p>$${item.cantidad}</p>
                                            <button class="button-delete"  ><img src="./icons/icon-delete.png" alt="icon-eliminar"></button>
                                        </article>`
    })
    mostrarPresupuesto()
})

 async function MostrarIngresos() {
   let totalIngresos=0
    dataIngresos=await regarcarIngresos()
   dataIngresos.forEach((item,num)=>{
    totalIngresos+=parseFloat(item.cantidad)
        containerIngreso[0].innerHTML+=`<article key="${num}" class="article-ingresos">
                                            <p>${item.codigo}</p>
                                            <p class="container-descricion-fecha">
                                                <span class="Descripcion">${item.descripcion}</span>
                                                <span class="fecha">${item.fecha}</span>
                                            </p>
                                            <p>$${item.cantidad}</p>
                                            <button class="button-delete"><img class="delete"  src="./icons/icon-delete.png" alt="icon-eliminar"></button>
                                        </article>` 
    })
    monto[1].innerHTML=`${totalIngresos}`
    mostrarPresupuesto()

    for (let i = 0; i < buttonDelete.length; i++) {
        let button = buttonDelete[i];
        button.addEventListener('click', () => {
            deleteIngreso(i)
          });
    }
}

async function MostrarEngresoss() {
    let dataEgresos=[]
    let totalEngresos=0
    dataEgresos=await regarcarEngresos()
    dataEgresos.forEach((item,num)=>{
        totalEngresos+=parseFloat(item.cantidad)
        containerIngreso[1].innerHTML+=`<article key=${num} class="article-engresos">
                                            <p>${item.codigo}</p>
                                            <p class="container-descricion-fecha">
                                                <span class="Descripcion">${item.descripcion}</span>
                                                <span class="fecha">${item.fecha}</span>
                                            </p>
                                            <p>$${item.cantidad}</p>
                                            <button class="button-delete"><img class="delete-egreso" src="./icons/icon-delete.png" alt="icon-eliminar"></button>
                                        </article>`
    })
    monto[2].innerHTML=`${totalEngresos}`
    mostrarPresupuesto()

    for (let i = 0; i < buttonDeleteEgreso.length; i++) {
        let button = buttonDeleteEgreso[i];
        button.addEventListener('click', () => {
            deleteEgreso(i)
          });
    }
   
}
function deleteIngreso(i){
    containerIngreso[0].innerHTML=""
     DeleteIngreso(i)
     MostrarIngresos()
 }
 function deleteEgreso(i) {
    containerIngreso[1].innerHTML=""
    DeleteEgreso(i)
    MostrarEngresoss()
 }
MostrarEngresoss()
MostrarIngresos()
mostrarPresupuesto()



   