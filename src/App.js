import React, {useState}  from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Default from "./pages/Default";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

const App = () =>{

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
             {/* <Route  path="/login" >
            <Login/>
             </Route>  */}
           <Route path="/" exact component={Home}></Route>
            <Route path="/recipes" component={Recipes}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Footer />
          
        </main>
      </Router>
    );
  }


export default App;
