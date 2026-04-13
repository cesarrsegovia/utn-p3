$(document).ready(function() {
    console.log("Documento listo");
    $("#serie").change(function() {
        let serieElegida = $("#serie").val();  //obtenemos un valor del select
        switch (parseInt(serieElegida)) {
            case 1:
                $("#dia").val("Lunes");
                $("#horario").val("18:00");
                break;
            case 2:
                $("#dia").val("Martes");
                $("#horario").val("19:00"); 
                break;
            case 3:
                $("#dia").val("Miércoles");
                $("#horario").val("18:00");
                break;
            case 4:
                $("#dia").val("Jueves");
                $("#horario").val("20:00");
                break;
            default:
                break;
        }
    });
});