<?php
    class DbConnect {
        private $server = "localhost";
        private $dbname = "cl58245_diplom";
        private $user = "cl58245_diplom";
        private $password = "Maxim27102003";

        public function connect() {
            try {
                $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
            }
        }
    }
?>