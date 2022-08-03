import axios from 'axios';

//action type
const CREATE_PRODUCT = 'CREATE_PRODUCT'

//action creator
const addedProduct = (products) => {
    return{
        type: CREATE_PRODUCT,
        products
    }
}

//thunk creator
export const addProduct = (products, history) => {
    return async (dispatch) => {
        try {
            const {data: created} = await axios.post('/api/products', products)
            dispatch(addedProduct(created))
            history.push('/')
        }catch (error){
            console.log('Error adding product to DB!', error)
        }
    }
}

//initial state
const initialState = []

//reducer
const addProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_PRODUCT:
            return [...state, action.products]
        default:
            return state
    }
}

export default addProductReducer