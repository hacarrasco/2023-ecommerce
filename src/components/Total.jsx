import accounting from "accounting";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useStateValue } from "../StateProvider";
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from "../reducer";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    marginTop: "2rem",
  },
}));

const Total = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>
        {accounting.formatMoney(getBasketTotal, {
          precision: 0,
          thousand: ",",
        })}
      </h5>
      <Button 
        className={classes.button} 
        variant="contained" 
        color="secondary"
        onClick={handleCheckout}
        >
        Check out
      </Button>
    </div>
  );
};

export default Total;
