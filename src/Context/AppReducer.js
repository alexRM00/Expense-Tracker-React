//how we specify th application changes in response in certain actions to our context
export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}