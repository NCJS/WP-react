import React, { Component } from "react";
import axios from "axios";
import BlogPosts from "./BlogPosts";
import "./WP-2015.css";
import "./App.css";
import sortBy from "lodash/sortBy";

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount = () => {
    axios.get("http://localhost:8000/wp-json/wp/v2/posts").then(res => {
      console.log("res", res.data);
      this.setState({ posts: sortBy(res.data, o => o.date) });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WP-react</h1>
        </header>
        <BlogPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
