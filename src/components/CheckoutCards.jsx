import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import  { useStateValue } from '../StateProvider'


// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme) => ({
    root: {
        maxWidth: 345,
    },
    action: {
        marginTop: "1rem"
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    },
    cardActions: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center"
    },
    cardRating: {
      display: "flex"
    }
}))

// eslint-disable-next-line react/prop-types
const CheckoutCard = ({ product }) => {
  const { price, image, rating, name, id } =
    (typeof product !== "undefined" && product) || {};
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();  

  
  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id
    })
  }

  return (
    <Card sx={{ maxWidth: 345, marginTop: "90px" }}>
      <CardHeader
        action={
          <Typography
            // className={classes.action}
            variant="h5"
            color="textSecondary">
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        // className={classes.media}
        image={image}
        title={name}
        style={{ height: "200px", width: "280px" }}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {Array(rating)
          .fill()
          // eslint-disable-next-line no-unused-vars
          .map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <p>&#11088;</p>
          ))}
        </div>
        <IconButton>
        <DeleteIcon fontSize="large" onClick={removeItem}/>
        </IconButton>
      
      </CardActions>
    </Card>
  );
};
export default CheckoutCard;
