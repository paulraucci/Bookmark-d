import React from "react";
import NewForm from "./components/NewForm";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: []
    };
  }
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
