import React from "react";
import { Route, Switch, Redirect, } from "react-router-dom";
import useStyles from "./styles";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarRight from "../components/sidebar/SidebarRight";
import FixedSidebar from "../components/sidebar/FixedSidebar";
//pages
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import Menus from "../pages/Menus";
import Customer from "../pages/Customer";
import Analysis from "../pages/Analysis";
import OnlineStore from "../pages/OnlineStore";
import FormsTables from "../pages/FormsTables";
import UiComponents from "../pages/UiComponents";
import Collections from "../pages/Collections";





function Layout(props) {
  var classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar></Sidebar>
      <main className={classes.content}>
        <Header />
        <div className={classes.mainLayout}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/app/dashboard" />}
            />
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/Order" component={Order} />
            <Route path="/app/Customer" component={Customer} />
            <Route path="/app/Menus" component={Menus} />
            <Route path="/app/Analysis" component={Analysis} />
            <Route path="/app/OnlineStore" component={OnlineStore} />
            <Route path="/app/Collections" component={Collections} />
            <Route path="/app/UiComponents" component={UiComponents} />
            <Route path="/app/FormsTables" component={FormsTables} />
          </Switch>
        </div>
      </main>
      <FixedSidebar />
      <SidebarRight />
    </div>
  );
}

export default Layout;
