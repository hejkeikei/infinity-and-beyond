<?php
    $server = "localhost";
    $user = "asakakei@gmail.com";
    $pwd = "!Dinmamma0822";
    $database = "vslbau15_spaceApp";
    $connection = mysqli_connect($server, $user, $pwd, $database);

    if(!$connection){
        die(mysql_connect_error());
    }
?>