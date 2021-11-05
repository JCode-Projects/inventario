<?php
    require_once __DIR__ . '/conexion.php';
    
    function crearDB() : void {
        $db = getConnectionHost();


        $nombre_db = 'dbunad45';
        
        $sql = "CREATE DATABASE $nombre_db";

        $result = $db -> query($sql);

        if (!$result) {
            die(json_encode(array(
                'error' => true,
                'mensaje' => "La base de datos '$nombre_db' ya existe."
            )));
        }

        die(json_encode(array(
            'error' => false,
            'mensaje' => "La base de datos '$nombre_db' se creó correctamente."
        )));
    }

    crearDB();