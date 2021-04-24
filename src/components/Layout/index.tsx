import React from "react";
import styles from "./index.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "pages/Home";

const Layout = () => {
  return (
    <Router>
      <div className={styles.root}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
