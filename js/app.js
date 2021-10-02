class Selectors {
    static purchaseValueInput = document.querySelector('#purchase-value');
    static utilitiesValueInput = document.querySelector('#utilities');
    static ivaValueInput = document.querySelector('#iva');
    static calculateBtn = document.querySelector('#calculate');
    static alertContainer = document.querySelector('#error-fields');
    static columnResult = document.querySelector('#column-result');
}

class UI {
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

    showResult(data) {

        const resultColumn = document.createElement('div');
        resultColumn.classList.add('border', 'rounded', 'border-success', 'p-2');
        resultColumn.innerHTML = `
            <h1 style="font-size: 31px;text-align: center;font-family: Montserrat, sans-serif;font-weight: bold;">Resultados</h1>
            <p style="text-align: center;color: var(--bs-gray);"><i class="fa fa-check" style="font-size: 150px;text-align: center;background: var(--bs-white);color: var(--bs-green);"></i></p>
            <p style="font-family: Montserrat, sans-serif;font-size: 18px;text-align: left;">A continuación encontrará los resultados del calculo realizado:</p>
            <div class="d-flex justify-content-lg-start align-items-lg-center">
                <p style="font-family: Montserrat, sans-serif;font-size: 18px;font-weight: bold;margin-bottom: 0px;">Valor de compra:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">$${ Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(data['0']) } </span>
            </div>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;">
                <p style="font-family: Montserrat, sans-serif;font-size: 18px;font-weight: bold;margin-bottom: 0px;">Utilidad o ganancia:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">${data['1']}%</span>
            </div>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;">
                <p style="font-family: Montserrat, sans-serif;font-size: 18px;font-weight: bold;margin-bottom: 0px;">IVA:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">${data['2']}%</span>
            </div>
            <hr>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;"><i class="fa fa-barcode" style="margin-right: 10px;font-size: 20px;"></i>
                <p style="font-family: Montserrat, sans-serif;font-size: 18px;font-weight: bold;margin-bottom: 0px;">Valor de venta:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">$${ Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(data['totalPurchase']) }</span>
            </div>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;">
                <p style="font-family: Montserrat, sans-serif;font-size: 18px;font-weight: bold;margin-bottom: 0px;"><i class="fa fa-money" style="margin-right: 10px;font-size: 20px;"></i>Ganancia:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">$${ Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(data['earnings'])}</span>
            </div>
        `;
        
        Selectors.columnResult.firstElementChild.remove();
        Selectors.columnResult.appendChild(resultColumn);
    }
}

let ui = new UI();

class Functions {
    constructor() {
        Selectors.calculateBtn.addEventListener('click', evt => this.calculateTotal(evt));
    }

    calculateValues = {
        purchaseValue: '',
        utilitiesValue: '',
        ivaValue: ''
    }

    calculateTotal(evt) {
        evt.preventDefault();
        
        let enterUser = this.fillFields();
        if(enterUser.some(val => val === '')) {
            ui.showAlert(Selectors.alertContainer);
            return;
        }

        let finalValues = enterUser.map(val => Number(val));
        let results = {
            totalPurchase: finalValues[0] + finalValues.slice(1, 3).reduce((total, val) => total + (finalValues[0] * (val / 100)), 0),
            earnings: finalValues[0] * (finalValues[1] / 100)
        }

        ui.showResult({ ...finalValues, ...results });
    }

    fillFields() {
        let { purchaseValue, utilitiesValue, ivaValue } = this.calculateValues;
        purchaseValue = Selectors.purchaseValueInput.value;
        utilitiesValue = Selectors.utilitiesValueInput.value;
        ivaValue = Selectors.ivaValueInput.value;

        return [ purchaseValue, utilitiesValue, ivaValue ];
    }
}

const app = new Functions();