import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Default from "./pages/Default";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/recipes" component={Recipes}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
