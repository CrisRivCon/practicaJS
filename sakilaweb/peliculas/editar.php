<?php
session_start();
require 'miDB.php';

    $firstName = $_POST['title'];
    $lastName = $_POST['description'];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $id = $_POST['film_id'];
    $numMinCaracteres = 4;
    $numMaxCaracteres = 10;
    

    if(strlen($firstName)>=$numMinCaracteres && strlen($firstName)<=$numMaxCaracteres){
        $sql = "UPDATE film SET title=?, description=?, last_update=? WHERE film_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate, $id]);
        $results = array("title"=>$firstName, "description"=>$lastName);
        echo json_encode($results);
    }
?>