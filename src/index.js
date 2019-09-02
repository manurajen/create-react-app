import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Welcome extends Component {
  render() {
    return(
      <h1>React Configuration from the scratch </h1>
    )
  }
}

const root = document.getElementById('config');

ReactDOM.render(<Welcome />,root);
