import axios from 'axios'

//action types
const DELETE_PRODUCT = 'DELETE_PRODUCT'

//action creator
const deletedProduct = (products) => {
    return {
        type: DELETE_PRODUCT,
        products
    }
}

//thunk creator
export const deleteProduct = (id, history) => {
    return async (dispatch) => {
        try {
            const { data: products } = await axios.delete(`/api/students/${id}`)
            dispatch(deletedProduct(products))
            history.push('/')
        } catch (error) {
            console.log('Error deleting Student from DB', error)
        }
    }
}

//initial state
const initialState = []

//reducer
const deleteProductReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_PRODUCT:
            return state.filter((products) => products.id !== action.students.id)
        default: 
            return state
    }
}

export default deleteProductReducer