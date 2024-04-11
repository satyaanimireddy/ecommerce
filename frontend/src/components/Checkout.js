import React from 'react'
import { useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../redux/actions/orderAction'
const Checkout = ({ amount }) => {
    let dispatch = useDispatch()

    let onToken = (token) => {
        // console.log(token)
        dispatch(placeOrder(token, amount))
    }
    return (
        <div>
            <StripeCheckout
                token={onToken}
                stripeKey='pk_test_51P169DSDqIahDexrz2bbNLi8OcNogx5YJgFGHDjbp33QjVaqP5jwsItaUHVrskEfPEPcVJOIL3dXjNEgQo6je2ia005QnsKati'
                name='this is my Card'
                amount={amount * 100}
                currency='INR'
                shippingAddress
            >
                <button className='btn btn-dark'>Buy Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout