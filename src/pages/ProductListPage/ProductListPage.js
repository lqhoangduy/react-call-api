import React,  { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';

class ProductListPage extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <Link to="/products/add" className="btn btn-primary float-start">Thêm sản phẩm</Link>
                </div>
                <div className="col-lg-12 mt-3">
                    <ProductList>
                        { this.showProducts(products) }
                    </ProductList>
                </div>
            </div>
        )
    }
    
    showProducts(products) {
        var result = null;

        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem 
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }

        return result;
    }
}

const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchAllProducts: () => {
        dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
        dispatch(actDeleteProductRequest(id));
    } 
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);