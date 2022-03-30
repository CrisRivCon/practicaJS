console.log('--------------------------Clases----------------------------')

class Persona{
    constructor(nombre, apellidos, edad, altura, peso){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        //this.imc = imc;
    }
    get IMC(){
        return this.peso / this.altura;
    }
    set nuevoPeso(valor){
        this.peso = valor;
    }
    hablar(){
        console.log(this.nombre+" está hablando");
    }
    andar(){
        console.log(this.nombre+" anda");
    }
    comer(){
        console.log("Se va a comer sushi");
    }

}
class Profesor extends Persona{
    constructor(numProfesor, especialidad, añosDeCarrera){
        super();
        this.numProfesor = numProfesor;
        this.especialidad = especialidad;
        this.añosDeCarrera = añosDeCarrera;
    };
    corregir(){
        console.log("El profesor "+this.nombre)+" está corrigiendo.";
    }
    darClase(){
        console.log("El profesor "+this.nombre)+" está dando clase.";
    }

}
class Alumno extends Persona{
    constructor(idAlumno, notaMedia){
        super();
        this.idAlumno = idAlumno;
        this.notaMedia = notaMedia;
    };
    estudiar(){
        console.log("El alumno " + this.nombre +" está estudiando.");
    }
    estudiar(){
        console.log("El alumno " + this.nombre +" está durmiendo.");
    }

}

const profesoraAna = new Persona('Ana', 'García', 29, 1.60, 60);
console.log('El peso de ' + profesoraAna.nombre + ' es de ' + profesoraAna.peso);
console.log('El IMC de ' + profesoraAna.nombre + ' es de ' + profesoraAna.IMC);
profesoraAna.nuevoPeso = 70;
console.log('El peso de ' + profesoraAna.nombre + ' es de ' + profesoraAna.peso);
console.log('El IMC de ' + profesoraAna.nombre + ' es de ' + profesoraAna.IMC);

console.log('--------------------------Objeto literal----------------------------');

//-----------------------------Objeto literal------------------------------
var alumnoJuan={
    nombre:'Juan',
    notaExamen1: 7,
    notaExamen2: 5,
    notaExamen3:  8,
    notaMedia:function(puntosPositivos = 0){
        return ((this.notaExamen1 + this.notaExamen2 + this.notaExamen3)/3)+ puntosPositivos;
    },
    notasTrimestrales:{ //anidacion de objetos
        1: {
            trimestre: 'primer',
            nota: 8
        },
        2: {
            trimestre: 'segundo',
            nota: 6
        },
        3: {
            trimestre: 'tercer',
            nota: 3
        }
    }
}

alumnoJuan.resultadosTercerTrimestre = function(){ //Extension
    if(alumnoJuan.notasTrimestrales[3].nota >= 5){
        console.log(alumnoJuan.nombre + " ha aprobado.")
    }else{
        console.log(alumnoJuan.nombre + " ha suspendido.")
    }
}

console.log("La nota media de Juan es " + alumnoJuan.notaMedia());
console.log("La nota media de Juan sumandole los positivos es " + alumnoJuan.notaMedia(1));
console.log("La nota del segundo trimestre de "+ alumnoJuan.nombre+" es de "+ alumnoJuan.notasTrimestrales[2].nota);
console.log(alumnoJuan.resultadosTercerTrimestre());
console.log('No entiendo por que undefined');