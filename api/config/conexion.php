<?php 
    function getConnectionHost() : mysqli {
        $conn = new mysqli('localhost', 'root', 'root');
        if ($conn->connect_error) {
            die("Ha fallado la conexión: " . $conn->connect_error);
        }
        return $conn;
    }

    function getConnectionDB() : mysqli {
        $conn = new mysqli('localhost', 'root', 'root', 'dbunad45');
        if ($conn->connect_error) {
            die("Ha fallado la conexión: " . $conn->connect_error);
        }
        return $conn;
    }

    function validateDB() : bool {
        $conn = getConnectionHost();
        $sql = "USE dbunad45";
        return $conn->query($sql);
    }
?>