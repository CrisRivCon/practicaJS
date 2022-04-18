<?php
session_start();
require 'miDB.php';

    $id = $_POST['actor_id'];
    
        $sql = "DELETE FROM actor WHERE actor_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$id]);

?>
