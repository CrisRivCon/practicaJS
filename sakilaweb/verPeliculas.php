<?php
session_start();
require 'miDB.php';


$id=true;
    if(isset($_POST['actor_id'])){
      
        //$_SESSION['listaPeliculas'] = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        $results = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$_POST['actor_id'].")")->fetchAll();
        //header('Content-Type: application/json; charset=utf-8');

        //var_dump($results);
        //$sqlJson= json_encode($sql);
        echo json_encode($results);
    }
?>