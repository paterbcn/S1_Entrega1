function interesC (capital,interes,años) {
    var inv = capital * ((1+interes/100)**años);
    return inv;

}

function CalcInverion(capital,interes,años){
    for (var i=1; i<=años ; i++){
        console.log(`Su inversion el año ${i} de ${interesC(capital,interes,i)}`)
    }
}

