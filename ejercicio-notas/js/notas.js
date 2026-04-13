$(document).ready(function() {
    $('#boton').click(function() {
        let nota1 = parseInt($('#nota1').val());
        let nota2 = parseInt($('#nota2').val());
        let asistencia = parseInt($('#asistencia').val());
        if (nota1 >= 6 && nota2 >= 6 && asistencia >= 70) {
            $('#estado').val("Regular");
        } else if((nota1 < 6 || nota2 < 6) && asistencia >= 70) {
            $('#estado').val("Desaprobado");
        } else if ((nota1 < 6 || nota2 < 6) && asistencia < 70) {
            $('#estado').val("Libre");
        }
    });
    $('#reset').click(function() {
        $('#nota1').val("");
        $('#nota2').val("");
        $('#asistencia').val("");
        $('#estado').val("");
    })
});