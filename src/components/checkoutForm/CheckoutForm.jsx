  import { Button, Grid } from "@material-ui/core";
  import { CardElement } from "@stripe/react-stripe-js";
  import { getBasketTotal } from "../../reducer";
  import accounting from "accounting";
  import { useStateValue } from "../../StateProvider";
  import { useStripe, useElements } from '@stripe/react-stripe-js';
  import axios from 'axios';


  const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: false,
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
    const [{ basket }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
      e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      });

      if(!error) {
        const { id } = paymentMethod;
        try {
          const { data } = await axios.post('http://localhost:5173/api/checkout', {
          id,
          amount: getBasketTotal(basket) * 100
        })
        console.log("data", data)
        } catch (error) {
          console.log(error)
        }
        
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
        Pay {accounting.formatMoney(getBasketTotal(basket), {
          precision: 0,
          thousand: ",",
        })}
        </Button>
        </Grid>
        
      </form>
    );
  };

  export default CheckoutForm;