import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import ShowAllPosts from "./components/ShowAllPosts";
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/CreatePost/">
                  Create A Post
                </Link>
              </li>
              <li>
                <Link className="link" to="/ShowAllPosts/">
                  Show All Posts
                </Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/CreatePost/" component={CreatePost} />
          <Route path="/ShowAllPosts/" component={ShowAllPosts} />
        </div>
      </Router>
    );
  }
}

export default App;
