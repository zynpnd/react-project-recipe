import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Default from "./pages/Default";
import Login from "./pages/Login/Login";

const App = () => {
  let initialLoggin = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [isLoggedIn, setisLoggedIn] = useState(initialLoggin || null);

  return (
    <Router>
      <main>
        {/* LOGİN 
        <Route path="/login">
          <Login setisLoggedIn={setisLoggedIn} />
        </Route> */}
        {/*<Redirect from="*" to="/login" />*/}

        {/* navbar */}
        <Navbar />
        <Switch>
          {/* <Route  path="/login" >
            <Login/>
             </Route>  */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/recipes" component={Recipes}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
