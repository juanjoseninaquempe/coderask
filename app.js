const boton = document.querySelector("#boton");

boton.onclick = () => {
    Swal.fire(
        {
        title: "este es el titulo",
        text: "esto es un mensaje en un alert",
        icon: "success"
        }
            );
}

/// login de usuario
////// PLANTEARNOS la idea de hacerlo funcionar como un prompt

const otroBoton = document.getElementById("otroboton");

let nombreUsuario =null;
let pass = null;

otroBoton.onclick = () => {
    Swal.fire (
        {
        title: "Login",
        text: "Ingrese su mail de login",
        input: "email",
        inputPlaceholder: "Pepe@pep.com",
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((resultado) => { ///una vez que el usuario ingreso el valor en el promt y apreto algun boton
        console.log(resultado);
        if (resultado.isConfirmed) { //apreto el boton enviar?
            nombreUsuario = resultado.value;  ///me llevo el valor del input
            Swal.fire ({
                title: "Password",
                text: "ingrese su password",
                input:"password",
                confirmButtonText: "enviar",
                showCancelButton: true,
                cancelButtonText: "Me arrepenti"
            }).then((resultado) => {
                if(resultado.isConfirmed) {
                    pass = resultado.value;
                    if(pass === "") {  //si el password esta vacio 
                        Swal.fire({
                            title: "el pass es invalido",
                            icon: "error"
                        });
                    } else {
                    Swal.fire({
                        title: "Ingreso de usuario Exitoso!",
                        icon: "success"
                    });
                }
                }
            })
        }
        });
}























