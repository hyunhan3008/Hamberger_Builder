import React, { Component } from 'react';
import classes from './ContactData.module.css'; 
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        // alert('You Continue!')
        this.setState({ loading: true });
        const order ={
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Hyun Han',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '035156',
                    country: 'Korea'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false}); 
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    render () {
        let form = (
            < form >
                <input className={classes.Input} type="text" name='name' placeholder="Your name" />
                <input className={classes.Input} type="email" name='email' placeholder="Your email" />
                <input className={classes.Input} type="text" name='street' placeholder="Street" />
                <input className={classes.Input} type="text" name='postalCode' placeholder="Your Postal Code" />
                <Button
                    btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </form >
        )
        if ( this.state.laoding ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Detail</h4>
                {form}
            </div>
        );
    }

};

export default ContactData;