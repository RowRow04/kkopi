import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/Authcontexts";
import HomePage from "./components/Homepage";
import MenuPage from "./components/Menupage";
import OrderOnlinePage from "./components/Orderonline";
import CartPage from "./components/Cartpage";
import CheckoutPage from "./components/Checkout";
import LoginPage from "./components/Loginpage";
import RegisterPage from "./components/Register";
import AboutUsPage from "./components/Aboutus";
import ContactPage from "./components/Contactuspage";
import UserProfilePage from "./components/Userprofile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/order-online" component={OrderOnlinePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/profile" component={UserProfilePage} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
