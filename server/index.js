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
 console.log(req.body)
 const { id, amount } = req.body
  try{
  const payment = await stripe.paymentIntents.create({
  amount,
  currency: "USD",
  description: "Basket of products",
  payment_method: id,
  payment_method_types
  : ['card'],
  confirm: true
 })
 console.log(payment)
 return res.status(200).json({message: 'Succesfull payment'})
 } catch (error) {
  console.log(error);
  return res.json({message: error.raw.message})
 }
})

app.listen(3001, () => {
 console.log('Server on port', 3001)
})