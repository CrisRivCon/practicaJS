console.log('--------------------------Clases----------------------------');

class Persona{
    constructor(nombre, apellidos, edad, altura, peso){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        //this.imc = imc;
        if(Persona.contador) {
            Persona.contador++;
          } else {
            Persona.contador = 1;
          }
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
    fichaCompleta(){ //Metodo para ver todas las propiedades?
        console.log('Nombre: '+ this.nombre + ', Apellidos: ' + this.apellidos +', Edad: ' + this.edad + ', Altura: ' + this.altura + ', Peso: ' + this.peso + ', IMC: ' + this.IMC);
    }

}
class Profesor extends Persona{
    constructor(nombre, apellidos, edad, altura, peso, numProfesor, especialidad, añosDeCarrera){
        super(nombre, apellidos, edad, altura, peso);
        this.numProfesor = numProfesor;
        this.especialidad = especialidad;
        this.añosDeCarrera = añosDeCarrera;
    };
    corregir(){
        console.log("El profesor "+this.nombre+" está corrigiendo.");
    }
    darClase(){
        console.log("El profesor "+this.nombre+" está dando clase.");
    }

}
class Alumno extends Persona{
    constructor(nombre, apellidos, edad, altura, peso, idAlumno, notaMedia){
        super(nombre, apellidos, edad, altura, peso);
        this.idAlumno = idAlumno;
        this.notaMedia = notaMedia;
    };
    estudiar(){
        console.log("El alumno " + this.nombre +" está estudiando.");
    }
    dormir(){
        console.log("El alumno " + this.nombre +" está durmiendo.");
    }

}

const profesoraAna = new Persona('Ana', 'García', 29, 1.60, 60);
console.log('El peso de ' + profesoraAna.nombre + ' es de ' + profesoraAna.peso);
console.log('El IMC de ' + profesoraAna.nombre + ' es de ' + profesoraAna.IMC);
profesoraAna.nuevoPeso = 70;
console.log('El peso de ' + profesoraAna.nombre + ' es de ' + profesoraAna.peso);
console.log('El IMC de ' + profesoraAna.nombre + ' es de ' + profesoraAna.IMC);
profesoraAna.fichaCompleta();
console.log('Se han instanciado '+ Persona.contador + ' personas.');

const alumnoJavi = new Alumno('Javi','Lopez', '15', '1.40', '50', '123', '9')
alumnoJavi.fichaCompleta();
console.log('Se han instanciado '+ Persona.contador + ' personas.');
console.log('--------------------------Objeto literal----------------------------');

//-----------------------------Objeto literal------------------------------
var alumnoJuan={
    nombre:'Juan',
    notaExamen1: 7,
    notaExamen2: 5,
    notaExamen3: 8,
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