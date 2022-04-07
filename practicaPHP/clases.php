<?php
    //require_once 'prueba1.php';

    class Vehiculos
    {
        public $peso;
        public $color;
        public $años;

        public function __construct($peso, $color, $años)
        {
            $this->peso = $peso;
            $this->color = $color;
            $this->años = $años;
            
        }
        public function setPeso($peso){ 
            $this->peso = $peso;
        }
    }
    class Coche extends Vehiculos{
        public function __construct($velocidadMax, $puertas)
        {
            $this->velocidadMax = $velocidadMax;
            $this->puertas = $puertas;
        }
        public function setPuertas($puertas){
            $this->puertas = $puertas;
        }
    }
    echo 'Hola que tal';

    $nuevoCoche = new Vehiculos(30, 'azul', 2);
    $nuevoCoche->setPeso(40);
    var_dump($nuevoCoche);
?>