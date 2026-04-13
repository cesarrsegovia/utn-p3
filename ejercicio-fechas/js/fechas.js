$(document).ready(function() {
    $('#btnEdad').click(function() {
        let fechaNacimiento = new Date($('#fechaNacimiento').val());
        let fechaActual = new Date();
        
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        
        $('#edad').val(edad + " años");
    });
    
    $('#btnReset').click(function() {
        $('#fechaNacimiento').val("");
        $('#edad').val("");
    });
});
