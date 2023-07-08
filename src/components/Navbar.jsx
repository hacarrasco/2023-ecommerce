import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/img/logo.jpg";
import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor:"whitesmoke"}}>
        <Toolbar style={{justifyContent:"space-between"}}>
            <div>
            <img
            src={logo}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "transparent",
            }}
          />
            </div>
         <div style={{display:"flex", width:"300px", alignItems:"center"}}>
         <Typography variant="h6" color="textPrimary" component="p">
            Hello Guest
          </Typography>
          <Button
            style={{ marginLeft: "10px" }}
            color="primary"
            variant="outlined">
            <strong> Sign In</strong>
          </Button>
          <IconButton aria-label="show cart items" color="inherit">
          <Badge badgeContent={3} color="secondary">
             <ShoppingCart fontSize="large" color="primary"/>
          </Badge>
          </IconButton>
         </div>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
