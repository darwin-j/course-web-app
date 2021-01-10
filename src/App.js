import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/Login";
import ForgetPassword from "./components/pages/ForgetPassword";
import EmailVerification from "./components/pages/EmailVerification";
import "./App.scss";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
