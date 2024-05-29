const preguntas = ["Soy bella y muy fuerte, aunque no tengo músculos ni huesos. Mi sonido es suave, y los ángeles tocan en mí. ¿Qué instrumento soy? ",
                            "Me llaman pan, sin ser pan, tengo voces de alegría y me sacan en los días de mayor celebridad; y bofetadas me dan, y yo puesta en un madero, más si soy Dios ni soy pan.",
                            "Con tan sólo cuatro cuerdas, que un arco pone en acción, esta caja melodiosa te alegrará el corazón.",
                            "Zumba que zumba, se oye mi son, en las noches navideñas, hasta que aparece el sol",
                            "La sidra y yo somos inseparables, mi sonido de viento alegra el alma y no puedo dormir a pesar de que una parte de mí es un roncón. "];
    const respuestas = ["arpa","pandereta","violin","zambomba","gaita"];

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

