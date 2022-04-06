<?php
    require_once 'prueb3a1.php';

    echo "Hola que tal";

    $myArray= array('primero'=>1, 'segundo'=>2);

    var_dump($myArray);

    echo $myArray['primero'];

    echo implode(',', $myArray);

    $myString= "1,2,3,4";

    echo "</br>";

    print_r(explode(",",$myString));
?>