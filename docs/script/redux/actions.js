export const UPDATE_VALUE = 'UPDATE_VALUE';
export const CLEAR_FORM = 'CLEAR_FORM';
export const LOAD_NALOG = 'LOAD_NALOG';

export function updateValue(id, value) {
    return { type: UPDATE_VALUE, id, value }
};

export function clearForm(id, value) {
    return { type: CLEAR_FORM }
};

export function loadNalog(loadedData) {
    return { type: LOAD_NALOG, nalog: loadedData.nalog, naziv: loadedData.naziv_naloga }
};