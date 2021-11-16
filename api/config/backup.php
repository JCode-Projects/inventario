<?php
    require_once __DIR__ . '/credenciales.php';

    try {
        $fecha = date('Ymd-His');
        $archivo = 'backup_' . DB_NAME . '_' . $fecha . '.sql';
        $ruta_salida = '../files/backups/' . $archivo;
        $dump = 'mysqldump -h' . DB_HOST . ' -u' . DB_USER . ' -p' . DB_PASS . ' --opt ' . DB_NAME . ' > ' . $ruta_salida;
        system($dump, $output);

        if ($output == 0) {
            die(json_encode(array(
                'error' => false,
                'mensaje' => "Backup generado correctamente, la ruta relativa del archivo es '/api/files/backups/$archivo'."
            )));
        } else {
            die(json_encode(array(
                'error' => true,
                'mensaje' => 'Error al generar el backup de la base de datos.'
            )));
        }
    } catch (Exception $th) {
        echo $th->getMessage();
    }