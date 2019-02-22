import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <h1>Jacky Fakkeldij</h1>
            <div className="abilities">
              <p>Web development</p>
              <p>App development</p>
              <p>Design</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
