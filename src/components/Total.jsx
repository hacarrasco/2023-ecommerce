import accounting from "accounting";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useStateValue } from "../StateProvider";

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
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = basket.reduce(
    (amount, item) => amount + item.price,
    0
  );

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>
        {accounting.formatMoney(getBasketTotal, {
          precision: 0,
          thousand: ",",
        })}
      </h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Check out
      </Button>
    </div>
  );
};

export default Total;
