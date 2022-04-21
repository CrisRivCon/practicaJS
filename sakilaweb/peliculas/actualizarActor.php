<?php
session_start();
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $id = $_POST['actor_id'];
    

    if(strlen($firstName)>=4 && strlen($firstName)<=10 && strlen($lastName)>=4 && strlen($lastName)<=10){
        $sql = "UPDATE actor SET first_name=?, last_name=?, last_update=? WHERE actor_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate, $id]);
        $results = array("first_name"=>$firstName, "last_name"=>$lastName);
        echo json_encode($results);
    }
?>