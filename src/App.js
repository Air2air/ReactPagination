import React from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import Topic from "./pages/topic";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
