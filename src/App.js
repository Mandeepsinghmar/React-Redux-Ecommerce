import React from "react";
import "./index.scss";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

import Registration from "./pages/Registration";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
