import { createDBLink, createTableLink } from '../selectors.js';

export default class Administrador {
    constructor() {
        createDBLink.addEventListener('click', this.createDataBase);
        createTableLink.addEventListener('click', this.createTable);
    }

    async createDataBase(e) {
        e.preventDefault();
        
        try {
            let response = await fetch('./api/config/crear_db.php');
            let data = await response.json();
            if(data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: data.mensaje
                });
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Proceso exitoso',
                text: data.mensaje
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'No se pudo crear la base de datos, verifica la conexión a la base de datos.',
            });
        }
    }

    async createTable(e) {
        e.preventDefault();

        try {
            let response = await fetch('./api/config/crear_tabla.php');
            let data = await response.json();
            if(data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: data.mensaje
                });
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Proceso exitoso',
                text: data.mensaje
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'No se pudo crear la tabla, verifica la conexión a la base de datos.',
            });
        }
    }
}