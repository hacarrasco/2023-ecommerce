import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import  Typography  from "@mui/material/Typography";
import products from '../product_data';
import CheckoutCard from './CheckoutCards';
import Total from "./Total"

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((_theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
        marginTop: '70px'
    },
}));



 const CheckoutPage = () => {
    const classes = useStyles();

    const FormRow = () => {
       return (
        <>
           {
            products.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <CheckoutCard key={item.id} product={item}/>
                </Grid>
            ))
           }
        </>
       )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}
export default CheckoutPage;