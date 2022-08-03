import axios from 'axios';


//Action definition
const GOT_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

//Action Creator
const gotSingleProduct = (products) => {
    return {
        type: GOT_SINGLE_PRODUCT,
        products
    };
};

//Thunk Creator
export const getSingleProduct = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`/api/allproducts/${id}`)
            dispatch(gotSingleProduct(data));
        } catch (error){
            console.log('Error fetching single product!', error)
        };
    };
};

//Initial State
const initialState = {}

//Reducer
const singleProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_SINGLE_PRODUCT:
            return action.product
    }
}

export default singleProductReducer