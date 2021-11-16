import { 
    infoProdContainer, 
    formData, 
    formElement, 
    txtCodigoProd, 
    txtNombreProd, 
    txtMarcaProd, 
    txtPrecioCompraProd, 
    txtCantidadCompradaProd, 
    txtMetodo, 
    txtCodigoProdItem, 
    txtMetodoItem,
    labelTextUpdate,
    btnSubmitProducto
} from '../selectors.js'
export default class Producto {
    constructor() {
        if(formData) {
            formData.addEventListener('submit', e => {
                e.preventDefault()
                
                let data = this.dataProducto();
    
                if(data.metodo == 'POST') {
                    this.insertProducto(data);
                } else if(data.metodo == 'PUT') {
                    this.updateProducto(data);
                }
            });

            if(txtMetodo.value == 'PUT') {
                txtCodigoProd.addEventListener('input', e => {
                    this.validarExistenciaActualizar(e.target.value.trim());
                });
            }
        } else if(formElement) {
            formElement.addEventListener('submit', e => {
                e.preventDefault()
                
                let data = this.dataElement();

                if(data.metodo == 'DELETE') {
                    this.deleteProducto(data);
                } else if(data.metodo == 'GET') {
                    this.getProducto(data);
                }
            });
        }
    }

    async updateProducto(data) {
        let dataForm = new FormData();
        Object.keys(data).forEach(key => {
            dataForm.append(key, data[key]);
        });

        try {
            const result = await fetch('./api/producto.php', {
                method: 'POST',
                body: dataForm
            });

            const info = await result.json();

            console.log(info);
            
            if(info.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Se ha producido un error',
                    text: info.mensaje
                });
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Producto actualizado',
                text: info.mensaje
            });

            this.deshabilitarCamposFormulario();
            formData.reset();
        } catch(error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Verifica la conexión con la base de datos y vuelve a intentar.',
            });
        }
    }

    async validarExistenciaActualizar(cod) {
        if(!cod) {
            labelTextUpdate.classList.remove('d-none');
            labelTextUpdate.innerText = 'Dijite el código del producto a actualizar.';
            this.deshabilitarCamposFormulario();
            return;
        } 
        
        labelTextUpdate.classList.add('d-none');

        let data = new FormData();
        data.append('codigo_prod', cod);
        data.append('metodo', 'GET');

        try {
            const result = await fetch('./api/producto.php', {
                method: 'POST',
                body: data
            });

            const info = await result.json();

            if(info.error) {
                labelTextUpdate.classList.remove('d-none');
                labelTextUpdate.innerText = info.mensaje;
                this.deshabilitarCamposFormulario();
                return;
            }

            this.habilitarCamposFormulario();
            this.llenarCamposFormulario(info.info);
        } catch(error) {
            labelTextUpdate.classList.remove('d-none');
            labelTextUpdate.innerText = 'Ha ocurrido un error, revisa la configuración con la base de datos.';
        }
    }

    habilitarCamposFormulario() {
        txtNombreProd.disabled = false;
        txtMarcaProd.disabled = false;
        txtPrecioCompraProd.disabled = false;
        txtCantidadCompradaProd.disabled = false;
        btnSubmitProducto.disabled = false;
    }

    deshabilitarCamposFormulario() {
        txtNombreProd.disabled = true;
        txtNombreProd.value = '';
        txtMarcaProd.disabled = true;
        txtMarcaProd.value = '';
        txtPrecioCompraProd.disabled = true;
        txtPrecioCompraProd.value = '';
        txtCantidadCompradaProd.disabled = true;
        txtCantidadCompradaProd.value = '';
        btnSubmitProducto.disabled = true;
    }

    llenarCamposFormulario(data) {
        txtNombreProd.value = data.nombre_prod;
        txtMarcaProd.value = data.marca_prod;
        txtPrecioCompraProd.value = data.precio_compra_prod;
        txtCantidadCompradaProd.value = data.cantidad_comprada_prod;
    }

    dataProducto() {
        return {
            codigo_prod: txtCodigoProd.value,
            nombre_prod: txtNombreProd.value,
            marca_prod: txtMarcaProd.value,
            precio_compra_prod: txtPrecioCompraProd.value,
            cantidad_comprada_prod: txtCantidadCompradaProd.value,
            metodo: txtMetodo.value
        }
    }

    dataElement() {
        return {
            codigo_prod: txtCodigoProdItem.value,
            metodo: txtMetodoItem.value
        }
    }

    async getProducto(data) {
        let dataForm = new FormData();
        Object.keys(data).forEach(key => {
            dataForm.append(key, data[key]);
        });

        try {
            let response = await fetch('./api/producto.php', {
                method: 'POST',
                body: dataForm
            });
            let result = await response.json();

            if(result.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo obtener el producto',
                    text: result.mensaje
                }); 
                
                this.clearResultado();
                
                return;
            }

            this.showProductoHTML(result.info);
        } catch(error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Verifica la conexión con la base de datos y vuelve a intentar.',
            });
        }
    }

    async insertProducto(data) {
        let dataForm = new FormData();
        Object.keys(data).forEach(key => {
            dataForm.append(key, data[key]);
        });

        try {
            let response = await fetch('./api/producto.php', {
                method: 'POST',
                body: dataForm
            });

            let result = await response.json();

            if(result.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo agregar el producto',
                    text: result.mensaje
                }); 
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Producto agregado',
                text: result.mensaje
            });

            formData.reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Verifica la conexión con la base de datos y vuelve a intentar.',
            });
        }
    }

    async deleteProducto(data) {
        let dataForm = new FormData();
        Object.keys(data).forEach(key => {
            dataForm.append(key, data[key]);
        });

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción es permanente, por favor tenga cuidado.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (resp) => {
            if (resp.isConfirmed) {
                try {
                    let response = await fetch('./api/producto.php', {
                        method: 'POST',
                        body: dataForm
                    });
        
                    let result = await response.json();
        
                    if(result.error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'No se pudo eliminar el producto',
                            text: result.mensaje
                        }); 
                        return;
                    }
        
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado',
                        text: result.mensaje
                    });
        
                    formElement.reset();
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ha ocurrido un error',
                        text: 'Verifica la conexión con la base de datos y vuelve a intentar.',
                    });
                }     
            }
        });
    }

    showProductoHTML(data) {
        let { codigo_prod, nombre_prod, marca_prod, precio_compra_prod, cantidad_comprada_prod } = data;

        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${nombre_prod}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Código: ${codigo_prod}</h6>
                <p class="card-text"><small><strong>Marca del producto:</strong> ${marca_prod}</small></p>
                <p class="card-text"><small><strong>Cantidad comprada:</strong> ${cantidad_comprada_prod} unidades</small></p>
                <p class="card-text"><small><strong>Precio de compra:</strong> $${precio_compra_prod}</small></p>
            </div>
        `;

        this.clearResultado();
        
        infoProdContainer.appendChild(card);
    }

    clearResultado() {
        while(infoProdContainer.firstChild) {
            infoProdContainer.removeChild(infoProdContainer.firstChild);
        }
    }
}