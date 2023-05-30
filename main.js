let personaje = document.getElementById("personaje");
let enemigo = document.getElementByid("enemigo");

function checkCollision() {
    debugger;
    const rect1 = personaje.getBoundingClientRect();
    const rect2 = enemigo.getBoundingClientRect();
    document.getElementById('display').innerHTML = '';
    // Verificar si hay colisión
    if (!(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)) {
        //document.getElementById('display').innerHTML = '¡Colisión detectada!';
        console.log('¡Colisión detectada!');
    }
}


let enemigos = ["enemigo", "enemigo2", "enemigo", "enemigo2", "enemigo2"];

//creo una funcion que toma los enemigos del arreglo y los va generando por pantalla
function generarEnemigos() {
    for (let i = 0; i < enemigos.length; i++) {
        let enemigo = document.createElement("div");
        enemigo.classList.add(enemigos[i]);
        enemigo.id = "enemigo" + i;
        document.getElementById("fondo").appendChild(enemigo);
    }
}




serInterval(checkCollision, 1000);