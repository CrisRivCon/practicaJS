<?php
session_start();
require 'miDB.php';

    $id = $_POST['film_id'];
    

    if($id>0){
        $_SESSON['listaPeliculas'] = $myDB->query("SELECT film_id, title, release_year FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=".$id.")")->fetchAll();
        header('Location: /pruebaPHP/PRACTICAJS/sakilaweb/index.php');
    }
?>