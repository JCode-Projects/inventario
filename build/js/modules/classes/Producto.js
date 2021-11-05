import { formData, formElement, txtCodigoProd, txtNombreProd, txtMarcaProd, txtPrecioCompraProd, txtCantidadCompradaProd, txtMetodo, txtCodigoProdItem, txtMetodoItem } from '../selectors.js'
export default class Producto {
    constructor() {
        if(formData) {
            formData.addEventListener('submit', e => {
                e.preventDefault()
                
                let data = this.dataProducto();
    
                if(data.metodo == 'POST') {
                    this.insertProducto(data);
                }
            });
        } else if(formElement) {
            formElement.addEventListener('submit', e => {
                e.preventDefault()
                
                let data = this.dataElement();

                if(data.metodo == 'DELETE') {
                    this.deleteProducto(data);
                }
            });
        }
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
}