
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
   
    const rect1 = personaje.getBoundingClientRect();
    const rect2 = enemigo.firstChild.getBoundingClientRect();

    console.log("verificando colision")
    if (!((rect1.right-50) < (rect2.left -50)  ||
        (rect1.left-50) > (rect2.right) ||
        (rect1.bottom-50) < (rect2.top)||
        (rect1.top-50) > (rect2.bottom))){
        
            if(enemigo.firstChild.classList.contains("enemigo")){
               
                console.log("enemigo comun");
                discountHealth();

            }
            else if(enemigo.firstChild.classList.contains("enemigoDos")){
                console.log("enemigo rojo");
                discountHealth();

            }
            
           
        }
}

function checkColisionBonus(){
    const rect2 = personaje.getBoundingClientRect();
    const rect1 = document.getElementById("bonus").getBoundingClientRect();
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
function timer(){
    let time = 90;
    let timer = document.getElementById("timer");
    let interval = setInterval(function(){
        timer.innerHTML = time;
        time--;
        if(time < 0){
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}


setInterval(function(){
    generarEnemigos();
    setInterval(checkCollision, 50);
    enemigo.removeChild(enemigo.firstChild);
},6050);

setInterval(function(){
    generarBonus();
    setInterval(checkColisionBonus, 50);
    document.getElementById("bonus").remove();
}, 10000);

let barra = document.getElementById("health");
function discountHealth(){

    if(!barra.childElementCount <= 0){
   barra.removeChild(barra.lastChild);
    console.log(barra);}
    else{
       gameOver();
    }
};
timer();


function gameOver(){
   //detengo todas las animaciones y elimino los enemigos
    personaje.classList.remove("correr");
    personaje.classList.remove("saltar");
  

    //elimino el personaje
    personaje.remove();
    personaje.removeEventListener("animationend", () => {});
    //elimino los bonus
    document.getElementById("bonus").remove();
    enemigo.classList.remove("enemigo");
    enemigo.classList.add("none")
    let gameOver = document.createElement("div");
    gameOver.classList.add("gameOver");
    gameOver.id = "gameOver";
    gameOver.innerHTML = 'GAME OVER <br>' + 'Puntaje: ' + puntaje + '<br>'+'<p><button class="btn" onclick="location.reload()">Reiniciar</button></p>' ;
    fondo.appendChild(gameOver);
    
}

//funcion que muestra el tiempo y lo va decrementando






