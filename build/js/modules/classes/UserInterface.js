import { columnResult } from "../selectors.js";

export default class UserInterface {
    showAlert(alertContainer) {
        const alert = document.createElement('div');
        alert.classList.add('alert', 'alert-danger');
        alert.role = 'alert';
        alert.innerHTML = '<span style="font-weight: bold;"><strong>Todos los campos son obligatorios.</strong></span>';

        if(!document.querySelector('.alert-danger')) {
            alertContainer.appendChild(alert);

            setTimeout(() => {
                alert.remove();
            }, 3000);
        }
    }

    showResult(resultContainer) {
        columnResult.firstElementChild.remove();
        columnResult.appendChild(resultContainer);
    }
}