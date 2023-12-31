import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/img/logo.jpg";
import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import  { useStateValue } from '../StateProvider'
import { auth } from "../firebase/firebase.config";
import { useNavigate } from 'react-router-dom'
import { actionTypes } from "../reducer";
import { signOut } from "firebase/auth";



export default function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();  
  const navigate = useNavigate();

 const handleLogOut = () => {
  if(user) {
    signOut(auth);
    dispatch({
      type: actionTypes.EMPTY_BASKET,
      basket: [],
    });
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
    navigate('/')
  }
  
 }

 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "whitesmoke" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <Link to= "/">
              <IconButton>
                <img
                  src={logo}
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "transparent",
                  }}
                />
              </IconButton>
            </Link>
          </div>
          <div
            style={{ display: "flex", width: "400px", alignItems: "center" }}>
                <Typography variant="h6" color="textPrimary" component="p">
                Hello {user ? user.email : "Guest"}
                </Typography>
            
            <Link to="/sign-in">
            <Button
              style={{ marginLeft: "10px" }}
              color="primary"
              variant="outlined"
              onClick={handleLogOut}
              >
              <strong>{user ? "Sign Out" : "Sign In"}</strong>
            </Button>
            </Link>
           
            <Link to="/checkout-page">
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCart fontSize="large" color="primary" />
              </Badge>
            </IconButton>
            </Link>
            
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
