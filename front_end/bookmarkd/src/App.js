import React from "react";
import axios from "axios";
import NewForm from "./components/NewForm";
import "./App.css";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  console.log("not on Bookmarkd");
}
console.log("current base URL:", baseURL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmark: {}
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
    this.getBookmark = this.getBookmark.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }
  componentDidMount() {
    this.getBookmarks();
  }
  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmarksSchema`);
    const bookmarks = response.data;
    this.setState({ bookmarks: bookmarks });
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });
  }

  //Delete Route
  async deleteBookmark(id) {
    console.log("click delete route");
    await axios.delete(`${baseURL}/bookmarksSchema/${id}`);
    const filterBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    this.setState({ bookmarks: filterBookmarks });
  }

  getBookmark(bookmark) {
    this.setState({ bookmark: bookmark });
  }

  //Edit Route
  async toggleBookmark(selectedBookmark, selectedBookmarkId, event) {
    console.log("clicked update btn");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    try {
      event.preventDefault();
      console.log("preventDefault");
      const selectedBookmarkId = this.state.bookmark._id;
      const url = `${baseURL}/bookmarksSchema/${selectedBookmarkId}`;
      const playload = {
        title: this.state.title,
        url: this.state.url
      };
      const updatedBookmark = await axios.put(url, playload);
      console.log("PUT:", updatedBookmark);
      this.getBookmarks();
      this.setState({
        title: "",
        url: ""
      });
    } catch (err) {
      console.log("update submit error:", err);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Bookmark'd 📖</h1>
        <NewForm handleAddBookmark={this.handleAddBookmark} />
        <table>
          <tbody>
            {this.state.bookmarks.map(bookmark => {
              return (
                <tr
                  onMouseOver={() => this.getBookmark(bookmark)}
                  key={bookmark._id}
                >
                  &nbsp;
                  <br />
                  <td>{bookmark.title}</td>
                  &nbsp;
                  <br />
                  <td onClick={() => this.deleteBookmark(bookmark._id)}>
                    Delete
                  </td>
                  &nbsp;
                  <br />
                  <td
                    onClick={event =>
                      this.toggleBookmark(bookmark, bookmark._id, event)
                    }
                  >
                    Update
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
