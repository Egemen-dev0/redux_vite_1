import { SINAN_ACTION } from "../reducers/countReducer"
export function updateSinanText(newText) {
    return {
        type: SINAN_ACTION,
        payload: newText
    }
}