//funcion para identificar la categoria del socio
function definirCategoriaYPrecio(edad) {
    let categoria;
    let precio;

    if (edad <= 11) {
    categoria = 'infantil';
    precio = 1500;
    } else if (edad <= 17) {
    categoria = 'cadete';
    precio = 2000;
    } else {
    categoria = 'pleno';
    precio = "3000";
    }

    return { categoria, precio };
}

//ingreso de datos del socio
let nombre = "Fabricio";
let apellido ="Caceres";
let acceso = false;

//contador de intentos
for(let i=1; i<=3; i++){
let confirmarNomb = prompt('Bienvenido/a a Club Training \nIngrese su nombre:');
let confirmarApe = prompt('Ingrese su apellido:');
let edad = parseInt(prompt('Ingrese su edad:'));

//llamado a la funcion
let { categoria, precio } = definirCategoriaYPrecio(edad);
if ((confirmarNomb === nombre) && (confirmarApe === apellido)){
    alert("Bienvenido/a a Club Training \n" + nombre +" "+ apellido + "\nSu categoria de socio es: " + categoria + "\nEl valor de su cuota mensual es de: $" + precio );
    acceso=true;
    break;
}else{
    alert("Socio incorrecto, intente nuevamente");
}
}