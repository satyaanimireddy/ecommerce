

import express from 'express'
import stripe from 'stripe'
import { v4 as uuidv4 } from 'uuid';

let Stripe = stripe('sk_test_51P169DSDqIahDexrp0kZMcYon6dltdVxca3FuC6fhYEgZp1TeMkveG33Qh9ZlNAUOwLorqYt6YGWCmWMTi40FDSI00yJkzm4UA')

let router = express.Router()

router.post('/placeorder', async (req, res) => {
    console.log(req.
        body)
    let { token, amount, currentUser, cartItems } = req.body
    let customer = await Stripe.customers.create({
        email: token.email,
        source: token.id
    })
    let payment = await Stripe.charges.create({
        amount: amount * 100,
        currency: 'INR',
        customer: customer.id,
        receipt_email: token.email
    }, {
        idempotencyKey: uuidv4()
    })
    if (payment) {
        res.send('payment successfully')
    } else {
        res.send('failed')
    }
})

export default router