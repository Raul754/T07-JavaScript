var n = parseInt(prompt("Introduce un numero para calcular su factorial"));
var boolean = false;
var z = 1;
var auxi = 1;
while(z <= n){
    auxi = auxi * z;
    z++;
}
console.log(auxi);