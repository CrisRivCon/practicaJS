<?php
session_start();
require 'miDB.php';
$id = json_decode($_POST['actor_id'], true);
    //$id = $_POST['actor_id'];


    if(isset($id)){
        //unset($_SESSION['listaPeliculas']);
        //$_SESSION['listaPeliculas'] = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        $sql = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id='.$id.')")->fetchAll();
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($sql);
    }
?>