import React, { Component } from 'react';

export default class inputForm extends Component {
  
  render(){
    const { handleSave,handleChange,item,editMode } = this.props;
    return(
      <div className="">
        <h3>Todo Input Section</h3>
        <form onSubmit={handleSave}>
          <input type="text" value={item} onChange={handleChange} />
          <button type="submit">{editMode ? 'Save Edit Item' : 'Add Item'}</button>
        </form>
      </div>
    )
  }
}