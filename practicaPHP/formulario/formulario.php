<?php
    require 'conexionBD.php';
    var_dump($myDB);
    echo "</br>";
    $query=$myDB->prepare('SELECT * from actor');
    var_dump($query->execute());
    echo "</br>";
    foreach($query->fetchAll()as $item){
        print_r($item['first_name']."</br>");
        
    };



    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"){
        echo "Hola ".$_POST['name']. "</br>";
        echo " con apellidos ".$_POST['last_name']. "</br>";
        echo " email ".$_POST['email']. "</br>";
        echo " has seleccionado ".$_POST['select']. "</br>";
        echo " y has seleccionado ".$_POST['exampleRadios']. "</br>";
    }

?>