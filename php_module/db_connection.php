<?php
    $server = "localhost";
    $user = "spark";
    $pwd = "tWGXdWRxjKw87D?{Yj";
    $database = "spark_mmda225_ecommerce";
    $connection = mysqli_connect($server, $user, $pwd, $database);

    if(!$connection){
        die(mysql_connect_error());
    }
?>