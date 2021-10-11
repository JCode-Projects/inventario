// Estructura del objeto de información de la calculadora
export const calculateValues = {
    purchaseValue: '',
    utilitiesValue: '',
    ivaValue: ''
}

// Modelo de conversión para la página de conversión de unidades
export const dataStoreConvert = {
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

// Estructura del objeto de información del conversor de unidades
export const dataUserConvert = {
    initTypeConvert: '',
    finalTypeConvert: '',
    valueConvert: ''
}