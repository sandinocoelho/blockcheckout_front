import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./layouts/Admin/Admin";
import HomeLayout from "./layouts/Home/Home"
import AppLayout from "./layouts/App/App"
// import RTLLayout from "layouts/RTL/RTL.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" render={props => <HomeLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/app" render={props => <AppLayout {...props} />} />
      {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
