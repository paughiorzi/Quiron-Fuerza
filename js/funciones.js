/* ESTE ARCHIVO CONTIENE LAS FUNCIONES NECESARIAS PARA EL DESARROLO DE QUIRON FUERZA */


const buildTarjeta=(paquete)=>{
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");    
    
    let nameProd = document.createElement("div");
    nameProd.classList.add("nameProd");
    nameProd.innerHTML =`Nombre: ${paquete.name}`;
    tarjeta.appendChild(nameProd);
    
    let idProd = document.createElement("div");
    idProd.innerHTML =`ID del Paquete: ${paquete.id}`;
    tarjeta.appendChild(idProd);
    
    let serviceProd = document.createElement("div");
    serviceProd.innerHTML =`Cantidad: ${paquete.service}`;
    tarjeta.appendChild(serviceProd);
    
    let turnsProd = document.createElement("div");
    turnsProd.innerHTML =`Tipo: ${paquete.turns}`;
    tarjeta.appendChild(turnsProd);
    
    let priceProd = document.createElement("div");
    priceProd.innerHTML =`Precio: $${paquete.price}`;
    tarjeta.appendChild(priceProd);
    
    let dispoProd = document.createElement("div");
    dispoProd.innerHTML =`<p>Stock: ${paquete.dispo} </p></br>`;
    tarjeta.appendChild(dispoProd);
    
    return tarjeta;
}

let paquetesNube = JSON.parse(localStorage.getItem(`paquetes`))
localStorage.setItem("paquetesCarrito", JSON.stringify(paquetesNube))
let carritoNube = JSON.parse(localStorage.getItem("paquetesCarrito"));


const show=()=>{
    divPaquete.innerHTML = ""
    for(paquete of carritoNube){
        divPaquete.appendChild(buildTarjeta(paquete));         
    }
}


$(document).ready(function() {
    const APIURL="https://jsonplaceholder.typicode.com/posts" ;
    
    show(paquetesNube);

    $("#btnSend").click((e) => {
        e.preventDefault()
        let nombre = $("#nombre")[0].value;
        let email = $("#email")[0].value;
        let dataen = { nombre, email};
        console.log(dataen)
        $.ajax({
            method:"POST",
            url: APIURL,
            data: dataen,
            success: function(respuesta){
                console.log(respuesta)
                $("#respa").append(`<div> Te suscribiste exitosamente ${respuesta.nombre}</div>`);
                console.log(`Te suscribiste exitosamente ${respuesta.nombre}`)
            } 
        });
    })
});

