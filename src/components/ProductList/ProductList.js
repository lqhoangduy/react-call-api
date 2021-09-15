import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    Danh sách sản phẩm
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.children }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;