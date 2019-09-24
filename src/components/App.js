import React from 'react';
import uuid from 'uuid';
import TodoForm from './todo/todoForm';
import TodoItems from './todo/todoitems';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      item: '',
      editMode: false,
      id: uuid(),
      complete: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleSave = (e) => {
    e.preventDefault();
    const insetTodo = {id:this.state.id,title:this.state.item}
    this.setState( state => {
      return {
        ...state,
        items: [...this.state.items, insetTodo],
        id: uuid(),
        item: '',
        editMode: false,
      }
    })
  }

  handleChange(e){
    let val = e.target.value;
    this.setState({
      item: val,
    });
  }

  handleEdit = (id) => {
    const { items } = this.state;
    const deleteItem = items.filter(item => item.id !== id);
    // filter return the array
    const findItem = items.find(item => item.id === id);
    // find return the item
    this.setState({
        items: deleteItem,
        id: id,
        item: findItem.title,
        editMode: true,
    }, () => console.log(this.state.item));
    
  }

  handleDelete = (id) => {
    const { items } = this.state;
    const delteItem = items.filter(item => item.id !==id);
    this.setState({
      items: delteItem,
    })
  }

  clearAll = () => {
    this.setState({
      items: [],
    })
  }
  render(){
    const {item,editMode,items} = this.state;
    return(
      <div>
        <h1>Todo App</h1>
        <TodoForm handleSave={this.handleSave} handleChange={this.handleChange} editMode={editMode} item= {item} />
        <TodoItems handleEdit={this.handleEdit} handleDelete={this.handleDelete} clear = {this.clearAll} items={items} />
      </div>
    )
  }
}

export default App;