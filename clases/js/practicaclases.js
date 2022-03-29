class Persona{
    constructor(nombre, apellidos, edad, altura, peso, imc){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.imc = imc;
    }
    //get nombre(){
    //    
    //}
    hablar(){
        console.log(this.nombre+" está hablando");
    }
    andar(){
        console.log(this.nombre+" anda");
    };
    comer(){
        console.log("Se va a comer sushi");
    };

}
class Profesor extends Persona{
    constructor(nProfesor, especialidad, añosDeCarrera){
        super();
        this.nProfesor = nProfesor;
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
        this.nonotaMedia = notaMedia;
    };
    estudiar(){
        console.log("El alumno "+this.nombre)+" está estudiando.";
    }
    estudiar(){
        console.log("El alumno "+this.nombre)+" está durmiendo.";
    }

}