import { calculateBtn, valueInput, initialStateSelect, finalStateSelect, alertContainer } from "../selectors.js";
import { dataStoreConvert, dataUserConvert } from "../utilities.js";
import UserInterface from './UserInterface.js'

export default class Conversor {
    ui = new UserInterface();

    constructor() {
        calculateBtn.onclick = evt => this.validateField(evt);
    }

    readFiels() {
        dataUserConvert.valueConvert = valueInput.value;
        dataUserConvert.initTypeConvert = initialStateSelect.value;
        dataUserConvert.finalTypeConvert = finalStateSelect.value;
    }

    validateField(evt) {
        evt.preventDefault();
        this.readFiels();
        
        const { valueConvert, initTypeConvert, finalTypeConvert } = dataUserConvert;

        if(!valueConvert.trim() || initTypeConvert === 'NN' || finalTypeConvert === 'NN') {
            this.ui.showAlert(alertContainer);
            return;
        }

        this.calculateConvert(Number(valueConvert), initTypeConvert, finalTypeConvert);
    }

    calculateConvert(valueConvert, initTypeConvert, finalTypeConvert) {
        let resultConvert = valueConvert * dataStoreConvert[initTypeConvert].equiv[finalTypeConvert];
        let initialTypeLabel = dataStoreConvert[initTypeConvert].label;
        let finalTypeLabel = dataStoreConvert[finalTypeConvert].label;

        this.showResult(valueConvert, resultConvert, initialTypeLabel, finalTypeLabel);
    }

    showResult(valueConvert, resultConvert, initialTypeLabel, finalTypeLabel) {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('border', 'rounded', 'border-success', 'p-3');
        resultDiv.innerHTML = `
            <h1 class="text-center">Resultados</h1>
            <p class="text-center" style="color: var(--bs-gray);">
                <em class="fa fa-check" style="font-size: 150px;background: var(--bs-white);color: var(--bs-green);"></em>
            </p>
            <p class="text-center">A continuación encontrará los resultados de la conversión:</p>
            <div class="d-flex justify-content-center align-items-xl-center">
                <p class="mb-0">${valueConvert} ${initialTypeLabel}</p>
                <em class="fa fa-long-arrow-right" style="font-size: 31px;color: var(--bs-gray); margin: 0 10px;"></em>
                <p class="mb-0">${resultConvert} ${finalTypeLabel}</p>
            </div>
        `;

        this.ui.showResult(resultDiv);
    }
}