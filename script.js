document.getElementById("toggleButton").addEventListener("click", function() {
    var toggleText = document.getElementById("toggleText");
    var buttonText = document.getElementById("toggleButton");
    
    if (toggleText.classList.contains("hidden-text")) {
        toggleText.classList.remove("hidden-text");
        buttonText.textContent = "Mostrar menos";
    } else {
        toggleText.classList.add("hidden-text");
        buttonText.textContent = "Mostrar más";
    }
});



let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("c-sharp");
        habilidades[1].classList.add("Design");
        habilidades[2].classList.add("SQL-Server");
        habilidades[3].classList.add("html");
        habilidades[4].classList.add("Bootstrap");
        habilidades[5].classList.add("aprendizaje");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("Disciplina");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

