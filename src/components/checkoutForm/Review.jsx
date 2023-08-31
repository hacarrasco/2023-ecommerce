import { Typography, List } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
//import { getBasketTotal } from "../Total"

const Review = ({ getBasketTotal }) => {
const [{ basket }, dispatch]= useStateValue();



  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {getBasketTotal(basket)}
      </List>
    </>
  )
}

export default Review