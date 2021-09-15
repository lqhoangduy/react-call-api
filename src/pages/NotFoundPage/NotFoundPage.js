import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use href="#exclamation-triangle-fill"/></svg>
                    <div>
                        Không tìm thấy trang!!!
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFoundPage;