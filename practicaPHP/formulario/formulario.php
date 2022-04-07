<?php
    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"){
        echo "Hola ".$_POST['name']. "</br>";
        echo " con apellidos ".$_POST['last_name']. "</br>";
        echo " email ".$_POST['email']. "</br>";
        echo " has seleccionado ".$_POST['exampleRadios']. "</br>";
    }

?>