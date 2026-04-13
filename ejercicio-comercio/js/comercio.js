$(document).ready(function() {
    $('.articulo').change(function() {
        let id = $(this).attr('id');
        let num = id.replace('articulo', '');
        let precio = $(this).val();
        
        if (precio !== "") {
            $('#precioUnitario' + num).val(precio);
        } else {
            $('#precioUnitario' + num).val("");
            $('#cantidad' + num).val("");
            $('#subtotal' + num).val("");
        }
    });
    
    $('#btnSubtotal').click(function() {
        for (let i = 1; i <= 3; i++) {
            let cantidad = parseInt($('#cantidad' + i).val());
            let precio = parseFloat($('#precioUnitario' + i).val());
            
            if (!isNaN(cantidad) && !isNaN(precio)) {
                let subtotal = cantidad * precio;
                $('#subtotal' + i).val(subtotal);
            }
        }
    });
    
    $('#btnTotal').click(function() {
        let total = 0;
        
        for (let i = 1; i <= 3; i++) {
            let cantidad = parseInt($('#cantidad' + i).val());
            let precio = parseFloat($('#precioUnitario' + i).val());
            
            if (!isNaN(cantidad) && !isNaN(precio)) {
                let subtotal = cantidad * precio;
                $('#subtotal' + i).val(subtotal);
                total += subtotal;
            }
        }
        
        $('#total').val(total);
    });
    
    $('#btnReset').click(function() {
        $('.articulo').val("");
        $('.cantidad').val("");
        $('.precioUnitario').val("");
        $('.subtotal').val("");
        $('#total').val("");
    });
});
