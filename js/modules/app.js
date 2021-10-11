import { existCalculator, existConversor } from './selectors.js';
import Calculator from './classes/Calculator.js';
import Conversor from './classes/Conversor.js';

export function executeApp() {
    if(existCalculator) {
        let instanceCalc = new Calculator();
    } else if(existConversor) {
        let instanceConv = new Conversor();
    }
}   