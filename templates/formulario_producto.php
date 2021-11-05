<?php
    $registrar = $crear ?? false;
    $txt_boton = $registrar ? 'Registrar Producto' : 'Actualizar Producto';
    $metodo = $registrar ? 'POST' : 'PUT';
?>

<form id="form-data" action="../api/producto.php" method="POST">
    <div class="col">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label class="form-label">Código del producto:</label>
                        <input type="number" name="codigo_prod" class="form-control" placeholder="ejm. 2090" style="border-radius: 5px;" />
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Marca del producto:</label>
                        <input type="text" name="marca_prod" class="form-control" placeholder="ejm. Inside" style="border-radius: 5px;" />
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Cantidad comprada:</label>
                        <input type="number" name="cantidad_comprada_prod" class="form-control" placeholder="ejm. 15" style="border-radius: 5px;" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group mb-3">
                        <label class="form-label">Nombre del producto:</label>
                        <input type="text" name="nombre_prod" class="form-control" placeholder="ejm. Mouse" style="border-radius: 5px;" />
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Precio de compra:</label>
                        <input type="number" name="precio_compra_prod" class="form-control" placeholder="ejm. 24000" style="border-radius: 5px;" />
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit"><?php echo $txt_boton; ?></button>
            <input type="hidden" name="metodo" value="<?php echo $metodo; ?>">
        </div>
    </div>
</form>