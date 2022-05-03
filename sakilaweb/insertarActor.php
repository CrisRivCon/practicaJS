<?php
require 'miDB.php';

    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    define ("MINNUMCARACTERES", 4);
    define ("MAXNUMCARACTERES", 10);
    define ("TAMANOMAX", 100000);
    $error = $_FILES["file"]["error"];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $directorio = './img';
    $tipo = $_FILES['file']['type'];
    $tiposImg = array("image/gif", "image/jpeg", "image/jpg", "image/png");
    /* if (in_array($tipo, $tiposImg)){
        print_r($tipo);
    } else {
        echo "no";
    } */
    

    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["file"]["tmp_name"];
        $nombre_img = $_FILES["file"]["name"];
        //$tipo = $_FILES['file']['type'];
        $tamano = $_FILES['file']['size'];

        if (!empty($nombre_img) && ($tamano <= TAMANOMAX))
        {
            if (in_array($tipo, $tiposImg))
            {
                move_uploaded_file($tmp_name, "$directorio/$nombre_img");
                if($_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=MINNUMCARACTERES && strlen($firstName)<=MAXNUMCARACTERES && strlen($lastName)>=MINNUMCARACTERES && strlen($lastName)<=MAXNUMCARACTERES)
                {
                    $sql = "INSERT INTO actor (first_name, last_name, last_update, img) VALUES (:first_name,:last_name,:last_update,:img)";
                    $stmt= $myDB->prepare($sql);
                    $stmt->execute([$firstName, $lastName, $lastUpdate, $nombre_img]);

                    $sqlS= ("SELECT actor_id, first_name, last_name, img FROM actor ORDER BY actor_id DESC LIMIT 1");
                    $stmtS=$myDB->prepare($sqlS);
                    $stmtS->execute();
                    $resultadoS = $stmtS->fetch();
                    //echo json_encode($resultadoS);
                    echo json_encode($resultadoS);

                } else {
                    echo json_encode(['numero de caracteres incorrecto']);
                }
            }else{echo "No se puede subir una imagen con ese formato ";}
        }else{
            if($nombre_img == !NULL) echo "La imagen es demasiado grande "; 
        }
    };
            
?>