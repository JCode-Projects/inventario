<?php
    $borrar = $eliminar ?? false;
    $clase_btn = $borrar ? 'btn-danger' : 'btn-success';
    $texto_btn = $borrar ? 'Eliminar Producto' : 'Consultar Producto';
    $metodo = $borrar ? 'DELETE' : 'GET';
?>

<form method="POST" id="form-item">
    <div class="col">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-3">
                        <label class="form-label">Código del producto:</label>
                        <input type="number" name="codigo_prod" class="form-control" placeholder="ejm. 2090" style="border-radius: 5px;" />
                    </div>
                </div>
            </div>
            <button class="btn <?php echo $clase_btn; ?>" type="submit"><?php echo $texto_btn; ?></button>
            <input type="hidden" name="metodo" value="<?php echo $metodo ?>">
        </div>
    </div>
</form>