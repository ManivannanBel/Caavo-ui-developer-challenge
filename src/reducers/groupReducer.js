import { CREATE_GROUP } from "../actions/types";

const initialState = {
    groups : {},
}

export default (state = initialState, actions) => {
    switch(actions.type) {
        case CREATE_GROUP: 
            return {
                ...state,
                groups : addGroup(state.groups, actions.payload),
                
            }
        default:
            return state;
    }
}

const addGroup = (groups, payload) => {
    groups[payload.id] = payload;
    return {...groups};
}