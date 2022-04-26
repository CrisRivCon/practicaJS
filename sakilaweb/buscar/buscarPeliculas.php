<?php
require '../miDB.php';

    if($_POST['title']!==""&&$_POST['first_name']==""){
        $titulo = $_POST['title'];
        $parametros=["%$titulo%"];
        $sql = "SELECT film_id, title, description FROM film WHERE title LIKE ?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute($parametros);
        $results= $stmt->fetchAll();
        echo json_encode($results);
    }else if($_POST['first_name']!==""&&$_POST['title']==""){
        $nombre = $_POST['first_name'];
        $parametros=["%$nombre%"];
        $sql = "SELECT actor_id, first_name, last_name FROM actor WHERE first_name LIKE ?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute($parametros);
        $results= $stmt->fetchAll();
        echo json_encode($results);
    }else if($_POST['first_name']!==""&&$_POST['title']!==""){
        $nombre = $_POST['first_name'];
        $parametro1=["%$nombre%"];
        $titulo = $_POST['title'];
        $parametro2=["%$titulo%"];

        $sql = "SELECT actor_id, first_name, last_name FROM actor WHERE first_name LIKE ?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute($parametro1);
        $results1= $stmt->fetchAll();

        $sqlF = "SELECT film_id, title, description FROM film WHERE title LIKE ?";
        $stmtF= $myDB->prepare($sqlF);
        $stmtF->execute($parametro2);
        $results2= $stmtF->fetchAll();
        $results = array($results1, $results2);
        echo json_encode($results);

        }else{
            echo json_encode(['status'=>404]);
        };
?>