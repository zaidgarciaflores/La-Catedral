(function(){

    var propiedadesTabs = {
        primer_encabezado: document.getElementById("encabezado-menu").firstElementChild,
        primer_contenido: document.getElementById("contenido-menu").firstElementChild,

        enlances_encabezado: document.querySelectorAll("#encabezado-menu li a"),

        li_encabezado: document.querySelectorAll("#encabezado-menu li"),
        divs_contenido: document.querySelectorAll("#contenido-menu > div"),
        contenido_activo: null
    }

    var metodosTabs = {

        inicio: function(){
            propiedadesTabs.primer_encabezado.className = "active";
            propiedadesTabs.primer_contenido.className = "active";

            for(var i = 0; i < propiedadesTabs.enlances_encabezado.length; i++){
                propiedadesTabs.enlances_encabezado[i].addEventListener("click", metodosTabs.evento);
            }
        },

        evento: function(e){
            e.preventDefault();

            for(var i = 0; i < propiedadesTabs.li_encabezado.length; i++){
                propiedadesTabs.li_encabezado[i].className = "";
            }

            for(var i = 0; i < propiedadesTabs.divs_contenido.length; i++){
                propiedadesTabs.divs_contenido[i].className = "";
            }

            this.parentElement.className = "active";
            propiedadesTabs.contenido_activo = this.getAttribute("href");
            document.querySelector(propiedadesTabs.contenido_activo).className = "active";
            document.querySelector(propiedadesTabs.contenido_activo).style.opacity = 0;

            setTimeout(function(){
                document.querySelector(propiedadesTabs.contenido_activo).style.opacity = 1;
            }, 100);
        }
    }

    metodosTabs.inicio();
}())