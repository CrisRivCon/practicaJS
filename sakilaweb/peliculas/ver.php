<?php
session_start();
require 'miDB.php';


    if(isset($_POST['film_id'])){

        //$_SESSION['listaPeliculas'] = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        $sql = "SELECT actor_id, first_name, last_name FROM actor WHERE actor_id IN(SELECT actor_id FROM film_actor WHERE film_id=".$_POST['film_id'].")";
        $stmt= $myDB->prepare($sql);
        $stmt->execute();
        $results= $stmt->fetchAll();
        echo json_encode($results);
    }else{
        echo json_encode(['status'=>404]);
    }
?>