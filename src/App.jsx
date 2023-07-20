import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { auth } from "./firebase/firebase.config";
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';

function App() {
const [{user}, dispatch] = useStateValue();


useEffect(() => {
 onAuthStateChanged(auth, (authUser) => {
  console.log(authUser);
  if(authUser){
    dispatch({
      type: actionTypes.SET_USER,
      user: authUser,
    })
  }
 })
}, [])



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/checkout-page" element={<CheckoutPage/>} />
          <Route exact path="/sign-in" element={<SignIn/>} />
          <Route exact path="/sign-up" element={<SignUp/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export {App};
