import React, {Component} from 'react';
import TodoItem from './todoItem';

export default class todoItems extends Component {
  render(){
    const { items,handleEdit,handleDelete,clear } = this.props;
    return(
      <div>
        <h1>Todo List</h1>
        <ul>
          <TodoItem items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
        </ul>
        { items.length > 1 && 
          <button onClick={clear}>Clear All</button>
        }
      </div>
    )
  }
}