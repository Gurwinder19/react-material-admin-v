import React from "react";
import { Route, Switch, Redirect, } from "react-router-dom";
// styles
import useStyles from "./styles";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function Layout(props) {
  var classes = useStyles();
  return (
    <div className={classes.root}>
      <Header></Header>
      <Sidebar></Sidebar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route path="/app/dashboard" component={Dashboard} />
          <Route path="/app/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default Layout;
