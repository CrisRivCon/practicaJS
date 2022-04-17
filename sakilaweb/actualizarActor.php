<?php
session_start();
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $id = $_POST['actor_id'];
    

    if(strlen($firstName)>0 && strlen($lastName)>0){
        $sql = "UPDATE actor SET first_name=?, last_name=?, last_update=? WHERE actor_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate, $id]);
        //$_SESSION['actor_name'] = $firstName;
        //$_SESSION['actor_last_name'] = $lastName;
    }
?>