import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state ={
        ingredients: null,
        price: 0
    }
    initState = () => {
        const queryInit = new URLSearchParams(
            this.props.location.search
        );
        const ingredientsInit = {};
        let priceInit = 0;
        for (let param of queryInit.entries()) {
            if (param[0] === 'price') {
                priceInit = param[1];
            } else {
                ingredientsInit[param[0]] = +param[1];
            }
        }
        return {
            ingredients: ingredientsInit,
            totalPrice: priceInit
        };
    };
    state = this.initState();

    checkoutCanclledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
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
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }

}

export default Checkout;