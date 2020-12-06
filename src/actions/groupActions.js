import { CREATE_GROUP } from './types';

export const createGroup = (group) => dispatch => {
    dispatch({
        type : CREATE_GROUP,
        payload : group
    })
}