import React from "react";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
// import Footer from "../Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import PageNotFind from "../pages/PageNotFind";
const Router = () => {
  return (
    <Routers>
      <NavBar className="App-header" />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/*" exact component={PageNotFind} />
        </Switch>
      </main>
    </Routers>
  );
};

export default Router;
