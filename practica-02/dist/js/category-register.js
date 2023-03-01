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
                let key = $('#key').val();
                let name = $('#name').val();
                // Validaciones, dependiedo del input, sera el modal expuesto
                if (key != '' && name != '') {
                    // location.href = '#'
                    Toast.fire({
                        icon: 'success',
                        title: 'Categoría registrada exitosamente'
                    })
                } else if (key == '' || name == '') {
                    Toast.fire({
                        icon: 'info',
                        title: 'Datos Incompletos'
                    })
                }
            }
        )
    }
)