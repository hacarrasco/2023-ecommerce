import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')


const app = express()
const stripe = new Stripe("sk_test_51NtEpvK9PReBfGslEtYulI7Qc7pFp8B4gjlYPcIjAlple48G82yWCOQejCAEntG7ZzWt22qfIm2jVCdB3QfAdLXj00su1qHyjn")

//middelware

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())


app.post('/api/checkout', async (req, res) => {
 try {
  const { id, amount } = req.body
 
 const payment = await stripe.paymentIntents.create({
  amount,
  currency: "",
  description: "",
  payment_method: id,
  confirm: true
 })
 console.log(payment)
 res.send({message: 'Succesfull payment'})
 } catch (error) {
  console.log(error);
  res.json({message: error})
 }
})

app.listen(3001, () => {
 console.log('Server on port', 3001)
})