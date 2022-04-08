<?php
    require 'conexionBD.php';

    header('Location: /pruebaPHP/Practicas/practicaPHP/formularioBD/exito.php');

    
    $firstName = $_POST['name'];
    $lastName = $_POST['last_name'];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $fechaNacimiento = $_POST['fecha_nacimiento'];

    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"&& $firstName!="" && $lastName!="" && $lastUpdate!="" && $fechaNacimiento!=""){
        $sql = "INSERT INTO actor (first_name, last_name, last_update, fecha_nacimiento) VALUES (:first_name,:last_name,:last_update,:fecha_nacimiento)";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate,$fechaNacimiento]);
    }

    session_start();
    $_SESSION['logged_in_user_name'] = $firstName;
    $_SESSION['logged_in_user_last_name'] = $lastName;
    $_SESSION['logged_in_user_fecha_nacimiento'] = $fechaNacimiento;

    //setcookie( "TestCookie", $firstName, time()+600 );


    //if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"){
    //    $firstName = $_POST['name'];
    //    $lastName = $_POST['last_name'];
    //    $sql = "INSERT INTO actor (first_name, last_name) VALUES ($firstName, $lastName)";
    //}

?>