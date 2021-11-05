<?php require_once __DIR__ . '/templates/header.php';  ?>

<div class="container" id="conversor-page">
    <div class="row">
        <div class="col-md-6">
            <h1 style="text-align: center;">Conversor de Unidades</h1>
            <p>Con ésta calculadora puedes hacer conversiones de unidades de almacenamiento, puedes convertir entre byte, kilobyte, megabyte, gigabyte, terabyte.</p>
            <div id="error-fields"></div>
            <form action="#">
                <div class="form-group mb-3">
                    <label class="form-label">Cantidad de almacenamiento:</label>
                    <input class="form-control" id="stored" type="number" placeholder="ejm. 4MB">
                </div>
                <div class="d-flex flex-grow-0 justify-content-between align-items-lg-center">
                    <select class="form-select" id="initial-state">
                        <optgroup label="Unidades de almacenamiento">
                            <option value="NN" selected disabled>Seleccione una opción</option>
                            <option value="B">Byte</option>
                            <option value="KB">KiloByte</option>
                            <option value="MB">MegaByte</option>
                            <option value="GB">GigaByte</option>
                            <option value="TB">TeraByte</option>
                        </optgroup>
                    </select>
                    <em class="fa fa-long-arrow-right" style="font-size: 31px;color: var(--bs-gray);margin: 0 10px;"></em>
                    <select class="form-select" id="final-state">
                        <optgroup label="Unidades de almacenamiento">
                            <option value="NN" selected disabled>Seleccione una opción</option>
                            <option value="B">Byte</option>
                            <option value="KB">KiloByte</option>
                            <option value="MB">MegaByte</option>
                            <option value="GB">GigaByte</option>
                            <option value="TB">TeraByte</option>
                        </optgroup>
                    </select>
                </div>
                <button id="calculate" class="btn btn-success mt-4" type="submit">Calcular</button>
            </form>
        </div>
        <div id="column-result" class="col-md-6">
            <div class="border rounded" style="padding: 5px;">
                <h1 style="text-align: center;">Realiza tú primer cálculo</h1>
                <p style="text-align: center;color: var(--bs-gray);">
                    <em class="fa fa-question-circle-o" style="font-size: 150px;text-align: center;"></em>
                </p>
                <p style="text-align: center;">Para comenzar llena el formulario y selecciona las unidades a convertir, una vez estés seguro da click en el botón "Calcular".</p>
            </div>
        </div>
    </div>
</div>
    
<?php require_once __DIR__ . '/templates/footer.php';  ?>