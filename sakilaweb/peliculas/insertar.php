<?php
session_start();
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $lastUpdate = date("Y-m-d h:i:s", time());

    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=4 && strlen($firstName)<=10 && strlen($lastName)>=4 && strlen($lastName)<=10){
        $sql = "INSERT INTO actor (first_name, last_name, last_update) VALUES (:first_name,:last_name,:last_update)";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate]);
        $_SESSION['actor_name'] = $firstName;
        $_SESSION['actor_last_name'] = $lastName;
        header('Location: index.php');
    }else{echo json_encode(['numero de caracteres incorrecto']);
    }
?>