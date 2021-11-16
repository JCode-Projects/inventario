<?php
    require_once __DIR__ . '/conexion.php';
    require_once __DIR__ . '/credenciales.php';
    
    function crearTabla() {
        
        $exist_db = validateDB();
        
        if(!$exist_db) {
            die(json_encode(array(
                'error' => true,
                'mensaje' => 'La base de datos no está creada, debes crearla antes de crear la tabla.'
            )));
        }

        $db = getConnectionDB();

        $nombre_tabla = DB_TABLE;

        $sql = "CREATE TABLE `$nombre_tabla` (
            `id_prod` int(11) NOT NULL AUTO_INCREMENT,
            `codigo_prod` int(11) NOT NULL UNIQUE,
            `nombre_prod` varchar(100) NOT NULL,
            `marca_prod` varchar(100) NOT NULL,
            `precio_compra_prod` decimal(10,3) NOT NULL,
            `cantidad_comprada_prod` int(5) NOT NULL,
            PRIMARY KEY (`id_prod`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";

        $result = $db -> query($sql);
        
        if(!$result) {
            die(json_encode(array(
                'error' => true,
                'mensaje' => "La tabla '$nombre_tabla' ya está creada."
            )));
        }

        die(json_encode(array(
            'error' => false,
            'mensaje' => "La tabla '$nombre_tabla' se ha creado correctamente."
        )));
    }

    crearTabla();