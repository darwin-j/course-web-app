import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/pages/signUp/SignUp";
import LogIn from "./components/pages/login/Login";
import ForgetPassword from "./components/pages/forgetPassword/ForgetPassword";
import EmailVerification from "./components/pages/emailVerification/EmailVerification";
import "./App.scss";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import EditProfile from "./components/pages/editProfile/EditProfile";

import ContactUs from "./components/pages/contactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/emailverification" component={EmailVerification} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/editprofile" component={EditProfile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
