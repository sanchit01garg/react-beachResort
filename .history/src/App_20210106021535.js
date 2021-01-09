import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:roomtype" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
