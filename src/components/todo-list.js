import React, { Component } from 'react';
import { Todos_item } from './todo-item'

const listStyle = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
}

export class Todos_list extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  handleChange(id, done){
    this.props.onChange(id, done);
  }

  handleDestroy(id){
    this.props.onDestroy(id);
  }

  render(){
    const todos = this.props.data.map((todo) =>
      <Todos_item onDestroy={this.handleDestroy} onChange={this.handleChange} key={todo.id} id={todo.id} done={todo.done} text={todo.text}/>
    );
    return(
      <ul style={listStyle}>{todos}</ul>
    );
  }
}
