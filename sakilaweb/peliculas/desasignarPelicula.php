<?php
session_start();
require 'miDB.php';

if(isset($_POST['actor_id']) && isset($_POST['film_id'])){

    $sql = "DELETE FROM film_actor WHERE actor_id=? AND film_id=?;";
    $stmt= $myDB->prepare($sql);
    $stmt->execute([$_POST['actor_id'], $_POST['film_id']]);
    if($stmt->rowCount() > 0)
            {
                echo json_encode($_POST);
            }
            else{
                echo "console.log('No se pudo eliminar el registro')";

            print_r($stmt->errorInfo()); 
            }
}
?>
