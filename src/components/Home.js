import React, { Component } from 'react';
import GetEmployees from './GetEmployees';
import BurgerDeal from './BurgerDeal';

class Home extends Component {
    render() {
        return (
            <div className="format">
                <div className="container">
                    <div className="jumbotron">
                        <h1><BurgerDeal /></h1>
                    </div>
                    <GetEmployees />
                </div>
            </div>
        );
    }
}
export default Home;