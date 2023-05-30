
let personaje = document.getElementById("personaje");
let fondo = document.getElementById("fondo");

document.addEventListener("keydown", function(evento) {
    console.log(personaje);
    if(personaje.classList.contains("correr")){
        personaje.classList.remove("correr");
        personaje.classList.add("saltar");


        personaje.addEventListener("animationend", function(evento) {
            console.log("termina la animacion saltar")
            personaje.classList.remove("saltar");
            personaje.classList.add("correr");
        });
    }

});

let enemigo = document.getElementById("enemigo");

function checkCollision() {
   
    const rect2 = personaje.getBoundingClientRect();
    const rect1 = enemigo.getBoundingClientRect();
    //document.getElementById('display').innerHTML = '';
    // Verificar si hay colisión
    console.log("Chequeo colision");
    console.log("enemigo",rect1)
    if (!(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)) {
        //document.getElementById('display').innerHTML = '¡Colisión detectada!';
        console.log('¡Colisión detectada!');
    }
}

setInterval(checkCollision, 2500);


