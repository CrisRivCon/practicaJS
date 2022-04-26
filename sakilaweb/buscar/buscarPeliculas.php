<?php
require '../miDB.php';

    if($_POST['title']!==""){
        $titulo = $_POST['title'];
        $parametros=["%$titulo%"];
        $sql = "SELECT film_id, title, description FROM film WHERE title LIKE ?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute($parametros);
        $results= $stmt->fetchAll();
        echo json_encode($results);
    }else if($_POST['first_name']!==""){
        $nombre = $_POST['first_name'];
        $parametros=["%$nombre%"];
        $sql = "SELECT actor_id, first_name, last_name FROM actor WHERE first_name LIKE ?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute($parametros);
        $results= $stmt->fetchAll();
        echo json_encode($results);
    }else{
        echo json_encode(['status'=>404]);
    }
?>