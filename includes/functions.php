<?php

#Variables
$user = "root";
$pass = "root";
$host = "localhost";
$db = "a3_cooperInfo";

// Connection to Database instance
$db_instance = mysqli_connect($host, $user, $pass, $db);

// Echo if Err
echo !$db_instance? die() : "We are connected!";

#Query Initialization
$query = "SELECT * FROM mainmodel";

// map result of query to an array
$result = mysqli_query($db_instance, $query);
$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row; // Push each row from out resault to this array
}

// Dump to the browser
var_dump($rows); 

