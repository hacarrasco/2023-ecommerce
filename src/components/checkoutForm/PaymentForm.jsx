import React from 'react'
import { Divider, Typography } from '@material-ui/core'
import Review from './Review'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51NtEpvK9PReBfGslOHKKIOAGrVFk3Q614Dfln0lROOYsJiJvsK7cl2c7FutEelVkufbtcajfafVKqZlfCI2cRKPY00TADjkQrN")



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