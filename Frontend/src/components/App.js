import React from "react"
import "./App.css";
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Sample from "./Sample"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "./Home"

function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <Route path='/' exact component={Home}></Route>
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path='/sample' component={Sample}></Route>
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
    </>
  )
}

export default App
