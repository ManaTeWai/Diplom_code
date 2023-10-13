<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
switch($method) {
    // case "GET":
        // $sql = "SELECT * FROM users";
        // $stmt = $conn->prepare($sql);
        // $stmt->execute();
        // $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // echo json_encode($users);
        // $sql = "SELECT * FROM diplom";
        // $stmt = $conn->prepare($sql);
        // $stmt->execute();
        // $diplom = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // echo json_encode($diplom);
        // break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO users(id, email, password) VALUES(null, :s_Email, :s_Password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':s_Email', $user->Email);
        $stmt->bindParam(':s_Password', $user->Password);
        if($stmt->execute()) {
            $response = ['status' => 1, "message" => "record created successfully"];
        } else {
            $response = ['status' => 0, "message" => "failed to create record"];
        }
    break;
}
?>