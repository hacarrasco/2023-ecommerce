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
import { login, logout } from "../firebase/firebaseAuth";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'



export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue();  
  const [user, setUser] = useState("");
  const {displayName} = user;
  console.log("🚀 ~ file: Navbar.jsx:22 ~ Navbar ~ displayName:", displayName)
  const navigate = useNavigate();

 const handleLogOut = () => {
  logout(auth)
 }

 useEffect(() => {
  const suscribed = onAuthStateChanged(auth, (currentUser) => {
   if(!currentUser) {
     console.log("No hay usuario suscrito")
     setUser("")
   }else {
     setUser(currentUser)
     navigate("/")
   }
  })
  return () => suscribed()
 }, [])

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
              {login ? (
                <Typography variant="h6" color="textPrimary" component="p">
                {displayName}
              </Typography>
              ): null}
            
            <Link to="/sign-in">
            <Button
              style={{ marginLeft: "10px" }}
              color="primary"
              variant="outlined">
              <strong> Sign In</strong>
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              color="primary"
              variant="outlined"
              onClick={() => handleLogOut()}
              >
              <strong> Log Out</strong>
            
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
