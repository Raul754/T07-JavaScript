var frase = prompt("Introdueix una frase: ");
function reverse(s) {
var o = '';
for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
    return o;
}
if(frase.replace(/ /g, "") != reverse(frase.replace(/ /g, ""))){
    alert(reverse(frase)+" \n no son polidormos ");
}else{
    alert(reverse(frase)+" \n si son polidormos ");
}