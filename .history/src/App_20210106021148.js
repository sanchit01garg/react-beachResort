import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/single-room" component={SingleRoom} />
    </>
  );
}

export default App;
