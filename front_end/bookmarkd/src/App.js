import React from "react";
import NewForm from "./components/NewForm";
import axios from "axios";

//
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  console.log("not on Bookmarkd");
}
console.log("current base URL:", baseURL);
//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: []
    };
    this.getBookmark = this.getBookmark.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
  }
  componentDidMount() {
    this.getBookmark();
  }
  async getBookmark() {
    const response = await axios.get(`${baseURL}/bookmarksSchema`);
    const bookmarks = response.data;

    this.setState({ bookmarks: bookmarks });
  }
  handleAddBookmark(bookmark) {
    this.setState({
      bookmark: [...this.state.bookmark, bookmark]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Bookmarkd</h1>
        <NewForm handleAddBookmark={this.handleAddBookmark} />
      </div>
    );
  }
}

export default App;
