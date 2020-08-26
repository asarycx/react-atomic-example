import React from "react";

import "../assets/styles/index.scss";
import Login from "./pages/login";
import Dash from "./pages/dashboard";
import Nav from "./components/molecules/Nav";
import MobileMenu from "./components/molecules/MobileMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const menus = [
    {
      text: "🏡",
      link: "#",
    },
    {
      text: "📝",
      link: "#",
    },
    {
      text: "🔧",
      link: "#",
    },
  ];
  const menuNav = [
    {
      text: "🏡",
      link: "/dashboard",
    },
    {
      text: "🚫",
      link: "/",
    },
  ];

  return (
    <Router>
      <Nav title="John Wick" menus={menuNav} />
      <div className="App wrapper">
        <Switch>
          <Route path="/dashboard">
            <Dash />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
      <MobileMenu menus={menus} />
    </Router>
  );
}

export default App;
