<?php
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];

    print_r($_FILES);
    var_dump($_FILES);
    $lastUpdate = date("Y-m-d h:i:s", time());

    if(isset($_POST['submit'])&& $_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=4 && strlen($firstName)<=10 && strlen($lastName)>=4 && strlen($lastName)<=10){
        $sql = "INSERT INTO actor (first_name, last_name, last_update) VALUES (:first_name,:last_name,:last_update)";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate]);

    }else{echo json_encode(['numero de caracteres incorrecto']);
    }
?>