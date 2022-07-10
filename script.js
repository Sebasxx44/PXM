

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
        slidesToScroll: 1 ,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente',
        },

        responsive: [
            // {
            //   // screens greater than >= 775px
            //   breakpoint: 600,
            //   settings: {
            //     // Set to `auto` and provide item width to adjust to viewport
            //     slidesToShow: '3',
            //     slidesToScroll: '1',
            //     itemWidth: 150,
            //     duration: 0.25
            //   }
            // },
            {
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                itemWidth: 100,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 200,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: '1',
                itemWidth: 60,
                duration: 0.25
              }
            }
          ]

      });
})

if(document.querySelector('#container-slider')){
  setInterval('fntExecuteSlide("next")',5000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.preventDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        fntExecuteSlide(arrItem[1]);
        return false;
     });
   });
}

//SLIDER DEPELICULA PRINCIPAL

function fntExecuteSlide(side){
   let parentTarget = document.getElementById('slider');
   let elements = parentTarget.getElementsByTagName('li');
   let curElement, nextElement;

   for(var i=0; i<elements.length;i++){

       if(elements[i].style.opacity==1){
           curElement = i;
           break;
       }
   }
   if(side == 'prev' || side == 'next'){

       if(side=="prev"){
           nextElement = (curElement == 0)?elements.length -1:curElement -1;
       }else{
           nextElement = (curElement == elements.length -1)?0:curElement +1;
       }
   }else{
       nextElement = side;
       side = (curElement > nextElement)?'prev':'next';

   }
   //RESALTA LOS PUNTOS
   let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
   elementSel[curElement].classList.remove("item-select-slid");
   elementSel[nextElement].classList.add("item-select-slid");
   elements[curElement].style.opacity=0;
   elements[curElement].style.zIndex =0;
   elements[nextElement].style.opacity=1;
   elements[nextElement].style.zIndex =1;
}






