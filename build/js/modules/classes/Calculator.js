import { calculateBtn, purchaseValueInput, utilitiesValueInput, ivaValueInput, alertContainer } from '../selectors.js';
import { calculateValues } from '../utilities.js';
import UserInterface from './UserInterface.js';

export default class Calculator {
    ui = new UserInterface();

    constructor() {
        calculateBtn.addEventListener('click', evt => this.calculateTotal(evt));
    }

    calculateTotal(evt) {
        evt.preventDefault();
        
        let enterUser = this.fillFields();
        if(enterUser.some(val => val === '')) {
            this.ui.showAlert(alertContainer);
            return;
        }

        let finalValues = enterUser.map(val => Number(val));
        let results = {
            totalPurchase: finalValues[0] + finalValues.slice(1, 3).reduce((total, val) => total + (finalValues[0] * (val / 100)), 0),
            earnings: finalValues[0] * (finalValues[1] / 100)
        }

        this.createResultDOM({ ...finalValues, ...results });
    }

    fillFields() {
        let { purchaseValue, utilitiesValue, ivaValue } = calculateValues;
        purchaseValue = purchaseValueInput.value;
        utilitiesValue = utilitiesValueInput.value;
        ivaValue = ivaValueInput.value;

        return [ purchaseValue, utilitiesValue, ivaValue ];
    }

    createResultDOM(data) {
        const resultColumn = document.createElement('div');
        resultColumn.classList.add('border', 'rounded', 'border-success', 'p-2');
        resultColumn.innerHTML = `
            <h1>Resultados</h1>
            <p class="icon-style">
                <em class="fa fa-check" style="color: var(--bs-green);"></em>
            </p>
            <p>A continuación encontrará los resultados del cálculo realizado:</p>
            <div class="d-flex justify-content-lg-start align-items-lg-center">
                <p class="mb-0" style="font-weight: bold;">Valor de compra:&nbsp;</p><span>$${ Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(data['0']) } </span>
            </div>
            <div class="d-flex justify-content-lg-start align-items-lg-center mt-2">
                <p class="mb-0" style="font-weight: bold;">Utilidad o ganancia:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">${data['1']}%</span>
            </div>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;">
                <p class="mb-0" style="font-weight: bold;">IVA:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">${data['2']}%</span>
            </div>
            <hr>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;"><i class="fa fa-barcode" style="margin-right: 10px;font-size: 20px;"></i>
                <p class="mb-0" style="font-weight: bold;">Valor de venta:&nbsp;</p><span style="font-family: Montserrat, sans-serif;">$${ Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(data['totalPurchase']) }</span>
            </div>
            <div class="d-flex justify-content-lg-start align-items-lg-center" style="margin-top: 10px;">
                <p class="mb-0" style="font-weight: bold;">
                    <i class="fa fa-money" style="margin-right: 10px;font-size: 20px;"></i> Ganancia:&nbsp;
                </p>
                <span>$${ Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(data['earnings'])}</span>
            </div>
        `;

        this.ui.showResult(resultColumn);
    }
}