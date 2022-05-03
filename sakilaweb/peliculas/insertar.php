<?php
require 'miDB.php';

    $firstName = $_POST['title'];
    $lastName = $_POST['description'];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $minCaracteres = 4;
    $maxCaracteres = 200;

    if($_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=$minCaracteres && strlen($firstName)<=$maxCaracteres && strlen($lastName)>=$minCaracteres && strlen($lastName)<=$maxCaracteres){
        $sql = "INSERT INTO film (title, description, last_update) VALUES (:title,:description,:last_update)";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate]);

        $sqlS= ("SELECT film_id, title, description FROM film ORDER BY film_id DESC LIMIT 1");
        $stmtS=$myDB->prepare($sqlS);
        $stmtS->execute();
        $resultadoS = $stmtS->fetch();
        echo json_encode($resultadoS);
    }else{echo json_encode(['numero de caracteres incorrecto']);
    }
?>