const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')
require('dotenv').config()

const app = express()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

app.use(cors())
app.use(express.json())

app.post('/create-checkout-session', async (req, res) => {})

app.listen(process.env.PORT, () => console.log('Server running on port 3005'))
