<?php require_once __DIR__ . '/templates/header.php';  ?>
    
<div class="container" id="calculator-page">
    <div class="row">
        <div class="col-md-6"><small></small>
            <h1>Calculadora</h1>
            <p>Con ésta calculadora podrás calcular el valor total del producto teniendo en cuenta el valor de impuesto (IVA) y utilidad esperada.</p>
            <div id="error-fields"></div>
            <form action="#">
                <div class="form-group mb-3">
                    <label class="form-label">Valor de compra:</label>
                    <input class="form-control" id="purchase-value" type="number" placeholder="ejm. 12500">
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">Utilidad o ganancia:</label>
                    <input class="form-control" id="utilities" type="number" placeholder="ejm. 5%">
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">IVA:</label>
                    <input class="form-control" id="iva" type="number" placeholder="ejm. 19%">
                </div>
                <button class="btn btn-success" id="calculate" type="submit">Calcular</button>
            </form>
        </div>
        <div id="column-result" class="col-md-6">
            <div class="border rounded" style="padding: 5px;">
                <h1>Realiza tú primer cálculo</h1>
                <p class="icon-style">
                    <em class="fa fa-question-circle-o icon-style"></em>
                </p>
                <p class="text-center">Para comenzar llena el formulario con todos los campos solicitados, una vez estés seguro da click en el botón "Calcular".</p>
            </div>
        </div>
    </div>
</div>

<?php require_once __DIR__ . '/templates/footer.php';  ?>