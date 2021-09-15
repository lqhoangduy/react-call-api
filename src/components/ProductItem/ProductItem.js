import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if(window.confirm('Bạn chắc chắn muốn xoá sản phẩm?')) {
            this.props.onDelete(id)
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'success' : 'secondary';
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge bg-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link 
                        to={`/products/${product.id}/edit`}
                        type="button" 
                        className="btn btn-success btn-sm"

                    >Sửa</Link>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger btn-sm btn-padding-x-2" 
                        onClick={() => this.onDelete(product.id)}
                    >Xoá</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;