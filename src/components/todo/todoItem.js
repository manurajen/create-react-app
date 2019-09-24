import React, {Component} from 'react';

export default class todoItems extends Component {
  render(){
    const { items,handleEdit,handleDelete } = this.props;
    return(
        <>
          {
            items.map(item => {
              return(
                <li key={item.id}>
                  <div className="title">
                    {item.title}
                  </div>
                  <div className="links">
                    <a href="#" onClick={(e) => handleEdit(item.id)}>Edit</a>
                    <a href="#" onClick={(e) => handleDelete(item.id)}>Delete</a>
                    <a href="#">Completed</a>
                  </div>
                </li>
              )
            })
            
          }  
        </>     
    )
  }
}