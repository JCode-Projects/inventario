export const existCalculator = document.querySelector('#calculator-page');
export const existConversor = document.querySelector('#conversor-page');

export const purchaseValueInput = document.querySelector('#purchase-value');
export const utilitiesValueInput = document.querySelector('#utilities');
export const ivaValueInput = document.querySelector('#iva');
export const calculateBtn = document.querySelector('#calculate');
export const alertContainer = document.querySelector('#error-fields');
export const columnResult = document.querySelector('#column-result');

export const valueInput = document.querySelector('#stored');
export const initialStateSelect = document.querySelector('#initial-state');
export const finalStateSelect = document.querySelector('#final-state');

export const createDBLink = document.querySelector('#create-db');
export const createTableLink = document.querySelector('#create-table');
export const createBackupLink = document.querySelector('#create-backup');
export const createPdfLink = document.querySelector('#create-pdf');

export const formData = document.querySelector('#form-data');
export const txtCodigoProd = formData ? formData.querySelector('input[name="codigo_prod"]') : undefined;
export const txtNombreProd = formData ? formData.querySelector('input[name="nombre_prod"]') : undefined;
export const txtMarcaProd = formData ? formData.querySelector('input[name="marca_prod"]') : undefined;
export const txtPrecioCompraProd = formData ? formData.querySelector('input[name="precio_compra_prod"]') : undefined;
export const txtCantidadCompradaProd = formData ? formData.querySelector('input[name="cantidad_comprada_prod"]') : undefined;
export const txtMetodo = formData ? formData.querySelector('input[name="metodo"]') : undefined;

export const formElement = document.querySelector('#form-item');
export const txtCodigoProdItem = formElement ? formElement.querySelector('input[name="codigo_prod"]') : undefined;
export const txtMetodoItem = formElement ? formElement.querySelector('input[name="metodo"]') : undefined;

export const infoProdContainer = document.querySelector('#info-prod');

export const labelTextUpdate = document.querySelector('#codigo-update');
export const btnSubmitProducto = document.querySelector('#submit-producto');