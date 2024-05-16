import {EGEMEN_ACTION} from "../reducers/countReducer"

export function egeAction(value) {
    return {type:EGEMEN_ACTION, payload:value};
}