import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Info from "./Info";
import Achievements from './Achievements';
import Activities from "./Activities";
import Hobbies from "./Hobbies";
import "./index.css";

function Routing() {
  const [counter, setCounter] = useState(0);
  const menu = [
    { title: "About", path: "/" },
    { title: "My hobbies", path: "/hobbies" },
    { title: "My achievements", path: "/achievements" },
    { title: "Recent activities", path: "/activities" }
  ];
  return (
    <Router>
      <div className="Menu">
        {menu.map(el => (
          <Link
            className="MenuItem"
            to={el.path}
            onClick={() => setCounter(counter + 1)}
          >
            {el.title}
          </Link>
        ))}
      </div>
      <div className="wrapper">
        <Switch>
          <Route path="/hobbies"><Hobbies /></Route>
          <Route path="/achievements"><Achievements /></Route>
          <Route path="/activities"><Activities /></Route>
          <Route exact path="/"><Info /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routing;
