import React from "react";
import styles from "./index.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import { Paper } from "@material-ui/core";

const Layout = () => {
  return (
    <Router>
      <Paper square className={styles.root}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Paper>
    </Router>
  );
};

export default Layout;
