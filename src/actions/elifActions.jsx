import { ELIF_ACTION } from "../reducers/countReducer";

export function elifAmount(text) {
    return {type:ELIF_ACTION, payload:text};
}