$(document).ready(function() {
    console.log("Calculadora lista");

    $("#suma").click(function(){
        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());
        let resultado = num1 + num2;
        $("#resultado").val(resultado);
    });

    $("#resta").click(function(){
        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());
        let resultado = num1 - num2;
        $("#resultado").val(resultado);
    });

    $("#multiplicacion").click(function(){
        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());
        let resultado = num1 * num2;
        $("#resultado").val(resultado);
    });

    $("#division").click(function(){
        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());
        if(num2 !== 0){
            let resultado = num1 / num2;
            $("#resultado").val(resultado);
        } else {
            alert("No se puede dividir por cero");
            $("#resultado").val("");
        }   
    });

    $("#eliminar").click(function(){
        $("#num1").val("");
        $("#num2").val("");
        $("#resultado").val("");
    });

});