<?php 
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    
    include 'DbConnect.php';
    $objDb = new DbConnect;
    $conn = $objDb->connect();

    $user = file_get_contents('php://input');

    if ( ! empty($_POST)) {
        if (isset($_POST['cb1'])) {
            if (isset($_POST['id, SecondName, Name, Surname, Email, Phone, Birthday, About'])) $login = $_POST['login1'];
            else echo 'введите логин';
        } else if (isset($_POST['submit2'])) {
            // получение переданного имени
            if (isset($_POST['login'])) $login = $_POST['login2'];
            else echo 'введите логин';
        } else {
            echo 'ошибка';
        }
    }
?>