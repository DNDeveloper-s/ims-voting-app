import React from "react";
import "./styles/main.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
