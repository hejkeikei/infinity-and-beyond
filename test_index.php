<?php
session_start();
// include("db_connection.php");

// JSON TO PHP ARRAY FUNCTION
function get($url){
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    if(curl_errno($ch)){
        throw new Exception(curl_error($ch));
    }
    curl_close($ch);
    return $result;
}
// KP INDEX
$url = "https://services.swpc.noaa.gov/products/noaa-estimated-planetary-k-index-1-minute.json";
$result = get($url);
$data = json_decode($result, true);
$date_now = $data[1][0];
$kp_now = $data[1][1];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title?></title>
</head>
<body>
    <h1>Aurora Now</h1>
    <p>Date and Time: <?=$date_now?></p>
    <p>KP Index: <?=$kp_now?></p>
</body>
</html>