import React from "react";
import "./style.scss";

class Landing extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "rgb(72, 85, 100)" }}
        className="landing-page"
      >
        <main style={{ color: "rgb(255, 255, 255)" }}>
          <div className="intro-wrapper">
            <div className="intro-name">Airlift INC.</div>
            <div className="tagline">Insert your code below!</div>
            <div
              className="input-box"
              style={{
                maxWidth: "30%",
                alignItems: "center",
                paddingRight: "0.5em",
                overflow: "hidden"
              }}
            >
              <input
                id="first_name"
                type="text"
                style={{ color: "white", width: "100%", textAlign: "center" }}
              />
              <button
                className="btn waves-effect waves-light white"
                type="submit"
                style={{ float: "right", color: "black" }}
              >
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Landing;
