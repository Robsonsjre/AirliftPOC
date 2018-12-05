import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss";

class Welcome extends React.Component {
  constructor(){
    super()

    this.state = {
      promotionCode: ''
    }
  }

  render() {
    return (
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
            onChange={event => {
              this.setState({ promotionCode: event.target.value });
            }}
            value={this.state.promotionCode}
          />
          <button
            className="btn waves-effect waves-light white"
            type="submit"
            style={{ float: "right", color: "black" }}
            onClick={() => this.props.onClickButton(this.state.promotionCode)}
          >
            Submit
          </button>
          {this.props.showAlert ? (
            <p className="alert" style={{ float: "left" }}>
              Incorrent Number
            </p>
          ) : null}
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {
  onClickButton: PropTypes.func,
  showAlert: PropTypes.bool
}

export default Welcome
