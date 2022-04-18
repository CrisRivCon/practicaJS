<?php
session_start();
require 'miDB.php';
$id = $_POST['actor_id'];
    //$id = $_POST['actor_id'];


    if(isset($id)){
        unset($_SESSION['listaPeliculas']);
        //$_SESSION['listaPeliculas'] = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        $sql = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        //header('Content-Type: application/json; charset=utf-8');
        //$stmt= $myDB->prepare($sql);
        //$stmt->execute([$id]);
        //$sqlJson= json_encode($sql);
        echo json_encode($sql);
    }
?>