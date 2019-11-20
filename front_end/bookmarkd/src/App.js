import React from "react";
import axios from "react";
import NewForm from "./components/NewForm";
// import "./components/app.css";

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
    this.getBookmarks = this.getBookmarks.bind(this);
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
      bookmark: [...this.state.bookmarks, bookmark]
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
    console.log("Hovering Over...");
    this.setState({ bookmark: bookmark });
  }

  //Update Route
  async toggleBookmark(selectedBookmark, selectedBookmarkId) {
    const updatedBookmark = {
      ...selectedBookmark,
      viewed: !selectedBookmark.viewed
    };
    await axios.put(
      `${baseURL}/bookmarksSchema/${selectedBookmarkId}`,
      updatedBookmark
    );
    const updatedBookmarks = this.state.bookmarks.map(bookmark => {
      if (bookmark._id === selectedBookmarkId) {
        const updatedBookmark = {
          ...selectedBookmark,
          viewed: !selectedBookmark.viewed
        };
        return updatedBookmark;
      } else {
        return bookmark;
      }
    });
    this.setState({ bookmarks: updatedBookmarks });
  }

  render() {
    return (
      <div className="App">
        <h1>Bookmarkd</h1>
        <NewForm handleAddBookmark={this.handleAddBookmark} />
        <table>
          <tbody>
            {this.state.bookmarks.map(bookmark => {
              return (
                <tr
                  onMouseOver={() => this.getBookmark(bookmark)}
                  key={bookmark._id}
                >
                  <td
                    className={bookmark.viewed ? "Item viewed" : null}
                    onDoubleClick={() =>
                      this.toggleBookmark(bookmark, bookmark._id)
                    }
                  >
                    {bookmark.title}
                    <br />
                    {bookmark.url}
                  </td>
                  <td onClick={() => this.deleteBookmark(bookmark._id)}>X</td>
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
