import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import tenis from "../assets/img/tenis.jpg";
import { AddShoppingCart } from "@mui/icons-material";
import accounting from "accounting";

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            // className={classes.action}
            variant="h5"
            color="textSecondary">
            {accounting.formatMoney(800)}
          </Typography>
        }
        title="Shoes"
        subheader="in Stock"
      />
      <CardMedia
        // className={classes.media}
        image={tenis}
        title="Nike shoes"
        style={{ height: "200px", width: "300px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Running Shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCart />
        </IconButton>
        {Array(4)
          .fill()
          // eslint-disable-next-line no-unused-vars
          .map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <p>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Zapatillas de deporte para correr</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
