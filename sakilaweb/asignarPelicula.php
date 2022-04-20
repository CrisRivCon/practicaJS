<?php
session_start();
require 'miDB.php';

$lastUpdate = date("Y-m-d h:i:s", time());

    if(isset($_POST['actor_id'])&&isset($_POST['film_id'])&& $_SERVER["REQUEST_METHOD"]=="POST"){
        $sql = "INSERT INTO film_actor (actor_id, film_id, last_update) VALUES (:actor_id,:film_id,:last_update)";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$_POST['actor_id'], $_POST['film_id'], $lastUpdate]);
        //header('Location: /pruebaPHP/PRACTICAJS/sakilaweb/index.php');
    }else{echo json_encode(['status'=>404]);
    }
?>