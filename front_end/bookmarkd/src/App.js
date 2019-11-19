import React from "react";
import axios from "react";
import NewForm from "./components/NewForm";


let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

console.log("current base URL:", baseURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    //States
    this.state = {};
    //Binding
  }

  render() {
    return (
      <div className="container">
        <h1>Bookmarks</h1>
        <table>
          <tbody>
            <tr>
              <td>...</td>
            </tr>
          </tbody>
        </table>
    )
  }
}

export default App;
