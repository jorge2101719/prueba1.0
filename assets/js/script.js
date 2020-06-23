// métodos de jQuery
$(function(){
    $("a").click(function(event){
        // Con este if se asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== ""){
            // Previene el comportamiento de click predeterminado
            event.preventDefault();
            // Guarda el valor del hash en una variable llamada gato
            var gato = this.hash;
            // Usa el método animate para animar el scroll (rollo) y hacerlo de una forma suave
            // El valor opciona (800) especifica el número de milisegundos que demorará en llegar hasta el área
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                //Agrega hash (#) a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
                window.location.hash = gato;
            });
        } // fin if
    });

    $('[data-toggle="popover"]').popover();
})();

/* $(function(){
    $('[data-toggle="popover"]').popover()
})();
 */
/* $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
}); */

/* $(function () {
    $('[data-toggle="tooltip"]').tooltip();
}); */

//$('.dropdown-toggle').dropdown()