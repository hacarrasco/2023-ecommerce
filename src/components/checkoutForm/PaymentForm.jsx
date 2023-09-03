import React from 'react'
import { Divider, Typography } from '@material-ui/core'
import Review from './Review'
import { Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_live_51NmPCBJSaMdd1lRjtdFHNM3qIrPXzTxUxgqh2PbPRSetGHM4EgNFy2YJXuwdyQIox36I5ranDWy12bLh4NyKC6eQ00kPq81ULx")

const PaymentForm = ({ handleNext, handleBack}) => {
  return (
    <>
      <Review/>
      <Divider/>
      <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>
         Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm handleNext={ handleNext} handleBack={ handleBack }/>
      </Elements>
    </>
  )
}

export default PaymentForm