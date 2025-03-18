// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos= [];

function validarNombre(nombre){
    if (nombre === undefined || nombre === null || nombre === "") {
        return false;
    }
    return true;
}


function listarAmigos() {
    console.log("Me invocan");
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = listaDeAmigos[i];
        item.classList.add("amigo");
        lista.appendChild(item); // Agregar cada amigo como un elemento <li>
    }
   
    return;
}

function agregarAmigo(){
    let nombre = document.querySelector("#amigo").value;
    if(!validarNombre(nombre)){
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    listaDeAmigos.push(nombre);
    document.querySelector("#amigo").value ="";
    listarAmigos();
    console.log(listaDeAmigos);
    return;
}



function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    document.querySelector("#resultado").innerHTML = "El amigo sorteado es:" + amigoSorteado;
    return;
}