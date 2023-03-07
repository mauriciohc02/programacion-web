$(document).ready(
    function () {
        // Credenciales de vendedor por defecto
        const default_user = 'vendedor';
        const default_password = 'mipssw-vend';
        // Parametros del Modal
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });
        // Ejecuta funcion de validacion cuando se oprima el boton
        $('#log-button').click(
            function(event){
                event.preventDefault();
                // Guarda los valores de los campos
                let user = $('#user').val();
                let password = $('#password').val();
                // Validaciones, dependiedo del input, sera el modal expuesto
                // Si se llena los datos correctamente permite ingresar al vendedor
                if (user == default_user && password == default_password)
                    location.href = './vendedor/dashboard.html'
                else if (user == '' || password == '') {
                    Toast.fire({
                        icon: 'info',
                        title: 'Datos Incompletos'
                    })
                } else if (user != default_user || password != default_password) {
                    Toast.fire({
                        icon: 'error',
                        title: 'Datos Incorrectos'
                    })
                }
            }
        )
    }
)