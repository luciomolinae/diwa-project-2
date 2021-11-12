

// Declaro las arrays de ingresos y egresos

const ingresos = [
    // new Ingreso('Sueldo', 2100.00),
    // new Ingreso('Venta coche', 1500)
];

const egresos = [
    // new Egreso('Alquiler departamento', 900),
    // new Egreso('Ropa', 800)
];

// Declaro una funcion que inicie las 3 funciones principales 

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

// Declaro las funciones de Egreso e ingreso para que se concatenen en la app

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

// Declaro la funcion que calcula la diferencia entre ambas los resultados de las funciones "total"

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

// Creo dos funciones que le dan algo de estilo como elegir el simbolo de la moneda y el formato del porcentaje

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}


// Declaro las funciones para sumar Ingresos y a su vez eliminarlos si se quiere 

const cargarIngresos = ()=>{
    let ingresosHTML = "";
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML =`
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class='elemento_eliminar--btn'>
                                <ion-icon name="close-circle-outline"
                                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `; 
   return ingresoHTML;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos()

}


// Declaro las funciones para agregar Egresos e eliminarlos si se quiere

const cargarEgresos = ()=>{
    let egresosHTML = "";
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class='elemento_eliminar--btn'>
                                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos()

}

// Declaro una funcion para el agregado de Datos con su descripcion y su valor

let agregarDato =() => {
    let forma =document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }
        else if(tipo.value === "egreso"){
           egresos.push(new Egreso(descripcion.value, +valor.value));
           cargarCabecero();
           cargarEgresos();
        }
    }   
}


// JSON 




 //jQuery

$(function () {

    $("#formulario").submit(function (e) { 
       e.preventDefault();
       var nombre = $("#nombre").val();
       var apellido = $("#apellido").val();
       var telefono = $("#telefono").val();

       console.log(nombre);
       console.log(apellido);
       console.log(telefono);

});




$("button").click(function(){
    $("#div1").fadeIn("slow");
   
});

$("button-two").click(function(){
    $("#div1").fadeOut("slow");
    
});

});
