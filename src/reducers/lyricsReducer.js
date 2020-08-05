export default (state =[],action)=>{
    // if (action.type === 'FETCH_LYRICS'){
    //     return action.payload;
    // }
    // return state;
    switch(action.type){
        case 'FETCH_LYRICS':
            return action.payload;
        default:
            return state;
    }
}