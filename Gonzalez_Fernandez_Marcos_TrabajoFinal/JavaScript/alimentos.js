const preguntas = ["Si la dejamos se pasa si la vendemos se pesa si se hace vino se pisasi la dejamos se posa",
        "Agua pasa por mi casa, cate de mi corazón, ¿qué es?",



        "A mí me llaman la santa y traigo conmigo al día soy redonda y encarnada y tengo la sangre fría",
        "Su nombre al tonto se le llama, y de una fruta de verano dimana.",
        "Tengo cabeza redonda,nariz, ojos ni frente,cuerpo se compone sólo de blancos dientes"

    ];
    const respuestas = ["uvas", "aguacate", "sandia", "melon", "ajo"];

    var contestada = [];
    var acertadas = [];

    var contadoraciertos = 0;
    const pleno = "¡Has hecho pleno!";
    const cuatro = "¡Rozando el pleno!";
    const tres = "¡No estuvo nada mal!";
    const dos = "¡Tienes que mejorar!";
    const cero = "Mejor dedicate a otra cosa...";



    for (i = 0; i < preguntas.length; i++) {
        contestada[i] = prompt(preguntas[i]);
        //acertadas[i]=aciertos(i);           
    }

    function aciertos(num) {
        if (respuestas[num] === contestada[num]) {
            contadoraciertos++;


            return ("¡Respuesta correcta!")

        } else {
            return ("¡Respuesta incorrecta! La respuesta es: " + respuestas[num]);
        }
    }

    for (i = 0; i < preguntas.length; i++) {
        switch (i) {
            case 0:
                document.getElementById("preg0").innerHTML = preguntas[i];
                document.getElementById("resp0").innerHTML = aciertos(i);
                break;
            case 1:
                document.getElementById("preg1").innerHTML = preguntas[i];
                document.getElementById("resp1").innerHTML = aciertos(i);
                break;
            case 2:
                document.getElementById("preg2").innerHTML = preguntas[i];
                document.getElementById("resp2").innerHTML = aciertos(i);
                break;
            case 3:
                document.getElementById("preg3").innerHTML = preguntas[i];
                document.getElementById("resp3").innerHTML = aciertos(i);
                break;
            case 4:
                document.getElementById("preg4").innerHTML = preguntas[i];
                document.getElementById("resp4").innerHTML = aciertos(i);
                break;
        }

    } document.getElementById("numAciertos").innerHTML = contadoraciertos;


    function correcto() {
        contadoraciertos++;
        alert("¡RESPUESTA CORRECTA! ");
    }
    function incorrecto() {
        alert("¡RESPUESTA INCORRECTA! ")
    }

    if (contadoraciertos == 5) {
        document.getElementById("pleno").innerHTML = pleno;
    }
    if (contadoraciertos == 4) {
        document.getElementById("cuatro").innerHTML = cuatro;
    }
    if (contadoraciertos == 3) {
        document.getElementById("tres").innerHTML = tres;
    }
    if (contadoraciertos == 2 || contadoraciertos == 1) {
        document.getElementById("dos").innerHTML = dos;
    }
    if (contadoraciertos == 0) {
        document.getElementById("cero").innerHTML = cero;
    }
    /*switch (contadoraciertos) {
        case contadoraciertos == 5:
            document.getElementById("pleno").innerHTML = pleno;
            break;
        case contadoraciertos == 4:
            document.getElementById("cuatro").innerHTML = cuatro;
            break;
        case contadoraciertos ==3:
            document.getElementById("tres").innerHTML = tres;
            break;
        case contadoraciertos ==0:
            document.getElementById("cero").innerHTML = cero;
            break;
*/



