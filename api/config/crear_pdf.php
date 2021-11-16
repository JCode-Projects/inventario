<?php 
    require __DIR__ . '/../libs/fpdf/fpdf.php';
    require __DIR__ . '/conexion.php';

    try {
        date_default_timezone_set('America/Bogota');

        $pdf = new FPDF();
        $pdf -> AddPage();
        $pdf -> SetFont('Courier', 'B', 16);
        $pdf -> Image( __DIR__ . '/../../build/img/logo.png', 10, 10, -150);
        $pdf -> Cell(190, 28, utf8_decode('PROGRAMACIÓN DE SITIOS WEB'), 0, 0, 'C');
        $pdf -> Ln(20);
        $pdf -> Cell(90, 20, 'Fecha: ' . date('d/m/Y H:i:s'), '', 0);
        $pdf -> Ln(7);
        $pdf -> Cell(100, 20, utf8_decode('REPORTE DE PRODUCTOS - BASE DE DATOS ' . strtoupper(DB_NAME)));
        $pdf -> Ln(10);
        $pdf -> SetFont('Courier', 'B', 10);
        $pdf -> Cell(20, 20, 'CODIGO');
        $pdf -> Cell(40, 20, 'NOMBRE');
        $pdf -> Cell(35, 20, 'MARCA');
        $pdf -> Cell(35, 20, 'PRECIO COMPRA');
        $pdf -> Cell(25, 20, 'CANTIDAD COMPRADA');
        

        $pdf -> Ln(10);

        $pdf -> SetFont('Courier', '', 10);

        $db = getConnectionDB();
        $sql = "SELECT * FROM " . DB_TABLE;

        $result = $db -> query($sql);

        while ($row = $result -> fetch_assoc()) {
            $pdf -> Cell(20, 20, $row['codigo_prod']);
            $pdf -> Cell(40, 20, $row['nombre_prod']);
            $pdf -> Cell(35, 20, $row['marca_prod']);
            $pdf -> Cell(35, 20, '$' . $row['precio_compra_prod']);
            $pdf -> Cell(25, 20, $row['cantidad_comprada_prod'] . ' unidades');
            $pdf -> Ln(10);
        }

        $file_name = 'reporte_productos_' . date('Y-m-d_H-i-s') . '.pdf';
        $pdf -> Output('F', "../files/reports/$file_name", true);

        die(json_encode(array(
            'error' => false,
            'mensaje' => "El reporte PDF se creo correctamente en la dirección '/api/files/reports/$file_name'",
            'archivo' => $file_name
        )));
    } catch (Exception $e) {
        die(json_encode(array(
            'error' => true,
            'mensaje' => "No se pudo crear el reporte PDF"
        )));
    }
?>