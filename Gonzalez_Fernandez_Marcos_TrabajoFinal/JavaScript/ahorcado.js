let palabras = Array("camion", "pizza", "naranja", "barcelona", "planeta", "Thor", "Matematicas"); 
    let palabraAdivinar = ""; 
    let palabraAciertos = ""; 
    let vidas = 8;
    
    comenzar();
    
    function comenzar() {
    
        document.getElementById("vidas").innerHTML = "Número de vidas: " + vidas; 
    
        palabraAdivinar = palabras[Math.floor(Math.random() * palabras.length)]; 
    
        console.log(palabraAdivinar); 
    
          for (let i = 0; i < palabraAdivinar.length; i++) {
            palabraAciertos = palabraAciertos + "_ ";
        }
    
        document.getElementById("aciertos").innerHTML = palabraAciertos; 
        document.getElementById("letra").focus(); 
    
        var pista1= "Pista: Es un vehiculo";
        var pista2= "Pista: Es un color";
        var pista3= "Pista: Es un alimento";
        var pista4= "Pista: Es una asignatura";
        var pista5= "Pista: Es un superheroe";
        var pista6= "Pista: Es una ciudad";
        var pista7= "Pista: Es un planeta";
        if(palabraAdivinar=="camion"){
            document.getElementById("pista").innerHTML = pista1;}
            if(palabraAdivinar=="naranja"){
                document.getElementById("pista").innerHTML = pista2;}
                if(palabraAdivinar=="pizza"){
                    document.getElementById("pista").innerHTML = pista3;}
                    if(palabraAdivinar=="Matematicas"){
                        document.getElementById("pista").innerHTML = pista4;}
                        if(palabraAdivinar=="Thor"){
                            document.getElementById("pista").innerHTML = pista5;}
                            if(palabraAdivinar=="barcelona"){
                                document.getElementById("pista").innerHTML = pista6;}
                                if(palabraAdivinar=="jupiter"){
                                    document.getElementById("pista").innerHTML = pista7;}
    
        }
    
    
    function comprobar() {
    
        let letra = document.getElementById("letra").value.toLowerCase(); 
    
        palabraAdivinar = palabraAdivinar.toLowerCase(); 
    
        let aux = ""; 
    
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (letra == palabraAdivinar[i]) {
                aux = aux + letra + " "; 
            } else {
                aux = aux + palabraAciertos[i * 2] + " "; 
            }
        }
    
        if (aux == palabraAciertos) {
            vidas--; 
            document.getElementById("vidas").innerHTML = "Número de vidas: " + vidas; 
            document.getElementById("letrasFallidas").innerHTML += letra + " "; 
        }
    
        palabraAciertos = aux;
        document.getElementById("aciertos").innerHTML = palabraAciertos; 
    
        if (palabraAciertos.indexOf("_") == -1) {
            let solucion1=("¡Has ganado! La palabra era " + palabraAdivinar.toUpperCase());
            document.getElementById("solucion").innerHTML=solucion1;
    
        }
    
        if (vidas == 0) {
            let solucion2=("¡Has perdido! La palabra era " + palabraAdivinar.toUpperCase());
            document.getElementById("solucion").innerHTML=solucion2;
    
        }
    
        document.getElementById("letra").value = ""; 
        document.getElementById("letra").focus(); 
    
        dibujar();
    }
    
    function dibujar() {
    
        let canvas = document.getElementById('lienzo');
        let ctx = canvas.getContext('2d');
    
        ctx.beginPath();    
        ctx.moveTo(30, 300); 
        ctx.lineTo(30, 10); 
        ctx.lineTo(150, 10); 
        ctx.lineTo(150, 20); 
        ctx.strokeStyle = "gray"; 
        ctx.stroke(); 
    
        if (vidas <= 7) {
            ctx.beginPath();//cabeza
            ctx.arc(150, 40, 20, 0, Math.PI * 2); 
            ctx.fillStyle = "crimson";
            ctx.fill(); 
        }
    
        if (vidas <= 6) {
    //cuerpo
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(150, 100);
            ctx.strokeStyle = "blue";
            ctx.stroke();
        }
    
        if (vidas <=5 ) {
            //brazo iz
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(130, 100);
            ctx.strokeStyle = "orange";
            ctx.stroke();}
    
        if (vidas <=4 ) {
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(130, 130);
            ctx.strokeStyle = "black";
            ctx.stroke();
    
           
        }
        if(vidas<=3){
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(170, 100);
            ctx.strokeStyle = "skyblue";
            ctx.stroke();
    
    
        }
        if (vidas <= 2){
        ctx.beginPath();
        ctx.moveTo(150, 100);
        ctx.lineTo(170, 130);
        ctx.strokeStyle = "pink";
        ctx.stroke();
    
    }
    if(vidas<=1){
        ctx.beginPath();
        ctx.moveTo(130, 100);
        ctx.lineTo(120, 90);
        ctx.strokeStyle = "purple";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(170, 100);
        ctx.lineTo(180, 90);
        ctx.strokeStyle = "purple";
        ctx.stroke();
    }
        if (vidas == 0) {
            ctx.beginPath();
            ctx.moveTo(130, 130);
            ctx.lineTo(120, 120);
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(170, 130);
            ctx.lineTo(180, 120);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
    
    }