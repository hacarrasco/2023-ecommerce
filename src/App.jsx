import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
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
