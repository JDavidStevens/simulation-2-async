const initialState={
    propertyName: '',
    propertyDescription:'',
    address:'',
    city:'',
    stateName:'',
    zip:'',
    img:'',
    loanAmount:'',
    mortgage: '',
    desiredRent: ''
}



const UPDATE_CANCEL= 'UPDATE_CANCEL';
const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_ADDRESS='UPDATE_ADDRESS';
const UPDATE_CITY='UPDATE_CITY';
const UPDATE_STATE_NAME='UPDATE_STATE_NAME';
const UPDATE_ZIP='UPDATE_ZIP';
const UPDATE_IMG='UPDATE_IMG';
const UPDATE_LOAN_AMOUNT='UPDATE_LOAN_AMOUNT';
const UPDATE_MORTGAGE='UPDATE_MORTGAGE';
const UPDATE_DESIRED_RENT='UPDATE_DESIRED_RENT';
// const UPDATE_SUBMIT_TO_DB='UPDATE_SUBMIT_TO_DB';

function reducer(state=initialState,action){
    switch(action.type){
        case UPDATE_CANCEL:
            return Object.assign({},initialState)
        case UPDATE_PROPERTY_NAME:
            return Object.assign({},state,{propertyName: action.payload});
        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({},state,{propertyDescription: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({},state,{address: action.payload});
        case UPDATE_CITY:
            return Object.assign({},state,{city: action.payload});
        case UPDATE_STATE_NAME:
            return Object.assign({},state,{stateName: action.payload});
        case UPDATE_ZIP:
            return Object.assign({},state,{zip: action.payload});
        case UPDATE_IMG:
            return Object.assign({},state,{img: action.payload});
        case UPDATE_LOAN_AMOUNT:
            return Object.assign({},state,{loanAmount: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign({},state,{mortgage: action.payload});
        case UPDATE_DESIRED_RENT:
            return Object.assign({},state,{desiredRent: action.payload});
        // case UPDATE_SUBMIT_TO_DB:
        //     return Object.assign({},initialState);
            //this last step will CANCEL state after we submit the info to the db
        default: return state;
    }

}

export function updateCancel(){
    return {
        type: UPDATE_CANCEL,
    }
}
export function updatePropertyName(propertyName){
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}
export function updatePropertyDescription(propertyDescription){
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescription
    }
}
export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateStateName(stateName){
    return {
        type: UPDATE_STATE_NAME,
        payload: stateName
    }
}
export function updateZip(zip){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateImg(img){
    return{
        type: UPDATE_IMG,
        payload: img
    }
}
export function updateLoan(loanAmount){
    return{
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    }
}
export function updateMortgage(mortgage){
    return{
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateDesiredRent(desiredRent){
    return{
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}
// export function updateSubmitToDb(submitToDb){
//     return{
//         type: UPDATE_SUBMIT_TO_DB,
//         payload: submitToDb
//     }
// }

export default reducer;

