<?php
    $server = "localhost";
    $username = "vslbau15_spaceuser_master";
    $password = "asdf4321ASDF";
    $database = "vslbau15_spaceApp";
    $connection = mysqli_connect($server, $user, $pwd, $database);

    if(!$connection){
        die(mysql_connect_error());
    }
    if($connection){
        echo "connected";
    }
?>