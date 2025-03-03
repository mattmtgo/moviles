function cambio() {
    document.getElementById("fondo").classList.add("rojo")
}

function texto() {
    document.getElementById("Textouno").innerHTML = "cambio";
    document.getElementById("Textodos").innerHTML = "cambio";
    document.getElementById("Textotres").innerHTML = "cambio";
}

function verificarn() {
    const numero = document.getElementById("numero").value;
    if (numero > 10) {
        alert("El numero es mayor a 10")
    }
}

var usuario = {
    nombre: "mateo",
    edad: 33,
    correo: "matte.@gmail.com"
}
function miobjeto() {
    document.getElementById("datos").innerHTML = `nombre ${usuario.nombre} edad ${usuario.edad} y correo ${usuario.correo}`
}

function lista() {
    
    var notas = ["miguel", "daniel", "paula", "santiago", usuario.nombre];
    for(var i = 0; i<notas.length; i++){
        console.log(i)
    }
    document.getElementById("la-lista").innerHTML+=`<li>${notas[i]}</li>`
}