import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null)
        .then(res => {
            dispatch(actFetchProducts(res.data));
        })
    };
}

export const actFetchProducts = (products) => ({
    type: Types.FETCH_PRODUCTS,
    products,
})

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null )
        .then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id) => ({
    type: Types.DELETE_PRODUCT,
    id
})

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product)
        .then(res => dispatch(actAddProduct(res.data)))
    }
}

export const actAddProduct = (product) => ({
    type: Types.ADD_PRODUCT,
    product
})

export const actGetProductEditRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null)
        .then(res => {
            dispatch(actGetProductEdit(res.data));
        });
    }
}

export const actGetProductEdit = (product) => ({
    type: Types.EDIT_PRODUCT,
    product
})

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product)
        .then(res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) => ({
    type: Types.UPDATE_PRODUCT,
    product
})