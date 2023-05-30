
let personaje = document.getElementById("personaje");
let fondo = document.getElementById("fondo");
let puntaje = 0;
let score = document.getElementById("score");

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

let enemigo = document.getElementById("enemigoPadre");


function checkCollision() {
   
    const rect2 = personaje.getBoundingClientRect();
    const rect1 = enemigo.getBoundingClientRect();
    //document.getElementById('display').innerHTML = '';
    // Verificar si hay colisión
    console.log("verificando colision")
    if (!(rect1.right < (rect2.left  ||
        rect1.left > (rect2.right-50) ||
        rect1.bottom < (rect2.top-50)||
        rect1.top > rect2.bottom))) {
        
            if(enemigo.firstChild.classList.contains("enemigo")){
               
                console.log("enemigo comun");

            }
            else if(enemigo.firstChild.classList.contains("enemigoDos")){
                console.log("enemigo rojo");
            }
        puntaje -= 10;
        score.innerHTML = puntaje;
        
    }
}

function checkColisionBonus(){
    const rect1 = personaje.getBoundingClientRect();
    const rect2 = document.getElementById("bonus").getBoundingClientRect();
    if (!(rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top||
    rect1.top > rect2.bottom)) {
        console.log("colision con bonus");
        puntaje += 10;
        score.innerHTML = puntaje;

    }

}

let enemigos = ["enemigo", "enemigoDos", "enemigo", "enemigoDos", "enemigoDos"];

//creo una funcion que toma los enemigos del arreglo y los va generando por pantalla
function generarEnemigos() {

        let enemigoActual = document.createElement("div");
        enemigoActual.classList.add(enemigos[0]);
        enemigoActual.id = "enemigo";
        let actual = enemigos.shift();
        enemigo.appendChild(enemigoActual);
        enemigos.push(actual);
    
    }

function generarBonus(){
    let bonus = document.createElement("div");
    bonus.classList.add("bonus");
    bonus.id = "bonus";
    bonus.innerHTML = "";
    fondo.appendChild(bonus);
}


setInterval(generarEnemigos, 3000);
setInterval(function(){
    enemigo.removeChild(enemigo.firstChild);},3050);
    setInterval(checkCollision, 50);

setInterval(function(){
    generarBonus();
    setInterval(checkColisionBonus, 500);
    document.getElementById("bonus").remove();
}, 3000)
;




