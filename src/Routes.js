// import { Switch } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import CustomerData from "./components/CustomerData";
import CustomerProfile from "./components/CustomerProfile";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Page404 from "./components/Page404";
import Register from "./components/Register";

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div className="">
                        <Switch>                            
                            <Route path="/home">
                                {" "}
                                <Home />{" "}
                            </Route>                        
                            <Route path="/contact">
                                {" "}
                                <Contact />{" "}
                            </Route>
                            <Route path="/customerData">
                                {" "}
                                <CustomerData />{" "}
                            </Route>                 
                            <Route path="/customerprofile">
                                {" "}
                                <CustomerProfile />{" "}
                            </Route>                                                                              
                            <Route path="/register">
                                {" "}
                                <Register />{" "}
                            </Route>                            
                            <Route path="/login">
                                {" "}
                                <Login />{" "}
                            </Route>
                            <Route path="/logout">
                                {" "}
                                <Logout />{" "}
                            </Route>                           
                            <Route path="/*">
                                {" "}
                                <Page404 /> {" "}
                            </Route>                                                    
                        </Switch>                        
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Routes;