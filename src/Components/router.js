import React from "react";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
// import Footer from "../Footer";
import Home from "../pages/Home";
import PageNotFind from "../pages/PageNotFind";
import CountProviders from "../Providers/Providers";
const Router = () => {
  return (
    <CountProviders>
      <Routers>
        <NavBar className="App-header" />
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
