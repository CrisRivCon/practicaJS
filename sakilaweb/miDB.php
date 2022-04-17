<?php
    $servidor = 'localhost';
    $nombreDB = 'sakila';
    $usuario = 'root';
    $pass = '';

    $options = [
        \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
        \PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    try {
        $myDB = new PDO ('mysql:host='.$servidor.';dbname='.$nombreDB, $usuario, $pass, $options);
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
?>