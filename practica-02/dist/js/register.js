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
                let user = $('#user').val();
                let password = $('#password').val();
                let password_again = $('#password-again').val();
                // Validaciones, dependiedo del input, sera el modal expuesto
                if (user != '' && password != '' && password == password_again) {
                    // location.href = '#'
                    Toast.fire({
                        icon: 'success',
                        title: 'Usuario registrado exitosamente'
                    })
                } else if (user == '' || password == '' || password_again == '') {
                    Toast.fire({
                        icon: 'info',
                        title: 'Datos Incompletos'
                    })
                } else if (user != '' && password != '' && password != password_again) {
                    Toast.fire({
                        icon: 'error',
                        title: 'Contraseñas Incorrectas'
                    })
                }
            }
        )
    }
)