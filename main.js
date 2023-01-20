function nombreFuncion() {
    //alert('Externo!');

    /*
    alert('Externo!');
    asdf
    asdf
    asdf
    asdf
    */

    var nombre;

    nombre = "Mario";
    var edad = 50;
    const fechaNacMaria = "15/08/1990"

    console.log(nombre);
    console.log(edad);
    console.log(nombre);

    console.log(
        nombre + " tiene " + edad + " años " + "porque nació el " + fechaNacMaria
    )

    // String (cadenas)
    var cadena = "Cadena 'Blablabla'";
    var cadena2 = 'Cadena "chida"';
    var cadena3 = `Cadena`;
    var cadena4;

    console.log(cadena)
    console.log(cadena2)
    console.log(cadena3)
    console.log(cadena4)

    //Number
    var numero = 1;
    var numero2 = 0.01;
    var numero3 = -0.01;
    var numero4 = 1.5e+6;

    console.log(numero)
    console.log(numero2)
    console.log(numero3)
    console.log(numero4)

    var infinito = 12313123112312 / 0;
    var otra = 15 + +"Cadena";

    console.log(infinito)
    console.log(typeof infinito)
    console.log(otra)
    console.log(typeof otra)

    //Boolean
    var bool1 = false;
    var bool2 = true;

    console.log(bool1);
    console.log(bool2);

    //Null
    var valorNulo = null;
    var infoUser = null;

    console.log(infoUser)




    // Conversiones
    var cadenaNueva = "Hola";
    var numeroNuevo = 156;
    var nuevoBoolean = false;

    //String
    // Implícita
    var variableNueva = nuevoBoolean + '';
    console.log(variableNueva);
    console.log(typeof variableNueva);
    //Explícita
    variableNueva = String(numeroNuevo);
    console.log(variableNueva);
    console.log(typeof variableNueva);

    //Number
    // Implícita
    variableNueva = 150 + +'5';
    console.log(variableNueva);
    console.log(typeof variableNueva);
    //Explícita
    variableNueva = Number('texto');
    console.log(variableNueva);
    console.log(typeof variableNueva);

    //Boolean
    // Implícita
    variableNueva = !!'cadena no vacía representa TRUE';
    console.log(variableNueva);
    console.log(typeof variableNueva);
    //Explícita
    variableNueva = Boolean(0);
    console.log(variableNueva);
    console.log(typeof variableNueva);


    //IF
    var puntaje = prompt('Agrega tu puntaje.');

    if (puntaje >= 10) {
        console.log('Ganaste el logro I!!!');
    }

    if (puntaje >= 50) {
        console.log('Ganaste el logro II!!!');
    }

    if (puntaje >= 150) {
        console.log('Ganaste el logro III!!!');
    }
    //&& => Operador AND
    if (puntaje >= 10 && puntaje >= 50 && puntaje >= 150) {
        console.log('Felicidades, ganaste los 3 logros!!!');
    }

    // || => Operador OR
    if (puntaje >= 10 || puntaje >= 50 || puntaje >= 150) {
        console.log('Ya tienes al menos un logro. Sigue así!!!');
    } else {
        console.log('Échale más ganas!!!');
    }

    /* var n1 = 15;
    var n2 = 15;
    var resta = n1 - n2;
    
    if (resta == 0) {
        console.log('Tus números son iguales');
    } */

    var n1 = 15;
    var n2 = 15;

    if (!(n1 - n2)) {
        console.log('Tus números son iguales');
    }


    // switch
    var elemento = "mario";
    switch (elemento) {
        case "mario":
            console.log('El valor es "mario"')
        //break;  // ! Si no se pone el brake, ejecuta todo hasta encontrar otro breake (o hasta salir)
        case 15:
            console.log('El valor es 15')
            break;
        case "maria":
            console.log('El valor es "maria"')
            break;
        case true:
            console.log('El valor es true')
            break;
        default:
            console.log('No aplica')
    }


    if (elemento == "mario") {
        console.log('El valor es "mario"')
    }
    if (elemento == 15) {
        console.log('El valor es 15')
    }
    if (elemento == "maria") {
        console.log('El valor es "maria"')
    }
    if (elemento == true) {
        console.log('El valor es true')
    }


    // FOR
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    // while
    var j = 0;
    while (j < 10) {
        console.log(j);
        j++;
    }

    // do-while
    var j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 10)
}

function imprimeNombre(nombre, edad, pais) {
    console.log(nombre);
    console.log(edad);
    console.log(pais);
}
for (i = 0; i <= 4; i++) {
    imprimeNombre('valor', '15', 'Chile')
}



/* 
function pares(n) {
    var contador = 1;
    for (var i = 1; contador <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);
            contador++;
        }
    }
}
*/

function pares(n) {
    var contador = 1;
    for (var i = 2; contador <= n; i = i + 2) {
        console.log(i);
        contador++;
    }
}

pares(10);


function suma(n1, n2){
    return n1+n2;
}

var res = suma(1,5);

console.log(res);