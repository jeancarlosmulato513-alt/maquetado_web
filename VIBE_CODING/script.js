
/* =========================
GENERAR NUMERO
========================= */

function generarNumero(){

    return Math.floor(
        1000 + Math.random() * 9000
    );

}

document.getElementById("numeroRecibo").innerText =
generarNumero();

/* =========================
CALCULAR TOTAL
========================= */

const valores =
document.querySelectorAll(".valor");

function calcularTotal(){

    let suma = 0;

    valores.forEach(campo=>{

        let valor =
        parseFloat(campo.value);

        if(!isNaN(valor)){

            suma += valor;

        }

    });

    document.getElementById("total").innerText =
    suma.toLocaleString();

}

valores.forEach(campo=>{

    campo.addEventListener(
        "input",
        calcularTotal
    );

});

/* =========================
GUARDAR DATOS
========================= */

function guardarDatos(){

    const datos = {

        numero:
        document.getElementById("numeroRecibo").innerText,

        nombre:
        document.getElementById("nombre").value,

        direccion:
        document.getElementById("direccion").value,

        telefono:
        document.getElementById("telefono").value,

        ciudad:
        document.getElementById("ciudad").value,

        edad:
        document.getElementById("edad").value,

        peso:
        document.getElementById("peso").value,

        talla:
        document.getElementById("talla").value,

        ppl:
        document.getElementById("ppl").value,

        fechaInicio:
        document.getElementById("fechaInicio").value,

        fechaFin:
        document.getElementById("fechaFin").value,

        rehabilitacion:
        document.getElementById("rehabilitacion").checked,

        entretenimiento:
        document.getElementById("entretenimiento").checked,

        masajes:
        document.getElementById("masajes").checked,

        natacion:
        document.getElementById("natacion").checked,

        observaciones:
        document.getElementById("observaciones").value,

        total:
        document.getElementById("total").innerText,

        descripciones:[],
        valores:[]

    };

    document
    .querySelectorAll(".descripcion")
    .forEach(campo=>{

        datos.descripciones.push(
            campo.value
        );

    });

    document
    .querySelectorAll(".valor")
    .forEach(campo=>{

        datos.valores.push(
            campo.value
        );

    });

    localStorage.setItem(
        "reciboGreenBlue",
        JSON.stringify(datos)
    );

    alert("Datos guardados correctamente");

}

/* =========================
CARGAR DATOS
========================= */

function cargarDatos(){

    const datos = JSON.parse(

        localStorage.getItem(
            "reciboGreenBlue"
        )

    );

    if(!datos){

        alert("No hay datos guardados");
        return;

    }

    document.getElementById("numeroRecibo").innerText =
    datos.numero;

    document.getElementById("nombre").value =
    datos.nombre;

    document.getElementById("direccion").value =
    datos.direccion;

    document.getElementById("telefono").value =
    datos.telefono;

    document.getElementById("ciudad").value =
    datos.ciudad;

    document.getElementById("edad").value =
    datos.edad;

    document.getElementById("peso").value =
    datos.peso;

    document.getElementById("talla").value =
    datos.talla;

    document.getElementById("ppl").value =
    datos.ppl;

    document.getElementById("fechaInicio").value =
    datos.fechaInicio;

    document.getElementById("fechaFin").value =
    datos.fechaFin;

    document.getElementById("rehabilitacion").checked =
    datos.rehabilitacion;

    document.getElementById("entretenimiento").checked =
    datos.entretenimiento;

    document.getElementById("masajes").checked =
    datos.masajes;

    document.getElementById("natacion").checked =
    datos.natacion;

    document.getElementById("observaciones").value =
    datos.observaciones;

    document.getElementById("total").innerText =
    datos.total;

    document
    .querySelectorAll(".descripcion")
    .forEach((campo,index)=>{

        campo.value =
        datos.descripciones[index];

    });

    document
    .querySelectorAll(".valor")
    .forEach((campo,index)=>{

        campo.value =
        datos.valores[index];

    });

    alert("Datos cargados correctamente");

}

/* =========================
NUEVO RECIBO
========================= */

function nuevoRecibo(){

    if(confirm(
        "¿Crear un nuevo recibo?"
    )){

        limpiarFormulario();

        document.getElementById(
            "numeroRecibo"
        ).innerText = generarNumero();

    }

}

/* =========================
LIMPIAR FORMULARIO
========================= */

function limpiarFormulario(){

    document
    .querySelectorAll("input")
    .forEach(input=>{

        if(
            input.type === "checkbox"
        ){

            input.checked = false;

        }else{

            input.value = "";

        }

    });

    document
    .querySelectorAll(".descripcion")
    .forEach(campo=>{

        campo.value = "";

    });

    document
    .querySelectorAll(".valor")
    .forEach(campo=>{

        campo.value = "";

    });

    document.getElementById(
        "observaciones"
    ).value = "";

    document.getElementById(
        "total"
    ).innerText = "0";

}

/* =========================
LIMPIAR TODO
========================= */

function limpiarTodo(){

    if(confirm(
        "¿Deseas borrar los datos guardados?"
    )){

        localStorage.removeItem(
            "reciboGreenBlue"
        );

        limpiarFormulario();

        alert(
            "Datos eliminados"
        );

    }

}
