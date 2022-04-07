<?php
    require 'conexionBD.php';
    var_dump($myDB);
    echo "</br>";
    $query=$myDB->prepare('SELECT * from actor');
    var_dump($query->execute());



    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"){
        echo "Hola ".$_POST['name']. "</br>";
        echo " con apellidos ".$_POST['last_name']. "</br>";

    }

?>