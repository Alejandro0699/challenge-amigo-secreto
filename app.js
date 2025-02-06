// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//comenzando con el challenge

//creo la variable
let listaDeNombres=[];
//creo la funcion para alamcenar amigos
function almacenarAmigos() {
    
    //creo una variable utlizanzando variables para obtener el input de los nombres y la lista de amigos donde se almacenan en la pantalla 
    let inputNombres=  document.getElementById("amigo");
    let listaAmigosUL= document.getElementById("listaAmigos");
    //en el if utlizimos en boleanno "!" para verficiar que no existe el nombre en el input y luego lo retornamos
    if (!inputNombres) {
        console.error("no se encontro el input en el nombre");
        return
        }

        //obtenemos el valor del input y elinamos los espacios en blanco (para eso se utliza el trim.)
        let amigo= inputNombres.value.trim();

        // validamos si el input esta vacio y luego lo retornamos 
        listaDeNombres.push(amigo);
        if (amigo === ""){
            alert("Por favor ingrese un nombre valido.")
            return;
        }

    
}