<?php
session_start();
require 'miDB.php';

if(isset($_POST['actor_id'])){
    $sql = "DELETE FROM actor WHERE actor_id=?";
    $stmt= $myDB->prepare($sql);
    $stmt->execute([$_POST['actor_id']]);
    if($stmt->rowCount() > 0){
        echo json_encode($_POST);
    }else{
        print_r($stmt->errorInfo()); 
    }
}else{
    echo json_encode(['status'=>404]);
}

?>
