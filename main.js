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

serInterval(checkCollision, 1000);