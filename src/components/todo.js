import React, { Component } from 'react';
import { Todos_list } from './todo-list'
import { Todos_compose } from './todo-compose'


const todosStyle = {
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.1)",
  boxShadow: `1px 3px 10px rgba(0,0,0,0.1)`,
  marginLeft: 16,
  marginRight: 16,
  marginTop: 16,
  marginBottom: 16,
  overflow: "hidden",
}

export class Todo extends Component {

  constructor(props){
    super(props)
    this.state = {arr:[]};
    this.handleChange = this.handleChange.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
    this.gnerateID = this.generateID.bind(this)
  }

  // Create an unique id for the todo
  generateID(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  // Add new todo to the state array
  handleAddition(val){
    let a = this.state.arr.slice();
    a.push({
      id:this.generateID(),
      text: val,
      done: false
    });
    this.setState({arr: a});
  }

  // Subtract todo from the state array based on id
  handleDestroy(id){
    let a = this.state.arr.slice();
    const currentIndex = this.state.arr.findIndex(x => x.id === id);
    a.splice(currentIndex, 1);
    this.setState({arr: a});
  }

  // Update the done state of todo in the state array based on id
  handleChange(id, done){
    let a = this.state.arr.slice();
    const currentIndex = this.state.arr.findIndex(x => x.id === id);
    a[currentIndex].done = done;
    this.setState({arr: a});
  }

  // Pass down methods to components for handling additions and change
  render() {
    return (
      <div style = {todosStyle}>
        <Todos_compose onSubmit={this.handleAddition}/>
        <Todos_list onDestroy={this.handleDestroy} onChange={this.handleChange} data={this.state.arr}/>
      </div>
    );
  }
}
