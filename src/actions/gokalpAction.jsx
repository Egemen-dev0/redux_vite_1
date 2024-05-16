import { GOKALP_ACTION } from "../reducers/countReducer";

export function gokalpAction(Text) {
    return {type:GOKALP_ACTION, payload: Text};
}