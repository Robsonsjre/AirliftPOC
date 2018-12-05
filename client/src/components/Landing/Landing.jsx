import React from "react";
import "./style.scss";
import Welcome from "./Welcome";
import RouteCard from "../RouteCard/RouteCard";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Landing extends React.Component {
  constructor() {
    super();
    this.onClickButton = this.onClickButton.bind(this);
    this.renderRoutes = this.renderRoutes.bind(this);
  }

  onClickButton(promotionCode) {
    this.props.fetchRoutesFromUser(promotionCode);
  }

  renderRoutes(routes) {
    return routes.map(route => {
      return (
        <div className="boxContainer">
          <p> {route.title}</p>
          <p> {route.departure}</p>
          <p> {route.arrival}</p>
          <p> {route.routeImgUrl}</p>
          <p> {route.pickupImgUrl}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div
        style={{ backgroundColor: "rgb(72, 85, 100)" }}
        className="landing-page"
      >
        <main style={{ color: "rgb(255, 255, 255)" }}>
          {this.props.routes.length ? (
            <RouteCard routes={this.props.routes} />
          ) : (
            <Welcome
              onClickButton={this.onClickButton}
              showAlert={this.props.user.showAlert}
            />
          )}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    user: state.user,
    routes: state.routes
  };
}

export default connect(
  mapStateToProps,
  actions
)(Landing);
