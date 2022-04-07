<?php
    require 'conexionBD.php';

    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"){
        $firstName = $_POST['name'];
        $lastName = $_POST['last_name'];
        $sql = "INSERT INTO actor (first_name, last_name) VALUES ($firstName, $lastName)";
    }

?>