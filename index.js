document.getElementById("iconoinsta").onclick = function() {
window.open("https://www.instagram.com/kenzopastran/")
}

document.getElementById("iconoface").onclick = function() {
    window.open("https://www.facebook.com/kenzopastran/")
    }

document.getElementById("iconowhats").onclick = function() {
        window.open("https://api.whatsapp.com/send/?phone=5491122850676&text&type=phone_number&app_absent=0")
        }

document.getElementById("iconosound").onclick = function() {
        window.open("https://soundcloud.com/silversteam")
            }




let Botonestudios = document.getElementById("Botonestudios");

let Botonexperiencia = document.getElementById("Botonexperiencia");

let Botonsobremi = document.getElementById("Botonsobremi");

let Botonhabilidades = document.getElementById("Botonhabilidades");

let Botondatos = document.getElementById("Botondatos");

let Hide_estudios = document.getElementById("Hide_estudios");

Botonestudios.addEventListener("click", cambiarTexto1);


function cambiarTexto1(){
    Hide_estudios.classList.toggle("show")
}

Botonexperiencia.addEventListener("click", cambiarTexto2);

function cambiarTexto2(){
    Hide_experiencia.classList.toggle("show")
}

Botonsobremi.addEventListener("click", cambiarTexto3);

function cambiarTexto3(){
    Hide_sobremi.classList.toggle("show")
}

Botonhabilidades.addEventListener("click", cambiarTexto4);

function cambiarTexto4(){
    Hide_habilidades.classList.toggle("show")
}

Botondatos.addEventListener("click", cambiarTexto5);

function cambiarTexto5(){
    Hide_datos.classList.toggle("show")
}

