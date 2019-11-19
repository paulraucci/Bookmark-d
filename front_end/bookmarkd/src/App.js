import React from "react";
import NewForm from "./components/NewForm";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bookmarkd</h1>
        <NewForm handle />
      </div>
    );
  }
}

export default App;
