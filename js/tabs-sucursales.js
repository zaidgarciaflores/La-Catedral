(function(){

    var propiedadesTabs = {
        primer_encabezado: document.getElementById("selector-sucursales").firstElementChild,
        primer_contenido: document.getElementById("contenido-sucursales").firstElementChild,

        enlaces_selector: document.querySelectorAll("#selector-sucursales li a"),

        li_selector: document.querySelectorAll("#selector-sucursales li"),
        divs_contenido: document.querySelectorAll("#contenido-sucursales > div"),
        contenido_activo: null
    }

    var metodosTabs = {

        inicio: function(){
            propiedadesTabs.primer_encabezado.className = "active";
            propiedadesTabs.primer_contenido.className = "active";

            for(var i = 0; i < propiedadesTabs.enlaces_selector.length; i++){
                propiedadesTabs.enlaces_selector[i].addEventListener("click", metodosTabs.evento);
            }
        },

        evento: function(e){
            e.preventDefault();

            for(var i = 0; i < propiedadesTabs.li_selector.length; i++){
                propiedadesTabs.li_selector[i].className = "";
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