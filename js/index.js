let buttons = document.getElementsByClassName("btn btn-primary mb-2");

for(let b of buttons){
    b.addEventListener("click", contratar)
}



function contratar(){
    let qtyArr = document.getElementsByClassName("qty")
    
    let arr = [...qtyArr]
    let qtyCarr = arr.find(input => input.name == $(this).attr('id'))

        addToCart (Number($(this).attr('id')[$(this).attr('id').length-1]), qtyCarr.value);

    }


// CARRITO


let cart = 0;

const addToCart = (option, qty)=> {
    let found = carritoNube.find(paquete => paquete.id === option)
    if(inStock(option, qty)){
        let input = Number(document.getElementById(found.name).value)
        cart += (qty * found.price);
        found.cantidad = found.cantidad + input
        found.dispo = found.dispo - input
        localStorage.setItem("paquetesCarrito", JSON.stringify(carritoNube))
        show()
    }
}

const inStock = (option, qty) => {
    let stock = carritoNube.find(paquete => paquete.id === option).dispo;
    if(qty>stock){
        alert (`No tenemos stock, el maximo disponible es ${stock}`);
        return false;
    } else return true;
}

$("#terminarCompra").click((e) => {
    e.preventDefault()

    localStorage.setItem("carrito",JSON.stringify(cart));
    let carritoNube = JSON.parse(localStorage.getItem("paquetesCarrito"));
    if (cart>0){
        
        for(let prod of carritoNube){
            if(prod.cantidad > 0)
            {
                $("#carrito").append(`${prod.cantidad} - ${prod.name} <br>`);
            }
        }
        $("#total")[0].innerHTML = (`${cart}`);
         
Swal.fire('Agregado al carrito')
     show();
    }
   else 
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Debes ingresar un valor numerico!',
    footer: 'Tal vez no estes presionando el botón "contratar Paquete..." luego de ingresar la cantidad'
  })
});

$("#comprar").click(function(){
    if(cart!==0){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra realizada',
            showConfirmButton: false,
            timer: 1500
          })
    }
})
