import { createDBLink, createTableLink, createBackupLink, createPdfLink } from '../selectors.js';
export default class Administrador {
    constructor() {
        createDBLink.addEventListener('click', this.createDataBase);
        createTableLink.addEventListener('click', this.createTable);
        createBackupLink.addEventListener('click', this.createBackup);
        createPdfLink.addEventListener('click', this.createPdf);
    }

    async createPdf(e) {
        e.preventDefault();
        
        try {
            const response = await fetch('./api/config/crear_pdf.php');
            const data = await response.json();
            Swal.fire({
                title: 'Reporte creado correctamente',
                text: `${data.mensaje} 
                ¿Desea abrir el archivo generado?`,
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#a4a4a4',
                confirmButtonText: 'Si, abrir',
                cancelButtonText: 'No, cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(`./api/files/reports/${data.archivo}`, '_blank');
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Algo ha salido mal al conectar a la base de datos.'
            });
        }
    }

    async createBackup(e) {
        e.preventDefault();

        try {
            const response = await fetch('./api/config/backup.php');
            const data = await response.json();
            if(data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo crear el backup',
                    text: data.message
                });
                return;
            } 

            Swal.fire({
                icon: 'success',
                title: 'Copia de seguridad creada',
                text: data.mensaje
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Algo salió mal al crear la copia de seguridad, por favor intente de nuevo.'
            });
        }
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
                text: 'No se pudo crear la base de datos, verifica la conexión con MySQL.',
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