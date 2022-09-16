import { LOAD_DATA_BY_LAT_LONG } from "./types"

const initialState = {
    data: []
}

const latlongReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_DATA_BY_LAT_LONG: return {
            ...state,
            data: action.payload
        }
        default: return state
    }
}

export default latlongReducer;