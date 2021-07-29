let canais = ["Globo", "Sbt", "Record"];
canais.forEach(function(canal){
    canais.push("RedeTV");//este item será ignorado
    console.log(canal);

});
console.log(canais);