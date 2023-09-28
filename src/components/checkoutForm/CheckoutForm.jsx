  import { useState } from "react";
  import { Button, CircularProgress, Grid } from "@material-ui/core";
  import { CardElement } from "@stripe/react-stripe-js";
  import { actionTypes, getBasketTotal } from "../../reducer";
  import accounting from "accounting";
  import { useStateValue } from "../../StateProvider";
  import { useStripe, useElements } from '@stripe/react-stripe-js';
  import axios from 'axios';


  const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "rgb(240, 57, 122",
        color: "#333",
        fontSize: "18px",
        "::placeholder": {
          color: "#ccc",
        },
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238",
        },
      },
    },
  };

  const CheckoutForm = ({ handleNext, handleBack }) => {
    const [{ basket, paymentMessage }, dispatch] = useStateValue();
    const [loading, setLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
      e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });
        setLoading(true);
      if(!error) {
        const { id } = paymentMethod;
        try {
          const { data } = await axios.post('http://localhost:3001/api/checkout', {
          id,
          amount: getBasketTotal(basket) * 100,
        })
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message
        });
        if(data.message === "Succesfull payment") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          })
        }
        elements.getElement(CardElement).clear();
        handleNext();
        } catch (error) {
          console.log(error)
          handleNext();
        }
        setLoading(false)
      }
      
    }

    return (
      <form onSubmit={ handleSubmit }>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <br/>
        <Grid style={{display:"flex", justifyContent:"space-between"}}>
        <Button 
        variant='outlined'
        onClick={handleBack}
        >Back
      </Button>
      <Button 
        type='submit'
        variant='contained'
        color='primary'
        disabled={false}>
       {loading ? (<CircularProgress/>) : (`Pay ${accounting.formatMoney(getBasketTotal(basket), '')}`)}
        </Button>
        </Grid>
        
      </form>
    );
  };

  export default CheckoutForm;
