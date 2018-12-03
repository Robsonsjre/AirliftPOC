import "materialize-css/dist/css/materialize.min.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Landing from "./Landing/Landing";
import Routes from "./Teste";
import Parallax from "./Parallax/ParallaxBackground";


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="dev-landing-page">
            <Parallax/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/routes" component={Routes} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
