<?php
session_start();
require 'miDB.php';

    // if(strlen($firstName)>=4 && strlen($firstName)<=10 && strlen($lastName)>=4 && strlen($lastName)<=10){
    //     $sql = "UPDATE actor SET first_name=?, last_name=?, last_update=? WHERE actor_id=?";
    //     $stmt= $myDB->prepare($sql);
    //     $stmt->execute([$firstName, $lastName, $lastUpdate, $id]);
    //     $results = array("first_name"=>$firstName, "last_name"=>$lastName);
    //     echo json_encode($results);
    // }

    
    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $id = $_POST['actor_id'];
    define ("MINNUMCARACTERES", 4);
    $maxNumCaracteres = 10;
    $tamanoMax = 100000;
    $error = $_FILES["file"]["error"];
    $lastUpdate = date("Y-m-d h:i:s", time());
    $directorio = './img';
    $tipo = $_FILES['file']['type'];
    $tiposImg = array("image/gif", "image/jpeg", "image/jpg", "image/png");
    

    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["file"]["tmp_name"];
        $nombre_img = $_FILES["file"]["name"];
        $tamano = $_FILES['file']['size'];

        if (!empty($nombre_img)){

            if($tamano <= $tamanoMax){

                if (in_array($tipo, $tiposImg)){

                    move_uploaded_file($tmp_name, "$directorio/$nombre_img");
                    
                    if($_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=MINNUMCARACTERES && strlen($firstName)<=$maxNumCaracteres && strlen($lastName)>=MINNUMCARACTERES && strlen($lastName)<=$maxNumCaracteres){
                        
                        $sql = "UPDATE actor SET first_name=?, last_name=?, last_update=?, img=? WHERE actor_id=?";
                        $stmt= $myDB->prepare($sql);
                        $stmt->execute([$firstName, $lastName, $lastUpdate, $nombre_img, $id]);
                        $results = array("first_name"=>$firstName, "last_name"=>$lastName, "img"=>$nombre_img);
                        echo json_encode($results);

                    }else{
                        echo json_encode(['numero de caracteres incorrecto']);
                    }

                }else{
                    echo "No se puede subir una imagen con ese formato ";
                }
            }else{
                echo "La imagen es demasiado grande ";
            }
        }else{
            if($nombre_img == !NULL); 
            if($_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=MINNUMCARACTERES && strlen($firstName)<=$maxNumCaracteres && strlen($lastName)>=MINNUMCARACTERES && strlen($lastName)<=$maxNumCaracteres){
                        
                $sql = "UPDATE actor SET first_name=?, last_name=?, last_update=? WHERE actor_id=?";
                $stmt= $myDB->prepare($sql);
                $stmt->execute([$firstName, $lastName, $lastUpdate, $id]);
                $results = array("first_name"=>$firstName, "last_name"=>$lastName);
                echo json_encode($results);

            }else{
                echo json_encode(['numero de caracteres incorrecto']);
            }
        }
    }if($_SERVER["REQUEST_METHOD"]=="POST"&& strlen($firstName)>=MINNUMCARACTERES && strlen($firstName)<=$maxNumCaracteres && strlen($lastName)>=MINNUMCARACTERES && strlen($lastName)<=$maxNumCaracteres){
                        
        $sql = "UPDATE actor SET first_name=?, last_name=?, last_update=? WHERE actor_id=?";
        $stmt= $myDB->prepare($sql);
        $stmt->execute([$firstName, $lastName, $lastUpdate, $id]);
        $results = array("first_name"=>$firstName, "last_name"=>$lastName);
        echo json_encode($results);

    }else{
        echo json_encode(['numero de caracteres incorrecto']);
    }
?>