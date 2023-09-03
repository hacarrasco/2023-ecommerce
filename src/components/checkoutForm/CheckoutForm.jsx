import { Button } from "@material-ui/core";
import { CardElement } from "@stripe/react-stripe-js";

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
  return (
    <form>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <Button 
       variant='outlined'
       onClick={handleBack}
       >Back
      </Button>
      <Button 
       type='submit'
       variant='contained'
       color='primary'>
       Pay $40,500
       </Button>
    </form>
  );
};

export default CheckoutForm;
