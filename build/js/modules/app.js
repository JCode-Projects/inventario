import { existCalculator, existConversor, formData, formElement } from './selectors.js';
import Calculator from './classes/Calculator.js';
import Conversor from './classes/Conversor.js';
import Administrador from './classes/Administrador.js';
import Producto from './classes/Producto.js';

export function executeApp() {
    if(existCalculator) {
        let instanceCalc = new Calculator();
    } else if(existConversor) {
        let instanceConv = new Conversor();
    } else if(formData || formElement) {
        let instanceProd = new Producto();
    }

    let instanceAdmin = new Administrador();
}   