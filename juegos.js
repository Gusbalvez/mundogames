/*Generar un json de videojuegos.entre cinco y diez juegos.  
id, nombre, tipo, multijugador, empresa, año 
Dentro del html, generar un buscador de los juegos, si encuentra el juego mostrar los datos en un bloque y una imagen del juego.
Opcional: Mostrar un link con un video de youtube que tenga el trailer del juego.*/
let productos ={
    "arrayJuegos":[{
            "idJuegos":01,
            "nombreJuegos":"Super Mario Bros",
            "tipoJuegos":"1 o 2 Jugadores no simultaneos",
            "generoJuegos":"Aventura",
            "plataformaJuegos":"Pc, Movil, Consolas(Wii, N3DS, WiiU)",
            "desarrolladorJuegos":"Nintendo EAD",
            "anhoJuegos":1985
        },
        {
            "idJuegos":02,
            "nombreJuegos":"The Sims 4",
            "tipoJuegos":"1 Jugador",
            "generoJuegos":"Rol, Simulacion",
            "plataformaJuegos":"Pc, PlayStation 4, Xbox One",
            "desarrolladorJuegos":"EA",
            "anhoJuegos":2014
        },
        {
            "idJuegos":03,
            "nombreJuegos":"FiFa 21",
            "tipoJuegos":"1 Jugado o Multijugados",
            "generoJuegos":"Deportes",
            "plataformaJuegos":"Pc, PlayStation (2, 3, 4, 5), Xbox",
            "desarrolladorJuegos":"EA",
            "anhoJuegos":2020
        },
        {
            "idJuegos":04,
            "nombreJuegos":"Need For Speed Heat",
            "tipoJuegos":"1 o 2 Jugadores, Online",
            "generoJuegos":"Accion, Carreras",
            "plataformaJuegos":"Pc, PlayStation 4, Xbox",
            "desarrolladorJuegos":"EA",
            "anhoJuegos":2019
        },
        {
            "idJuegos":05,
            "nombreJuegos":"Battlefield V",
            "tipoJuegos":"1 Jugador o Multijugador",
            "generoJuegos":"Disparos, Accion",
            "plataformaJuegos":"Pc, PlayStatio 4, Xbox",
            "desarrolladorJuegos":"DICE & EA",
            "anhoJuegos":2018
        },
        {
            "idJuegos":06,
            "nombreJuegos":"Drago Age Inquisition",
            "tipoJuegos":"1 jugador",
            "generoJuegos":"Rol, Accion",
            "plataformaJuegos":"Pc, PlayStatio (3, 4), Xbox",
            "desarrolladorJuegos":"BioWare",
            "anhoJuegos":2014
        },
        {
            "idJuegos":07,
            "nombreJuegos":"Jump Force",
            "tipoJuegos":"1 Jugador o Multijugador",
            "generoJuegos":"Rol, Lucha",
            "plataformaJuegos":"Pc, PlayStatio 4, Xbox",
            "desarrolladorJuegos":"Bandai Namco",
            "anhoJuegos":2019
        },
        {
            "idJuegos":08,
            "nombreJuegos":"Mortal Kombat 11",
            "tipoJuegos":"1 Jugador o Multijugador",
            "generoJuegos":"Lucha",
            "plataformaJuegos":"Pc, PlayStatio (4, 5), Xbox, Nintendo Switch",
            "desarrolladorJuegos":"NetherRealm Studios",
            "anhoJuegos":2019
        },
        {
            "idJuegos":09,
            "nombreJuegos":"Naruto Shippūden: Ultimate Ninja Storm 4",
            "tipoJuegos":"1 Jugador o Multijugador",
            "generoJuegos":"Lucha, Accion, Aventura",
            "plataformaJuegos":"Pc, PlayStation 4, Xbos One",
            "desarrolladorJuegos":"Bandai Namco",
            "anhoJuegos":2016
        },
        {
            "idJuegos":10,
            "nombreJuegos":"X-Men Legends II: Rise of Apocalypse",
            "tipoJuegos":"1 Jugador o Multijugador",
            "generoJuegos":"Accion, Rol",
            "plataformaJuegos":"Pc, PlayStation 2, PSP, Xbox",
            "desarrolladorJuegos":"Raven Software",
            "anhoJuegos":2005
        }
       
    ]
}
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("boton").addEventListener("click", interno);


function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all')
    document.getElementById("show-menu").classList.toggle('show-lateral')
}
//ejecuntando funciones//
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Bucador//
let bars_search = document.getElementById("ctn-bars-search");
let cover_ctn_search = document.getElementById("cover-ctn-search");
let inpuntSearch = document.getElementById("inpuntSearch");
let box_search = document.getElementById("box-search");

//Funcion para el buscador//
function mostrar_buscador(){
    bars_search.style.top="80px";
    cover_ctn_search.style.display="block";
    inputSearch.focus();
}

function interno(){
    const formulario = document.querySelector('#inputSearch');
    const boton = document.querySelector('#boton');
    const resultado = document.querySelector('#resultado');


        console.log(formulario.value);
        resultado.innerHTML = '';
        const texto = formulario.value.toLowerCase();
}


        /*for (let producto of arrayJuegos){
            let nombreJuegos = producto.nombreJuegos.toLowerCase();
            if(nombreJuegos.indexOf(texto) !==-1){
                resultado.innerHTML += `
                <li>${productos.nombreJuegos} - Valor: ${productos.valor}</li>`
            }
        }
        if (resultado.innerHTML ===''){
            resultado.innerHTML += `
            <li>Juego no encontrado...</li>
            `
        }*/


//funcion para ocultar buscador//
function ocultar_buscador(){
    bars_search.style.top="-10px";
    cover_ctn_search.style.display="none";
}