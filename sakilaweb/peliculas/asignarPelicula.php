<?php
require 'miDB.php';

$lastUpdate = date("Y-m-d h:i:s", time());
$actorId = $_POST['actor_id'];
$filmId = $_POST['film_id'];

        if (isset($actorId) && isset($filmId) && $_SERVER["REQUEST_METHOD"]=="POST")  {
            
            $sql="SELECT COUNT(*) FROM actor WHERE actor_id=".$actorId."";
            $stmt=$myDB->prepare($sql);
            $stmt->execute();
            $resultadoA = $stmt->fetchColumn();

            $sqlF="SELECT COUNT(*) FROM film WHERE film_id=".$filmId."";
            $stmtF=$myDB->prepare($sqlF);
            $stmtF->execute();
            $resultadoF = $stmtF->fetchColumn();

            if($resultadoA==1 && $resultadoF==1) {
                //Si existen el actor y la pelicula.
                $sql="SELECT COUNT(*) FROM film_actor WHERE actor_id=".$actorId." AND film_id=".$filmId."";
                $stmt=$myDB->prepare($sql);
                $stmt->execute();
                $resultado = $stmt->fetchColumn();

                if($resultado==0){
                    //si no existe la relacion de actor y pelicula
                    $sql = "INSERT INTO film_actor (actor_id, film_id, last_update) VALUES (:actor_id,:film_id,:last_update)";
                    $stmt= $myDB->prepare($sql);
                    $stmt->execute([$actorId, $filmId, $lastUpdate]);

                    $results = array("success"=>"1");
                    echo json_encode($results);
                    
                }else{
                    $results = array("error"=>"3");
                    echo json_encode($results);
                }
            } else {
                $results = array("error"=>"2");
                echo json_encode($results);
                exit();        
            }
          } else {
            $results = array("error"=>"1");
            echo json_encode($results);
          }

?>