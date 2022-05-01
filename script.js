

// EJECUNTANDO FUNCIONES

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);



// DECLRANDO VARIABLES

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

// FUNCION PARA MOSTRAR EL BUSCADOR

function mostrar_buscador(){
    bars_search.style.top= "50px";
    cover_ctn_search.style.display ="block"
    inputSearch.focus();
    
    if(inputSearch.value === ""){
        box_search.style.display = "none"
    }
}

// FUNCION PARA OCULTAR EL BUSCADOR

function ocultar_buscador(){
    bars_search.style.top= "-30px";
    cover_ctn_search.style.display ="none";
    inputSearch.value="";
    box_search.style.display = "none"

}

// CREANDO FILTRADO DE BUSQUEDA


document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){

filter = inputSearch.value.toUpperCase();
li = box_search.getElementsByTagName("li");

// RECORRIENDO ELEMENTOS AL FILTRAR MEDIANTE LOS LI

for (i = 0; i < li.length; i++){

    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if(textValue.toUpperCase().indexOf(filter) > -1){

        li[i].style.display = "";
        box_search.style.display = "block";

        if(inputSearch.value === ""){
            box_search.style.display = "none"
        }

    }else{
        li[i].style.display = "none";
    }
}

}

// CAROUSEL


window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente',
        },

        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 600,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '3',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 200,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '1',
                itemWidth: 60,
                duration: 0.25
              }
            }
          ]

      });
})



