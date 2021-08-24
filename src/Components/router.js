import React from "react";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar.js";
import Home from "../pages/Home";
import PageNotFind from "../pages/PageNotFind";
import CountProviders from "../Providers/Providers";
const Router = () => {
  return (
    <CountProviders>
      <Routers>
        <Navbar className="App-header" />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/*" exact component={PageNotFind} />
          </Switch>
        </main>
      </Routers>
    </CountProviders>
  );
};

export default Router;
