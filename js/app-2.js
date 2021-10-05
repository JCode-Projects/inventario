const alertContainer = document.querySelector('#error-fields');
const valueInput = document.querySelector('#stored');
const initialStateSelect = document.querySelector('#initial-state');
const finalStateSelect = document.querySelector('#final-state');
const calculateBtn = document.querySelector('#calculate');
const columnResult = document.querySelector('#column-result');

class ConvertData {
    constructor() {
        calculateBtn.onclick = evt => this.validateField(evt);
    }

    dataStoreConvert = {
        B: {
            label: 'Bytes',
            equiv: { B: 1, KB: 1e-3, MB: 1e-6, GB: 1e-9, TB: 1e-12 }
        },
        KB: {
            label: 'KiloBytes',
            equiv: { B: 1e3, KB: 1, MB: 1e-3, GB: 1e-6, TB: 1e-9 }
        },
        MB: {
            label: 'MegaBytes',
            equiv: { B: 1e6, KB: 1e3, MB: 1, GB: 1e-3, TB: 1e-6 }
        },
        GB: {
            label: 'GigaBytes',
            equiv: { B: 1e9, KB: 1e6, MB: 1e3, GB: 1, TB: 1e-3 }
        },
        TB: {
            label: 'TeraBytes',
            equiv: { B: 1e12, KB: 1e9, MB: 1e6, GB: 1e3, TB: 1}
        }
    }

    dataUserConvert = {
        initTypeConvert: '',
        finalTypeConvert: '',
        valueConvert: ''
    }

    readFiels() {
        this.dataUserConvert.valueConvert = valueInput.value;
        this.dataUserConvert.initTypeConvert = initialStateSelect.value;
        this.dataUserConvert.finalTypeConvert = finalStateSelect.value;
    }

    validateField(evt) {
        evt.preventDefault();
        this.readFiels();
        
        const { valueConvert, initTypeConvert, finalTypeConvert } = this.dataUserConvert;
        if(!valueConvert.trim() || initTypeConvert === 'NN' || finalTypeConvert === 'NN') {
            const alert = document.createElement('div');
            alert.classList.add('alert', 'alert-danger');
            alert.role = 'alert';
            alert.innerHTML = '<span><strong>Digita la cantidad y selecciona una unidad.</strong></span>';

            if(!document.querySelector('.alert-danger')) {
                alertContainer.appendChild(alert);

                setTimeout(() => {
                    alert.remove();
                }, 3000);
            }
            return;
        }

        this.calculateConvert(Number(valueConvert), initTypeConvert, finalTypeConvert);
    }

    calculateConvert(valueConvert, initTypeConvert, finalTypeConvert) {
        let resultConvert = valueConvert * this.dataStoreConvert[initTypeConvert].equiv[finalTypeConvert];
        let initialTypeLabel = this.dataStoreConvert[initTypeConvert].label;
        let finalTypeLabel = this.dataStoreConvert[finalTypeConvert].label;

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
            <p class="text-center">A continuación encontrará los resultados de la coversión:</p>
            <div class="d-flex justify-content-center align-items-xl-center">
                <p class="mb-0">${valueConvert} ${initialTypeLabel}</p>
                <em class="fa fa-long-arrow-right" style="font-size: 31px;color: var(--bs-gray); margin: 0 10px;"></em>
                <p class="mb-0">${resultConvert} ${finalTypeLabel}</p>
            </div>
        `;

        columnResult.firstElementChild.remove();
        columnResult.appendChild(resultDiv);
    }
}

const instance = new ConvertData();