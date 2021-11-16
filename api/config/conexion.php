<?php 
    require __DIR__ . '/credenciales.php';

    function getConnectionHost() : mysqli {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS);
        if ($conn->connect_error) {
            die("Ha fallado la conexión: " . $conn->connect_error);
        }
        return $conn;
    }

    function getConnectionDB() : mysqli {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($conn->connect_error) {
            die("Ha fallado la conexión: " . $conn->connect_error);
        }
        return $conn;
    }

    function validateDB() : bool {
        $conn = getConnectionHost();
        $sql = "USE " . DB_NAME;
        return $conn->query($sql);
    }
?>