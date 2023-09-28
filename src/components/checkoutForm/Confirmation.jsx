import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom';

const Confirmation = ({ message }) => {
  return (
    <>
      <Typography variant="h6">{message}</Typography>
      <Divider />
      <Button component={Link} to="/" variant="outlined" type="button">
        Back to Home Page
      </Button>
    </>
  );
};

export default Confirmation;
