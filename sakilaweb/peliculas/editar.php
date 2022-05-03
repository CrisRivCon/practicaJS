<?php
session_start();
require 'miDB.php';

    $title = $_POST['title'];
    $description = $_POST['description'];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $id = $_POST['film_id'];
    $numMinCaracteres = 4;
    $numMaxCaracteres = 200;
    
    if(strlen($title)>$numMinCaracteres && strlen($title)<$numMaxCaracteres){
        $sql = "UPDATE film SET title=?, description=?, last_update=? WHERE film_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$title, $description, $lastUpdate, $id]);
        $results = array("title"=>$title, "description"=>$description);
        echo json_encode($results);
    }
?>