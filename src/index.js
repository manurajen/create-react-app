import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class Welcome extends Component {
  render() {
    return(
      <>
        <h1>React Configuration from the scratch </h1>
        <App page="https://www.linkedin.com">LinkedIn</App>
      </>
    )
  }
}

const root = document.getElementById('config');

ReactDOM.render(<Welcome />,root);
