let buttons = document.getElementsByClassName("btn btn-primary mb-2");

for(let b of buttons){
    b.addEventListener("click", contratar)
}



function contratar(){
    let qtyArr = document.getElementsByClassName("qty")
    
    let arr = [...qtyArr]
    let qtyCarr = arr.find(input => input.name == $(this).attr('id'))

        addToCart (Number($(this).attr('id')[$(this).attr('id').length-1]), qtyCarr.value);
        // if (cart>0){
        //     console.log (`Su compra tiene un total de $${cart}`);
        // } else{
        // alert("Tiene que ingresar un valor numerico");
        // }
    }


// CARRITO

let cart = 0;
let paquetesCarrito="";

const addToCart = (option, qty)=> {
    let found = paquetesNube.find(paquete => paquete.id === option)

    if(inStock(option, qty)){
        cart += (qty * found.price);
        found.dispo=found.dispo-qty; /* descuento de lo q se lleva, en el stock */
        
        alert (`Su paquete: ${found.name} fue agregado a la cuenta`);
        console.log (`Usted contrato: ${qty}-> ${found.name}, ${found.service}, ${found.turns}.`);
        
        paquetesCarrito += qty+" "+found.name+", "+found.service+", "+found.turns + "." + " <br>";   
        localStorage.setItem("paquetesCarrito", JSON.stringify(paquetesCarrito));
    }
}

const inStock = (option, qty) => {
    let stock = paquetesNube.find(paquete => paquete.id === option).dispo;
    if(qty>stock){
        alert (`No tenemos stock, el maximo disponible es ${stock}`);
        return false;
    } else return true;
}

$("#terminarCompra").click((e) => {
    e.preventDefault()

    localStorage.setItem("carrito",JSON.stringify(cart));
    let carritoNube = JSON.parse(localStorage.getItem("carrito"));
    let paquetesNube = JSON.parse(localStorage.getItem("paquetesCarrito"));
    if (carritoNube>0){
        console.log("total del carrito: $" + carritoNube);
        /* console.log(paquetesCarrito); */
        $("#carrito").append(`${paquetesNube}`);
        $("#total").append(`${cart}`);
     alert (`Su compra tiene un total de $${cart}`);
     show(paquetesNube);
    }
   else alert("Tiene que ingresar un valor numerico");
});
