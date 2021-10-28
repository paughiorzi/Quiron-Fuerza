/* ESTE ARCHIVO CONTIENE LAS VARIABLES GENERALES PARA EL DESARROLO DE QUIRON FUERZA */
class Paquete {
    constructor(id, name, service, turns, price, dispo){
        this.id = id;
        this.name = name;
        this.service = service;
        this.turns = turns;
        this.price = price;
        this.dispo = dispo;
        this.cantidad = 0;
    }
}
let paquetes = [];
paquetes.push (new Paquete (1,"Paquete Basico UNO","2 veces por semana","Simple turno",2500,5));
paquetes.push (new Paquete (2,"Paquete Basico DOS","3 veces por semana","Doble turno",3000,2));
paquetes.push (new Paquete (3,"Paquete Premium UNO","2 veces por semana","Simple turno",3500,6));
paquetes.push (new Paquete (4,"Paquete Premium DOS","3 veces por semana","Doble turno",4000,4));

let divPaquete = document.createElement("div");
$("#showProd").append(divPaquete);
divPaquete.innerHTML=`<h3>Estos son nuestros Paquetes de servicio:<br></h3>`;

const loadCatalog=()=>{
    localStorage.setItem(`paquetes`,JSON.stringify(paquetes));
}

loadCatalog();