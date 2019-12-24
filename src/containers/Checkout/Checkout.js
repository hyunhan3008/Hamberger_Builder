import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ContactData from '../ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state ={
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    }

    checkoutCanclledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            //['salad', 1]
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients})
    }

    render () {
        return (
            <div>
                <CheckoutSummary
                ingredients={this.state.ingredients}
                checkoutCanclled={this.checkoutCanclledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
                <Route
                    path={this.props.match.path + "/contact-data/"} 
                    component={ContactData}/>
            </div>
        );
    }

}

export default Checkout;