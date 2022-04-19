<?php
session_start();
require 'miDB.php';

if(isset($_POST['actor_id']) && isset($_POST['film_id'])){

    $sql = "DELETE FROM film_actor WHERE actor_id=? AND film_id=?;";
    $stmt= $myDB->prepare($sql);
    $stmt->execute([$_POST['actor_id'], $_POST['film_id']]);
}

?>