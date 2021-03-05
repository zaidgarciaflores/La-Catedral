(function(){


    // Propiedades del slider //
    var propiedadesSlider = {
        slider: document.getElementById("slider"),
        primerSlide: null
    }

    
    // Métodos del slide //
    var metodosSlider = {

        inicio: function(){
            setInterval(metodosSlider.moverSlider, 5000);
        },

        moverSlider: function(){
            propiedadesSlider.slider.style.transition = "all 1s ease";
            propiedadesSlider.slider.style.marginLeft = "-100%";

            setTimeout(function(){
                propiedadesSlider.primerSlide = propiedadesSlider.slider.firstElementChild;
                propiedadesSlider.slider.appendChild(propiedadesSlider.primerSlide);

                propiedadesSlider.slider.style.transition = "unset";
                propiedadesSlider.slider.style.marginLeft = "0";
            }, 1500);
        }
    }

    metodosSlider.inicio();
}())