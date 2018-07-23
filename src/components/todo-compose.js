import React, { Component } from 'react';


const newTodoStyle = {
  display: "flex",
  background: "#fff",
  listStyle: "none",
  textAlign: "left",
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  marginTop: 0,
  height: 48,
  border: "none",
}

const btnCreateStyle = {
  display: "inline-block",
  padding: 0,
  height: 32,
  width: 32,
  marginRight: 16,
  marginTop: 8,
  lineHeight: 0.5,
  border: "none",
  fontSize: 20,
  color: "#fff",
  backgroundColor: "#000",
  borderRadius: 4,
}

const inputStyle = {
  flexGrow: 1,
  border: "none",
  fontSize: 16,
  paddingLeft: 16,
  marginRight: 16,
  outline: "none",
}

export class Todos_compose extends Component {

  constructor(props){
    super(props);
    this.state = {value : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Update the value of this todo which is stored in the state
  handleChange(event){
    this.setState({value: event.target.value});
  }

  // Detect keydown enter
  handleKeyDown(event){
    if (event.keyCode === 13){
      this.handleSubmit(event)
    }
  }

  // Use onSubmit method that parent passed down via props
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: ""});
  }

  render(){
    return(
      <div style={newTodoStyle}>
        <input placeholder="Write and hit enter..." style={inputStyle} onKeyDown={this.handleKeyDown} value={this.state.value} onChange={this.handleChange} type="text"/>
        <button style={btnCreateStyle} onClick={this.handleSubmit}>+</button>
      </div>
    );
  }
}
