import { COUNTER_MİNUS, COUNTER_PLUS } from "../types";
const default_state = 0;
const reducer = (state = default_state, action) => {
    switch (action.type) {
        case COUNTER_PLUS:
            return state + 1;
        case COUNTER_MİNUS:
            return state - 1;
        default:
            return state;
    }
}
export default reducer;
