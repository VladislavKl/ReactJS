import React, { Component } from "react";
import Routing from "./Routing";
import Popup from './Popup'


class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="container">
          <Routing />
        </div>
        <Popup />
        </div>
    );
  }
}

export default App;
