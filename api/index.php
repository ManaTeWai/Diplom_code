<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    
                // case "POST":
            // $sign_in = json_decode(file_get_contents('php://input'));
            // $sql = "INSERT INTO users(id, email, password) VALUES(null, :email, :password)";
            // $stmt = $conn->prepare($sql);
            // $stmt->bindParam(':email', $sign_in->Email);
            // $stmt->bindParam(':password', $sign_in->password);
    

    include 'DbConnect.php';
    $objDb = new DbConnect;
    $conn = $objDb->connect();

    $user = file_get_contents('php://input');
    $method = $_SERVER['REQUEST_METHOD'];
    // if ($method === 'POST') {
    //     if (isset($_POST['create'])) {
    //         $user = json_decode(file_get_contents('php://input'));
    //         $sql = "INSERT INTO diplom(id, SecondName, Name, Surname, Email, Phone, Birthday, About) VALUES(null, :SecondName, :Name, :Surname, :Email, :Phone, :Birthday, :About)";
    //         $stmt = $conn->prepare($sql);
    //         $stmt->bindParam(':SecondName', $user->SecondName);
    //         $stmt->bindParam(':Name', $user->Name);
    //         $stmt->bindParam(':Surname', $user->Surname);
    //         $stmt->bindParam(':Email', $user->Email);
    //         $stmt->bindParam(':Phone', $user->Phone);
    //         $stmt->bindParam(':Birthday', $user->Birthday);
    //         $stmt->bindParam(':About', $user->About);
    //         if($stmt->execute()) {
    //             $response = ['status' => 1, "message" => "record created successfully"];
    //         } else {
    //             $response = ['status' => 0, "message" => "failed to create record"];
    //         } 
    //         break;
    //     } elseif (isset($_POST['sign_in']))  {
    //         $user = json_decode(file_get_contents('php://input'));
    //         $sql = "INSERT INTO users(id, l_email, password) VALUES(null, :sign_email, :sign_pass)";
    //         $stmt = $conn->prepare($sql);
    //         $stmt->bindParam(':l_email', $user->sign_email);
    //         $stmt->bindParam(':password', $user->sign_pass);
    //         if($stmt->execute()) {
    //             $response = ['status' => 1, "message" => "record created successfully"];
    //         } else {
    //             $response = ['status' => 0, "message" => "failed to create record"];
    //         } 
    //         break;
    //     }
    //   }

    switch($method) {
        case "GET":
            $sql = "SELECT * FROM diplom";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $diplom = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($diplom);
            break;
        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO diplom(id, SecondName, Name, Surname, Email, Phone, Birthday, About) VALUES(null, :SecondName, :Name, :Surname, :Email, :Phone, :Birthday, :About)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':SecondName', $user->SecondName);
            $stmt->bindParam(':Name', $user->Name);
            $stmt->bindParam(':Surname', $user->Surname);
            $stmt->bindParam(':Email', $user->Email);
            $stmt->bindParam(':Phone', $user->Phone);
            $stmt->bindParam(':Birthday', $user->Birthday);
            $stmt->bindParam(':About', $user->About);
            if($stmt->execute()) {
                $response = ['status' => 1, "message" => "record created successfully"];
            } else {
                $response = ['status' => 0, "message" => "failed to create record"];
            } 
            break;
        }
    //         } elseif (isset($_POST['sign'])) {
    //             $user = json_decode(file_get_contents('php://input'));
    //             $sql = "INSERT INTO users(id, l_email, password) VALUES(null, :sign_email, :sign_pass)";
    //             $stmt = $conn->prepare($sql);
    //             $stmt->bindParam(':l_email', $user->sign_email);
    //             $stmt->bindParam(':password', $user->sign_pass);
    //             if($stmt->execute()) {
    //                 $response = ['status' => 1, "message" => "record created successfully"];
    //             } else {
    //                 $response = ['status' => 0, "message" => "failed to create record"];
    //             } 
    //             break;
    //         } 
    //         else {
    //             if($stmt->execute()) {
    //                 $response = ['status' => 1, "message" => "record created successfully"];
    //             } else {
    //                 $response = ['status' => 0, "message" => "failed to create record"];
    //             } 
    //             break;
    //         }
    //         break;
    // }

            // case "POST":
        //     $user = json_decode( file_get_contents('php://input') );
        //     $sql = "INSERT INTO diplom(id, SecondName, Name, Surname, Email, Phone, Birthday, About) VALUES(null, :SecondName, :Name, :Surname, :Email, :Phone, :Birthday, :About)";
        //     $stmt = $conn->prepare($sql);
        //     $stmt->bindParam(':SecondName', $user->SecondName);
        //     $stmt->bindParam(':Name', $user->Name);
        //     $stmt->bindParam(':Surname', $user->Surname);
        //     $stmt->bindParam(':Email', $user->Email);
        //     $stmt->bindParam(':Phone', $user->Phone);
        //     $stmt->bindParam(':Birthday', $user->Birthday);
        //     $stmt->bindParam(':About', $user->About);


            // if($stmt_1->execute()) {
            //     $response = ['status' => 1, "message" => "record created successfully"];
            // } else {
            //     $response = ['status' => 0, "message" => "failed to create record"];
            // }
?>