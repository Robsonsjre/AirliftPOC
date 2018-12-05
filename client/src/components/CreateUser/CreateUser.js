import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./style.scss";

class CreateUser extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      promoId: '',
      routes: []
    }
    this.confirmButton = this.confirmButton.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event, type) {
    console.log('event', event.target.value)
    console.log('type',type)
    this.setState({ [type]: event.target.value})
  }

  confirmButton() {
    alert('confirm button')
  }

  render() {
    return (
      <div className="FormContainer" style={{maxWidth: "400px"}}>
        <h2> Create User</h2>
        <label>Name</label>
        <input type="input" onChange={(event) => this.handleInput(event, "name")} value={this.state.name}/>

        <label>Email</label>
        <input type="input" onChange={(event) => this.handleInput(event, "email")} value={this.state.email}/>

        <label>PromoId</label>
        <input type="input" onChange={(event) => this.handleInput(event, "promoId")} value={this.state.promoId}/>

        <label>Routes</label>
        <input type="input" onChange={this.handleInput} value={this.state.name}/>
        <button onClick={this.confirmButton}>Submit</button>
      </div>
    )
  }
}

export default connect(null, actions)(CreateUser)
