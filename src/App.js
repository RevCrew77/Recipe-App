import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar";
import RecipeApp from "./Components/RecipeApp";
import RecipeList from "./Components/RecipeList";
import Chicken from "./Components/RecipesCard/Chicken";
import Beef from "./Components/RecipesCard/Beef";
import Desserts from "./Components/RecipesCard/Desserts"
import Fish from "./Components/RecipesCard/Fish"
import { SliderData } from "./Components/SliderData";
import Login from '../src/Components/LoginRegister/Login'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <RecipeApp slides={SliderData} />
          </Route>
          <Route path="/recipes">
            <RecipeList />
          </Route>
          <Route path="/chicken">
            <Chicken />
          </Route>
          <Route path="/beef">
            <Beef />
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
          <Route path="/fish">
            <Fish />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
