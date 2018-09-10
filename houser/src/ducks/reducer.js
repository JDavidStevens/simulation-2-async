import axios from 'axios';

const initialState={
    user:''
}

const LOGIN="LOGIN";
const REGISTER= "REGISTER";

export default function(state=initialState,action){
    let {payload}=action;
    switch(action.type){
        case LOGIN + '_FULFILLED':
            return Object.assign({},state,{user:payload.username})

        case REGISTER + '_FULFILLED':
            return Object.assign({},state,{user:payload.username})
        default: return state;
    }
}

export function login(obj,history){
    return{
        type: LOGIN,
        payload:axios.post('/api/auth/login',obj).then(response=>{
            history.push('/dashboard')
            return response.data;
        })
    }
}

export function register(obj,history){
    return{
        type: REGISTER,
        payload:axios.post('/api/auth/register',obj).then(response=>{
            history.push('/dashboard')
            return response.data;
        })
    }
}