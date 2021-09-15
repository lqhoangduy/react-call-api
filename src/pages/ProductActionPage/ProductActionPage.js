import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductEditRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if(match) {
            var id = match.params.id;
            this.props.getProductEdit(id);
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            if(this.props && this.props.itemEditing) {
                var { id, name, price, status } = this.props.itemEditing;
                this.setState({
                    id: id,
                    txtName: name,
                    txtPrice: price,
                    chkbStatus: status
                })
            }
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if(id) { //update
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    render() {
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                <div className="card border-primary">
                    <div className="card-header bg-primary text-white">
                        {id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSave}>
                            <div className="mb-3">
                                <label className="form-label">Tên sản phẩm</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="txtName"
                                    value={txtName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Giá sản phẩm</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name="txtPrice"
                                    value={txtPrice}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Trạng thái</label>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox"
                                        id="status"
                                        name="chkbStatus"
                                        value={chkbStatus}      
                                        onChange={this.onChange}
                                        checked={chkbStatus}
                                    />
                                    <label className="form-check-label" htmlFor="status">Còn hàng</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-3">Lưu lại</button>
                            <Link to="/products" className="btn btn-danger">
                                Trở lại
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itemEditing: state.itemEditing
})

const mapDispatchToProps = (dispatch, props) => ({
    onAddProduct: (product) => {
        dispatch(actAddProductRequest(product));
    },
    getProductEdit: (id) => {
        dispatch(actGetProductEditRequest(id));
    },
    onUpdateProduct: (product) => {
        dispatch(actUpdateProductRequest(product));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);