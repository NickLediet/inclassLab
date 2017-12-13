<?php

#Variables
$user = "root";
$pass = "root";
$host = "localhost";
$db = "a3_cooperInfo";

// Connection to Database instance
$db_instance = mysqli_connect($host, $user, $pass, $db);
// Setting up encoding as to avoid JSON not properly sending
mysqli_set_charset($db_instance, 'utf8');

// Echo if Err
// echo !$db_instance? die() : "We are connected!";

#Query Initialization
$query = "SELECT * FROM mainmodel";

// map result of query to an array
$result = mysqli_query($db_instance, $query);
$rows = array();



// Dump to the browser
// var_dump($rows); 

// Check if a car model query has been provided
if(isset($_GET['carModel'])){
    $car = $_GET['carModel'];
    $query = "SELECT * FROM mainmodel WHERE model  = '$car'";
    
    $result = mysqli_query($db_instance, $query);
    $carRes= mysqli_fetch_assoc($result);

    // var_dump($carRes);

    // Setup cors
    header("Access-Control-Allow-Origin: *");
    $myJson = json_encode($carRes);

    echo $myJson;

}

if(isset($_GET['getVideos'])){
    $query = "SELECT * FROM video";
    $result = mysqli_query($db_instance, $query);
    
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    echo json_encode($rows);
}
