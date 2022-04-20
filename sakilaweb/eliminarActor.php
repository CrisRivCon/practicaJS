<?php
session_start();
require 'miDB.php';

if(isset($_POST['actor_id'])){
        $sql = "DELETE FROM actor WHERE actor_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$_POST['actor_id']]);
        //echo json_encode($_POST['actor_id']); 
        if($stmt->rowCount() > 0)
            {
            echo $_POST['actor_id'];
            }
            else{
                echo "<div class='content alert alert-danger'> No se pudo eliminar el registro  </div>";

            print_r($stmt->errorInfo()); 
            }
}else{
    echo json_encode(['status'=>404]);
}

?>
