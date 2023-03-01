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
                let category = $('#category').val();
                let selling_price = $('#selling-price').val();
                let purchase_price = $('#purchase-price').val();
                // Validaciones, dependiedo del input, sera el modal expuesto
                if (code != '' && name != '' && category != '' && selling_price != '' && purchase_price != '') {
                    // location.href = '#'
                    Toast.fire({
                        icon: 'success',
                        title: 'Producto registrado exitosamente'
                    })
                } else if (code == '' || name == '' || category == '' || selling_price == '' || purchase_price == '') {
                    Toast.fire({
                        icon: 'info',
                        title: 'Datos Incompletos'
                    })
                }
            }
        )
    }
)