// Array con objetos, almacenan los datos de los socios ya existentes
const socios = [
    {nombre: "Fabricio", apellido: "Caceres", numeroDeSocio: 1001, edad: 32},
    {nombre:"Pablo", apellido: "Lopez", numeroDeSocio: 1002, edad: 12},
    {nombre:"Laura", apellido: "Benitez", numeroDeSocio:1003, edad: 23}
    ];
    
    // Funcion para definir la categoria
    function definirCategoriaYprecio(edad){
        let categoria;
        let precio;
    
        if (edad <=11 ){
            categoria = "infantil";
            precio = 1500;
        } else if (edad <=17){
            categoria = "cadete";
            precio = 2000;
        } else {
            categoria = "pleno";
            precio = 3000;
        }
        return {categoria, precio};
    }
    
    //Funcion para dar la bienvenida al socio ya existente.
    function darBienvenida(numeroSocio) {
        for (let i = 0; i < socios.length; i++) {
            if (socios[i].numeroDeSocio === numeroSocio) {
                let { nombre, apellido, edad } = socios[i];
                let { categoria, precio } = definirCategoriaYprecio(edad);
                return "Bienvenido/a " + nombre + " " + apellido + "!\n" +
                    "Tu categoría de socio es: " + categoria + "\n" +
                    "El precio de tu cuota mensual es: $" + precio;
            }
        }
        return "Número de socio no encontrado.";
    }
    
    //Funcion para asociarse
    function asociarse() {
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        let edad = parseInt(prompt("Ingrese su edad:"));
    
    // Generar número de socio contiguo al último número de socio existente
        let ultimoNumeroSocio = socios[socios.length - 1].numeroDeSocio;
        let nuevoNumeroSocio = ultimoNumeroSocio + 1;
    
    // Agregar nuevo socio al array de socios
        socios.push({ nombre, apellido, numeroDeSocio: nuevoNumeroSocio, edad });
    
    let { categoria, precio } = definirCategoriaYprecio(edad);
        return "Te has asociado exitosamente a Club Training!\n" +
            "Tu nombre: " + nombre + "\n" +
            "Tu apellido: " + apellido + "\n" +
            "Tu edad: " + edad + "\n" +
            "Tu número de socio: " + nuevoNumeroSocio + "\n" +
            "Tu categoría de socio es: " + categoria + "\n" +
            "El precio de tu cuota mensual es: $" + precio;
    }
    
    for (let i = 1; i <= 3; i++) {
        let ingresarNumSoc = parseInt(prompt("Bienvenido/a a Club Training\nIngrese su número de socio:"));
        let mensajeBienvenida = darBienvenida(ingresarNumSoc);
        if (mensajeBienvenida !== "Número de socio no encontrado.") {
            alert(mensajeBienvenida);
            break;
        } else {
            let deseaAsociarse = confirm("Usted no es socio. ¿Desea asociarse al club?");
            if (deseaAsociarse) {
                alert(asociarse());
                break;
            } else {
                alert("Gracias por visitarnos.");
                break;
            }
        }
    }
    
    
    console.log (socios)
    