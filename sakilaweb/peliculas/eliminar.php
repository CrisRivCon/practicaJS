<?php
session_start();
require 'miDB.php';

if(isset($_POST['film_id'])){
    $sql = "DELETE FROM film WHERE film_id=?";
    $stmt= $myDB->prepare($sql);
    $stmt->execute([$_POST['film_id']]);
    if($stmt->rowCount() > 0){
        echo json_encode($_POST);
    }else{
        print_r($stmt->errorInfo()); 
    }
}else{
    echo json_encode(['status'=>404]);
}

?>
