import React, { Component } from 'react';

const todoStyle = {
  position: "relative",
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
  height: 48,
  borderTop: "1px solid rgba(0,0,0,0.1)",
}

const btnMarkStyle = {
  display: "inline-block",
  padding: 0,
  marginTop: 12,
  marginLeft: 12,
  width: 24,
  height: 24,
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius : 4,
  cursor: "pointer",
  fontSize: 16,
}

const btnDeleteStyle = {
  display: "inline-block",
  padding: 0,
  height: 24,
  marginRight: 16,
  marginTop: 12,
  paddingLeft: 8,
  paddingRight: 8,
  border: "none",
  fontSize: 20,
  color: "#a8a8a8"
}

const labelDefaultStyle = {
  display: "inline-block",
  paddingLeft: 16,
  paddingRight: 16,
  flexGrow: 2,
  alignSelf: "center",
}


const labelDoneStyle = {
  display: "inline-block",
  paddingLeft: 16,
  paddingRight: 16,
  flexGrow: 2,
  alignSelf: "center",
  textDecoration: "line-through",
  color: "#a9a9a9",
}



export class Todos_item extends Component {
  constructor(props){
    super(props)
    this.toggleDone = this.toggleDone.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  toggleDone(){
    const newDone = this.props.done === true ? false : true;
    this.props.onChange(this.props.id, newDone)
  }

  handleDestroy(id){
    this.props.onDestroy(this.props.id)
  }

  render(){
    const btnMark = (this.props.done === true) ? <button style={btnMarkStyle} onClick={this.toggleDone}>✓</button> : <button style={btnMarkStyle} onClick={this.toggleDone}></button>
    const btnDestroy = <button style={btnDeleteStyle} onClick={this.handleDestroy}>✕</button>
    const label = (this.props.done === true) ? <div style={labelDoneStyle}>{this.props.text}</div> : <div style={labelDefaultStyle}>{this.props.text}</div>
    return(
      <li style={todoStyle}>
        {btnMark}
        {label}
        {btnDestroy}
      </li>
    );
  }
}
