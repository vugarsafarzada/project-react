import { COUNTER_MİNUS, COUNTER_PLUS } from "../types";
export const plus = () => {
    return{
        type: COUNTER_PLUS
    }
}
export const minus = () => {
    return {
        type: COUNTER_MİNUS
    }
}