 // Aquí tu código.
 //lista--> donde tiene que salir lo elementos
 //agregar --> boton click 

const botonAceptar = document.getElementById("agregar");
const lista = document.getElementById("lista")


function addElement () {
    const tareas = prompt("ingresa lo que quieres recordar")
    if(tareas) {
      
       lista.insertAdjacentHTML("beforeend", "<li><p>"+ tareas + "</li></p>")
       
    } else {
        alert("Tienes que ingresar alguna información")
    }
};

agregar.addEventListener("click", addElement);
