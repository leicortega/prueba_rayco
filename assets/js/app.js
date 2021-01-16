function calcular(e) {
    e.preventDefault();

    console.log(Number.isInteger($('#num_1').val()))

    if (validate_data()) {
        $.ajax({
            url: '/assets/php/operar.php',
            type: 'POST',
            data: $('#formulario').serialize(),
            success: function (data) {
                if (data == 'error') {
                    $('#resultado').val('Ocurrio un error, intente de nuevo.').addClass('is-invalid').removeClass('is-valid');
                } else {
                    $('#resultado').val(data).addClass('is-valid').removeClass('is-invalid');
                }
            }
        });
    } else {
        $('#resultado').val('Ocurrio un error, intente de nuevo.').addClass('is-invalid');
    }
    
}

function validate_data() {
    let errors = 0;

    if (Number.isInteger(parseInt($('#num_1').val()))) {
        $('#num_1').addClass('is-valid').removeClass('is-invalid');
    } else {
        $('#num_1').addClass('is-invalid').removeClass('is-valid');
        errors++;
    }

    if (Number.isInteger(parseInt($('#num_2').val())) && parseInt($('#num_2').val()) > 0) {
        $('#num_2').addClass('is-valid').removeClass('is-invalid');
    } else {
        $('#num_2').addClass('is-invalid').removeClass('is-valid');
        errors++;
    }

    if ($('#operacion').val() == '') {
        $('#operacion').addClass('is-invalid').removeClass('is-valid');
        errors++;
    } else {
        $('#operacion').addClass('is-valid').removeClass('is-invalid');
    }

    if (errors == 0) {
        return true;
    }
}