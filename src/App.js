import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant/Restaurant";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import MealDetails from "./components/MealDetails/MealDetails";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/meal/:id">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path="/">
            <Restaurant></Restaurant>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
