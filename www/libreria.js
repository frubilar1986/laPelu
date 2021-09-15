// control dinamico de la forma de contacto
function contactar() {
    var telefono = document.getElementById("phone");
    if (telefono.checked == true) {
        document.getElementById("telefono").style.display = "inline";
        document.getElementById("Ltelefono").style.display = "inline";
    } else {
        document.getElementById("telefono").style.display = "none";
        document.getElementById("Ltelefono").style.display = "none";
    }

    var email = document.getElementById("email");
    if (email.checked == true) {
        document.getElementById("Lcorreo").style.display = "inline";
        document.getElementById("correo").style.display = "inline";
    } else {
        document.getElementById("Lcorreo").style.display = "none";
        document.getElementById("correo").style.display = "none";
    }
}
// limpia los box del formulario + boton reset
function limpiaBox() {

    var telefono = document.getElementById("phone");
    if (telefono.checked == true) {
        document.getElementById("telefono").style.display = "none";
        document.getElementById("Ltelefono").style.display = "none";
    }

    var correo = document.getElementById("email");
    if (correo.checked == true) {
        document.getElementById("Lcorreo").style.display = "none";
        document.getElementById("correo").style.display = "none";

    }

    document.getElementById("telefono").style.background = "white";
    document.getElementById("correo").style.background = "white";
    document.getElementById("tipoTrabajo").style.background = "white";
    document.getElementById("txtComentario").style.background = "white";
    document.getElementById("txtNombre").style.background = "white";
    document.getElementById("txtApellido").style.background = "white";
    document.getElementById("sexo").style = "font-size: 20px;color:blanchedalmond"
    document.getElementById("contact").style = "";

}

function cambiaFondoTxtNom() {
    var campo = document.getElementById("txtNombre");
    if (campo.style = "background:orangered") {
        campo.style.backgroundColor = "white";
    }
}
function cambiaFondoTxtApe() {
    var campo = document.getElementById("txtApellido");
    if (campo.style = "background:orangered") {
        campo.style.backgroundColor = "white";
    }
}
function cambiaFondoTxtSelect() {
    var campo = document.getElementById("tipoTrabajo");
    if (campo.value != "seleccionar") {
        campo.style.backgroundColor = "white";
    }
}
function cambiaFondoTxtComentario() {
    var campo = document.getElementById("txtComentario");
    if (campo.style.backgroundColor = "orangered") {
        campo.style.backgroundColor = "white";
        
    }
}

function cambiaFondotitFnac() {
    var campo = document.getElementById("titFnac");

    if (campo.style = "color:orangered;font-size:45px") {
        campo.style = "";
    }
}
function cambiaFondoBoxCorreo() {
    var campo = document.getElementById("correo");

    if (campo.style = "color:orangered") {
        campo.style = "display:inline";
    }
}
function cambiaFondoBoxTelefono() {
    var campo = document.getElementById("telefono");

    if (campo.style = "color:orangered") {
        campo.style = "display:inline";
    }
}

function validaTodo() {

    var exito = true;
    //  validacion de los input
    var campo = document.getElementById("txtNombre");

    if (campo.value == "" || !isNaN(campo.value)) {
        campo.style.background = "orangered";
        exito = false;
    }

    campo = document.getElementById("txtApellido");
    if (campo.value == "" || !isNaN(campo.value)) {
        campo.style.background = "orangered";
        exito = false;
    }
    // compruebo si los 2 radio button estan en false
    var campo1 = document.getElementsByName("sexo")[0];
    var campo2 = document.getElementsByName("sexo")[1];
    if (campo1.checked == false && campo2.checked == false) {
        document.getElementById("sexo").style = "font-size: 40px;color:red";
        exito = false;
    } else {
        document.getElementById("sexo").style = "";
    }
    // valido la forma de contacto
    var telefono = document.getElementById("phone");
    var correo = document.getElementById("email");
    if (telefono.checked == false && correo.checked == false) {
        //document.getElementById("telefono").style.background= "orangered";
        document.getElementById("contact").style = "color: orangered; font-size: 45px";
        exito = false;
    } else {
        document.getElementById("contact").style = "";
    }
    if (telefono.checked == true && document.getElementById("telefono").value == "" || telefono.checked == true && isNaN(document.getElementById("telefono").value)) {
        document.getElementById("telefono").style.background = "orangered";
        exito = false;
    }
    if (telefono.checked == true && document.getElementById("telefono").value == "" && correo.checked == true && document.getElementById("correo").value == "") {
        document.getElementById("telefono").style.background = "orangered";
        document.getElementById("correo").style.background = "orangered";
        exito = false;
    }
    var direcc = document.getElementById("correo").value;
    var arroba = direcc.indexOf("@");
    if (correo.checked == true && document.getElementById("correo").value == "" || correo.checked == true && !isNaN(document.getElementById("correo").value) || arroba == -1) {
        document.getElementById("correo").style.background = "orangered";
        exito = false;
    }



    if (telefono.checked == true && document.getElementById("telefono").value == "" && correo.checked == true && document.getElementById("correo").value == "") {
        document.getElementById("telefono").style.background = "orangered";
        document.getElementById("correo").style.background = "orangered";
        exito = false;
    }
    if (document.getElementById("tipoTrabajo").value == "seleccionar") {
        document.getElementById("tipoTrabajo").style.background = "red";
        exito = false;
    }
    if (document.getElementById("txtComentario").value == "Dejanos tu comentario" || document.getElementById("txtComentario").value == "") {
        document.getElementById("txtComentario").style.background = "orangered";
        exito = false;
    }

    if (!validaFechaN()) {
        exito = false;
    }
    return exito;


}
//  cambia el titulo los text box segun donde se haga foco
function vLanio() {

    var labelAnio = document.getElementById("lAnio");
    if (labelAnio.style = "display:none") {
        document.getElementById("lAnio").style.display = "";
        document.getElementById("lMes").style.display = "none";
        document.getElementById("lDia").style.display = "none";
    }

    //  activo textbox de mes
    var m = document.getElementById("mes");
    m.style.display = "inline";
}
function anioBisiesto(x) { //verificar si parseint va fuera o dentro sde esta fx
    var bisiesto = false;
    if (x % 4 == 0 && x % 100 != 0 || x % 100 == 0 && x % 400 == 0) {
        bisiesto = true;
    }
    return bisiesto;
}
function validaAnio() {
    var fecha = new Date();
    var anio = document.getElementById("anio");
    if (anio.value == "" || isNaN(anio.value) || parseInt(anio.value) < 1930 || parseInt(anio.value) >= fecha.getFullYear()) {
        anio.style.backgroundColor = "orange";
        anio.select();
        anio.focus();
    } else {
        anio.style.backgroundColor = "lightgreen";
    }
}
function validaMes() {
    var mes = document.getElementById("mes");
    if (mes.value < 1 || mes.value > 12 || isNaN(mes.value) || mes.value == "") {
        mes.style.background = "orange";
        mes.select();
        mes.focus();
    } else {
        mes.style.background = "lightgreen";
    }
}

function validaDia() {
    var dia = document.getElementById("dia");

    var bisiesto = anioBisiesto(parseInt(document.getElementById("anio").value));
    var mes = parseInt(document.getElementById("mes").value);
    if ((mes == 2 && parseInt(dia.value) == 29 && !bisiesto) || mes == 2 && parseInt(dia.value) > 29 || parseInt(dia.value) < 1 || parseInt(dia.value) > 31 || dia.value == "") {
        dia.style.backgroundColor = "orange";
        dia.select();
        dia.focus();
        document.getElementById("btn_enviar").disabled = true;
    } else {
        if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            if (parseInt(dia.value) == 31) {
                dia.style.backgroundColor = "orange";
                document.getElementById("btn_enviar").disabled = true;
                dia.select();
                dia.focus();

            } else {
                dia.style.backgroundColor = "lightgreen";
                document.getElementById("btn_enviar").disabled = false;
            }
        } else {
            dia.style.backgroundColor = "lightgreen";
            document.getElementById("btn_enviar").disabled = false;

        }

    }
}

//cambia estado del label segun el foco
function vMes() {
    var labelAnio = document.getElementById("lAnio");
    if (labelAnio.style = "display:inline") {
        labelAnio.style = "display:none";
        document.getElementById("lMes").style.display = "inline";
        document.getElementById("lDia").style.display = "none";
    }
    var m = document.getElementById("dia");
    m.style.display = "inline";
}

function vDia() {
    var labelMes = document.getElementById("lMes");
    if (labelMes.style = "display:inline") {
        labelMes.style = "display:none";
        document.getElementById("lDia").style.display = "inline";
        document.getElementById("lAnio").style.display = "none";
    }
}


function validaFechaN() {
    var esMayor = true;
    var d = document.getElementById("dia").value;
    var m = document.getElementById("mes").value;
    var a = document.getElementById("anio").value;

    var fecha = new Date();
    var edad = fecha.getFullYear() - parseInt(a);
    if (m == fecha.getMonth() && d > fecha.getDay()) {
        edad = edad - 1;
    }
    if (m > fecha.getMonth()) {
        edad = edad - 1;
    }
    if (edad < 18) {

        document.getElementById("titFnac").style = "color:orangered;font-size:45px";
        document.getElementById("dia").style.backgroundColor = "orangered";
        document.getElementById("mes").style.backgroundColor = "orangered";
        document.getElementById("anio").style.backgroundColor = "orangered";
        var esMayor = false;
        alert("DEBE SER MAYOR DE EDAD PARA REALIZAR SOLICITUD");

    }
    return esMayor;
}



function enviar() {
    if (validaTodo()) {
        limpiaBox();
        alert("datos cargados exitosamente!!")
        location.reload();
    } else {
        // validaTodo();
    }
}


            //  
