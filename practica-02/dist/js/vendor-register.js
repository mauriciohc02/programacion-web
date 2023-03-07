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
                let apaterno = $('#apaterno').val();
                let amaterno = $('#amaterno').val();
                let email = $('#email').val();
                let telefono = $('#telefono').val();
                let direccion = $('#direccion').val();
                let rfc = $('#rfc').val();
                let categoria = $('#categoria').val();

                // Validaciones, dependiedo del input, sera el modal expuesto
                if (key != '' && name != '' && apaterno != '' && amaterno != '' && email != '' && telefono != '' && direccion != '' && rfc != '' && categoria != '') {
                    // location.href = '#'
                    Toast.fire({
                        icon: 'success',
                        title: 'Proveedor registrado exitosamente'
                    })
                } else if (key == '' || name == '' || apaterno == '' || amaterno == '' || email == '' || telefono == '' || direccion == '' || rfc == '' || categoria == '') {
                    Toast.fire({
                        icon: 'info',
                        title: 'Datos Incompletos'
                    })
                }
            }
        )
    }
)