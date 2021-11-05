<?php 
    require_once __DIR__ . '/config/conexion.php';

    function validarCampos($codigo_prod, $nombre_prod, $marca_prod, $precio_compra_prod, $cantidad_comprada_prod, $metodo) : array {
        $errores = [];
        if (empty($codigo_prod)) {
            $errores[] = 'El codigo del producto es obligatorio';
        }
        if($metodo != 'DELETE' || $metodo != 'GET') {
            if (empty($nombre_prod)) {
                $errores[] = 'El nombre del producto es obligatorio';
            }
            if (empty($marca_prod)) {
                $errores[] = 'La marca del producto es obligatoria';
            }
            if (empty($precio_compra_prod)) {
                $errores[] = 'El precio de compra del producto es obligatorio';
            }
            if (empty($cantidad_comprada_prod)) {
                $errores[] = 'La cantidad comprada del producto es obligatoria';
            }
        }
        return $errores;
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $codigo_prod = $_POST['codigo_prod'] ?? null;
        $nombre_prod = $_POST['nombre_prod'] ?? null;
        $marca_prod = $_POST['marca_prod'] ?? null;
        $precio_compra_prod = $_POST['precio_compra_prod'] ?? null;
        $cantidad_comprada_prod = $_POST['cantidad_comprada_prod'] ?? null;
        $metodo = $_POST['metodo'] ?? null;

        $errores = validarCampos($codigo_prod, $nombre_prod, $marca_prod, $precio_compra_prod, $cantidad_comprada_prod, $metodo);
        if(!empty($errores)) {
            die(json_encode(array(
                'error' => true,
                'mensaje' => $errores[0]
            )));
        }

        if($metodo == 'GET') {
            $db = getConnectionDB();

            $stmt = $db -> prepare('SELECT * FROM tabla45 WHERE codigo_prod = ?;');
            $stmt -> bind_param('i', $codigo_prod);

            $execute = $stmt -> execute();

            if(!$execute) {
                die(json_encode(array(
                    'error' => 'error',
                    'mensaje' => "No existe un producto con el código '$codigo_prod'."
                )));
            }

            $result = $stmt -> get_result() -> fetch_assoc();

            die(json_encode(array(
                'error' => false,
                'mensaje' => "Información del producto con el código '$codigo_prod' obtenida.",
                'info' => $result
            )));
        } else if($metodo == 'POST') {
            $db = getConnectionDB();

            $stmt = $db -> prepare("INSERT INTO tabla45 (codigo_prod, nombre_prod, marca_prod, precio_compra_prod, cantidad_comprada_prod) VALUES (?, ?, ?, ?, ?);");
            
            $stmt -> bind_param('issdi', $codigo_prod, $nombre_prod, $marca_prod, $precio_compra_prod, $cantidad_comprada_prod);

            $result = $stmt -> execute();

            if(!$result){
                die(json_encode(array(
                    'error' => true,
                    'mensaje' => "Ya existe un producto con el código '$codigo_prod'."
                )));
            }

            die(json_encode(array(
                'error' => false,
                'mensaje' => "El producto con el código '$codigo_prod' fué agregado correctamente."
            )));

        } else if($metodo == 'DELETE') {
            $db = getConnectionDB();

            $stmt = $db -> prepare("DELETE FROM tabla45 WHERE codigo_prod = ?;");
            
            $stmt -> bind_param('i', $codigo_prod);

            $stmt -> execute();

            if($stmt -> affected_rows < 1) {
                die(json_encode(array(
                    'error' => true,
                    'mensaje' => "No existe un producto con el código '$codigo_prod'."
                )));
            }

            die(json_encode(array(
                'error' => false,
                'mensaje' => "El producto con el código '$codigo_prod' fué eliminado correctamente."
            )));
        } 
    }