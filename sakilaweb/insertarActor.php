<?php
session_start();
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $lastUpdate = date("Y-m-d h:i:s", time());

    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>0 && strlen($lastName)>0){
        $sql = "INSERT INTO actor (first_name, last_name, last_update) VALUES (:first_name,:last_name,:last_update)";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate]);
        $_SESSION['actor_name'] = $firstName;
        $_SESSION['actor_last_name'] = $lastName;
        header('Location: /pruebaPHP/PRACTICAJS/sakilaweb/exito.php');
    }else{header('Location: /pruebaPHP/PRACTICAJS/sakilaweb/index.php');
    }
?>