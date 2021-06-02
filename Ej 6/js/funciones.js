var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var DNI = prompt("Introduce tu numero del DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if(DNI < 0 || DNI > 99999999){
    alert("El numero que has introducido es inválido");
}else{
    letraCalc = letras[DNI % 23];
    if(letraCalc != letra){
        alert("La letra o el numero que has escrito sin incorrectos");
    }else{
        alert("DNI correcto");
    }
}