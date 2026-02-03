let opciones = ["Piedra", "Papel", "Tijera"]


let matriz = [
   ["e",    "g",    "p"],    //fila:computadora
   ["p",    "e",    "g"],   //columna: jugador
   ["g",    "p",    "e"]
]

    function jugar(eleccionJugador) {

        let eleccionComputadora = Math.floor(Math.random() * 3) 

        let mensajeResultado = "La computadora eligió: " + opciones[eleccionComputadora] + "<br>"

        let resultadoPartida= matriz[eleccionComputadora][eleccionJugador]

        if (resultadoPartida == "g") {
            mensajeResultado+= "Ganaste!🥳"
            
        } else if( resultadoPartida=="p") {
            mensajeResultado+= "Perdiste🤬"

        } else {
            mensajeResultado+= "Empataste🤝" 
        }
       
        document.getElementById("mensajeResultado").innerHTML = mensajeResultado

        document.getElementById("btnReintentar").style.display = "block"


        let botonesJuego = document.querySelectorAll(".botones button")
        botonesJuego.forEach(function(boton){
            boton.disabled = true;
        })

    }

    function reintentar(){
         document.getElementById("mensajeResultado").innerHTML = ""
         document.getElementById("btnReintentar").style.display = "none"

         let botonesJuego = document.querySelectorAll(".botones button")
         botonesJuego.forEach(function(boton){
         boton.disabled = false;
        })

    }
