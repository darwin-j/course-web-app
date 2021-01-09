import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/Login";
import ForgetPassword from "./components/pages/ForgetPassword";
import EmailVerification from "./components/pages/EmailVerification";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/emailverification" component={EmailVerification} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
