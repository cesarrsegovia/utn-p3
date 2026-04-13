$(document).ready(function() {
    $('#btnPrestamo').click(function() {
        let libro = $('#libro').val();
        
        if (libro === "") {
            alert("Seleccione un libro");
            return;
        }
        
        let fechaActual = new Date();
        let fechaDevolucion = new Date(fechaActual);
        fechaDevolucion.setDate(fechaDevolucion.getDate() + 5);
        
        let fechaFormateada = fechaDevolucion.getDate() + "/" + 
                              (fechaDevolucion.getMonth() + 1) + "/" + 
                              fechaDevolucion.getFullYear();
        
        if (libro === "Divergente" || libro === "Insurgente") {
            $('#situacion').val("Sólo lectura en sala");
            $('#fechaDevolucion').val("");
        } else if (libro === "Frozen" || libro === "Sirenas") {
            $('#situacion').val("Para préstamo");
            $('#fechaDevolucion').val(fechaFormateada);
        }
    });
    
    $('#btnReset').click(function() {
        $('#libro').val("");
        $('#situacion').val("");
        $('#fechaDevolucion').val("");
    });
});
