var valores = [true, 5, false, "hola", "adios", 2];
var aux = 0;
var aux2 = 0;
/*Bucle para los booleanos*/
for(x=0; valores.length; x++){
    if(valores[x] == true){
        console.log(valores[x] == !true);
    }
    if(valores[x] == false){
        console.log(valores[x] == !false);
    }
}

/*Bucle para los INT*/
for(x=0; valores.length; x++){
    aux = 0;
    if(!isNaN(valores[x])){
        aux = valores[x];
    }
    aux2 = aux;
}
var suma = aux + aux2;
var resta = aux2 - aux;
var multiplicar = aux * aux2;
var division = aux2 / aux;
var modulo = aux2 % aux;
console.log(suma);
console.log(resta);
console.log(multiplicar);
console.log(division);
console.log(modulo);

/*Bucle para las cadenas*/
