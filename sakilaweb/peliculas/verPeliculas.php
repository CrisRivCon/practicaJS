<?php
session_start();
require 'miDB.php';


    if(isset($_POST['actor_id'])){

        //$_SESSION['listaPeliculas'] = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        $sql = "SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$_POST['actor_id'].")";
        $stmt= $myDB->prepare($sql);
        $stmt->execute();
        $results= $stmt->fetchAll();
        echo json_encode($results);
    }else{
        echo json_encode(['status'=>404]);
    }
?>