 // Aquí tu código.
 //lista--> donde tiene que salir lo elementos
 //agregar --> boton click 

const botonAceptar = document.getElementById("Aceptar");
const lista = document.getElementById("lista")


function addElement () {
    const tareas = prompt("ingresa tu nombre")
    if(tareas) {
      
       lista.insertAdjacentHTML("beforeend", "<li><p>"+ tareas + "</li></p>")
       
    } else {
        alert("Tienes que ingresar algún dato")
    }
};

botonAceptar.addEventListener("botonAceptar", addElement);





  

