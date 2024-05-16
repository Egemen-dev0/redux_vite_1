import { NEBI_ACTION } from "../reducers/countReducer"

export function updateNebiText(newText) {
    return {
        type: NEBI_ACTION,
        payload: newText
    }
}