import { FETCH_USERS } from "../actions/types";

const initialState = {
    users : []
}

export default (state = initialState, actions) => {
    switch(actions.type) {
        case FETCH_USERS: 
            return {
                ...state,
                users : actions.payload
            }
        default:
            return state;
    }
}