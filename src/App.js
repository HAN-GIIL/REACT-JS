import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigaion";
import Detail from "./routes/Detail";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
