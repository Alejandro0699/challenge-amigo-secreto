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

        //obtenemos el valor del input y eliminamos los espacios en blanco (para eso se utliza el trim.)
        let amigo= inputNombres.value.trim();

        // validamos si el input esta vacio  y luego la retornamos para detener la funcion.
        listaDeNombres.push(amigo);
        if (amigo === ""){
            alert("Por favor ingrese un nombre valido.");
            return;
        }
        //Evitamos nombres duplicados, usando el includes que sirve para verificar si ya existe el mismo nombre 
        if (listaDeNombres.includes(amigo)){
            alert("por favor ingrese un nombre nuevo");
            return;
        }
        //agregamos los nombres de la lista utilizando el push
        listaDeNombres.push(amigo);
        //limpiamos el input. Para po
        inputNombres.value="";
        }
        
        //creamos la funcion para actualizar la lista de nombres. utilizamos la lista UL y despues usamos el innerHTML para limpiar la lista antes de agregar un nuevo nombre
        function actualizarLista(amigos) {
            listaAmigosUL= document.getElementById("listaAmigos");
            listaAmigosUL.innerHTML = "";
            // utilizamos el bucle for para recorrer la lista completa i=0 significa que comienza en el primer nombre, despues significa que va a recorrer toda la lista y i++ significa que va a incrementar con cada interaccion 
             for (let i= 0; i<listaDeNombres.length; i++ );

                // tenemos que crear el elemento <li> para eso creamos una nueva variable
            let nuevoElemento= document.createElement ("li");
            //el nuevoElemento.textContent coloca los nombres en la lista <li>
            nuevoElemento.textContent= listaDeNombres[i];
            
        


        }
