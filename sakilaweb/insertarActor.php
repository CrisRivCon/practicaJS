<?php
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $minNumCaracteres = 4;
    $maxNumCaracteres = 10;
    $error = $_FILES["file"]["error"];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $directorio = './img';


    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["file"]["tmp_name"];
        $nombre_img = $_FILES["file"]["name"];
        $tipo = $_FILES['file']['type'];
        $tamano = $_FILES['file']['size'];

        if (!empty($nombre_img) && ($tamano <= 5000))
        {
            if (($tipo == "image/gif")
            || ($tipo == "image/jpeg")
            || ($tipo == "image/jpg")
            || ($tipo == "image/png"))
            {
                move_uploaded_file($tmp_name, "$directorio/$nombre_img");
                if($_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=$minNumCaracteres && strlen($firstName)<=$maxNumCaracteres && strlen($lastName)>=$minNumCaracteres && strlen($lastName)<=$maxNumCaracteres){
                    $sql = "INSERT INTO actor (first_name, last_name, last_update, img) VALUES (:first_name,:last_name,:last_update,:img)";
                    $stmt= $myDB->prepare($sql);
                    $stmt->execute([$firstName, $lastName, $lastUpdate, $nombre_img]);

                    $sqlS= $myDB->query("SELECT actor_id, first_name, last_name, img FROM actor ORDER BY actor_id DESC LIMIT 1")->fetchAll();
                    // $stmtS=$myDB->prepare($sqlS);
                    // $stmtS->execute();
                    // $resultadoS = $stmtS->fetchAll();
                    echo json_encode($sqlS, JSON_FORCE_OBJECT);

                }else{echo json_encode(['numero de caracteres incorrecto']);
                }
                } 
                else 
                {
                echo "No se puede subir una imagen con ese formato ";
                }
        }else{
            if($nombre_img == !NULL) echo "La imagen es demasiado grande "; 
        }
    }
            
?>

<!-- ; Maximum allowed size for uploaded files.
; http://php.net/upload-max-filesize
upload_max_filesize = 2G -->