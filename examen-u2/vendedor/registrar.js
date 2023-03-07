$(document).ready(
    function() {
        // Parametros del Modal
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });
        // Ejecuta funcion de validacion cuando se oprima el boton
        $('#register-button').click(
            function(event){
                event.preventDefault();
                // Guarda los valores de los campos
                let code = $('#code').val();
                let name = $('#name').val();
                let description = $('#description').val();
                let selling_price = $('#selling-price').val();
                let capture_date = $('#capture-date').val();
                let notes = $('#notes').val();
                // Validaciones, dependiedo del input, sera el modal expuesto
                if (code != '' && name != '' && description != '' && selling_price != '' && capture_date != '' && notes != '') {
                    Toast.fire({
                        icon: 'success',
                        title: 'Registro exitoso'
                    })
                } else if (code == '' || name == '' || description == '' || selling_price == '' || capture_date == '' || notes == '') {
                    Toast.fire({
                        icon: 'info',
                        title: 'Datos Incompletos'
                    })
                }
            }
        )
    }
)