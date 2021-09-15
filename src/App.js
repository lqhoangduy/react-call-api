import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
    
                    <div className="container mt-4">
                        { this.showContentMenu(routes) }
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenu = (routes) => {
        var result = null;
        if(routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
