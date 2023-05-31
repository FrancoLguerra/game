let personaje = document.getElementById("personaje");
let enemigo = document.getElementByid("enemigo");




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