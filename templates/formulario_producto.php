<?php
    $registrar = $crear ?? false;
    $txt_boton = $registrar ? 'Registrar Producto' : 'Actualizar Producto';
    $metodo = $registrar ? 'POST' : 'PUT';
    $desabilidar_campos = $registrar ? '' : 'disabled';
?>

<form id="form-data" action="../api/producto.php" method="POST">
    <div class="col">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label class="form-label">Código del producto:</label>
                        <input type="number" name="codigo_prod" class="form-control" placeholder="ejm. 2090" />
                        <small class="text-danger small <?php echo $registrar ? 'd-none' : ''; ?>" id="codigo-update">Dijite el código del producto a actualizar</small>
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Marca del producto:</label>
                        <input type="text" name="marca_prod" class="form-control" placeholder="ejm. Inside" <?php echo $desabilidar_campos; ?> />
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Cantidad comprada:</label>
                        <input type="number" name="cantidad_comprada_prod" class="form-control" placeholder="ejm. 15" <?php echo $desabilidar_campos; ?> />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group mb-3">
                        <label class="form-label">Nombre del producto:</label>
                        <input type="text" name="nombre_prod" class="form-control" placeholder="ejm. Mouse" <?php echo $desabilidar_campos; ?> />
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Precio de compra:</label>
                        <input type="number" name="precio_compra_prod" class="form-control" placeholder="ejm. 24000" <?php echo $desabilidar_campos; ?> />
                    </div>
                </div>
            </div>
            <button id="submit-producto" class="btn btn-primary" type="submit" <?php echo $desabilidar_campos; ?>><?php echo $txt_boton;  ?></button>
            <input type="hidden" name="metodo" value="<?php echo $metodo; ?>">
        </div>
    </div>
</form>