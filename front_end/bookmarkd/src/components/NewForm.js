import axios from "axios";
import React, { Component } from "react";

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  console.log("not on bookmarkd");
}

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${baseURL}/bookmarksSchema`, {
      title: this.state.title,
      url: this.state.url
    });
    this.setState({ title: "", url: "" });
    this.props.handleAddBookmark(response.data);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="add a bookmark"
          />
          <input
            type="text"
            id="url"
            name="url"
            onChange={this.handleChange}
            value={this.state.url}
            placeholder="http://"
          />
          <input type="submit" value="Add a New Bookmark" />
        </form>
      </div>
    );
  }
}

export default NewForm;
