<?php
    echo "Nombre del servidor: ".$_SERVER['SERVER_NAME']."</br>";
    //SERVER_PORT SERVER_SOFTWARE
    global $hola;
    $hola = 'prueba de variable global';
    echo "Variable GLOBALS: ".$GLOBALS['hola'];
?>