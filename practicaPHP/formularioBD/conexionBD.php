<?php
    $host = 'localhost';
    $db = 'sakila';
    $user = 'root';
    $pass = '';

    $options = [
        \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
        \PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    try {
        $myDB = new PDO('mysql:host='.$host.';dbname='.$db, $user, $pass, $options);
    } catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
<!-- para crear usuarios
CREATE USER 'dev'@'%' IDENTIFIED BY 'mysql';
grant all privileges on *.* to 'dev'@'%' identified by 'mysql';
FLUSH PRIVILEGES; -->