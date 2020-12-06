import { FETCH_USERS } from './types';
import axios from 'axios';

export const fetchUsers = () => async dispatch => {
    try{
        const usersResponse = await axios.get(`/he-public-data/users49b8675.json`);
        console.log(usersResponse.data);
        dispatch({
            type : FETCH_USERS,
            payload : usersResponse.data
        })
    }catch(err){
        console.log(err);
        
    }
}