const initialState = {
    items: []
}

const cart = (state = initialState, action) => {
    if (action.type === 'SET_CART') {
    return {
        ...state,
        items: action.payload,
    }
    return state
 }}

 export default cart;