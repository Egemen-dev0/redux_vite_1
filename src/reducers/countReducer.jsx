export const SINAN_ACTION = "sinanAction";
export const ELIF_ACTION = 'elifAction'
export const GOKALP_ACTION = "gokalpAction"
export const NEBI_ACTION = 'nebiAction'
export const EGEMEN_ACTION = "egeAction"
export const INCREMENT = 'incrementAmount'

export function reducer(state = 0, action) {
    if (action.type == INCREMENT) {
        return state + 1;
    } else if (action.type == INCREMENT_AMOUNT) {
        return state + action.payload
    } else {
        return state;
    }
}

const initalState = {
    count: 0,
    sinanText: "sinan",
    nebiText: "nebi",
    egeText: "ege",
    gokalpText: "gökalp",
    elifText: "elif"
}

export function globalReducer(state = initalState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        };
    } else if (action.type === SINAN_ACTION) {
        return {
            ...state,
            sinanText: action.payload
        }
    }
    else if (action.type === ELIF_ACTION) {
        return {
            ...state,
            elifText: action.payload
        }
    } else if (action.type === EGEMEN_ACTION) {
        return {
            ...state,
            egeText: action.payload
        }
    } else if (action.type === GOKALP_ACTION) {
        return {
            ...state,
            gokalpText: action.payload
        }
    } else if (action.type === NEBI_ACTION) {
        return {
            ...state,
            nebiText: action.payload
        }
    }

    else {
        return state;
    }
}