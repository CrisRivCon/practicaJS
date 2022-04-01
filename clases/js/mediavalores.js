let arrayNotas=[
    8,
    7,
    3
]
const notaMedia=function(){
    let suma = 0;
    let numNotas = arrayNotas.length
    for (const key in arrayNotas) {
        console.log(key);
        suma += arrayNotas[key];
        
    }
    return (suma/numNotas);
    //((this.notaExamen1 + this.notaExamen2 + this.notaExamen3)/3)+ puntosPositivos;
 }
 console.log(notaMedia());