import React from 'react';
import Hoc from './hoc';

class WithFragOne extends React.Component{
  render(){
    return(
      <>
        <h2>Frament Using</h2>
        <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>
        <hr />
      </>
    );
  }
}

class WithFragTwo extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h2> Frament Using [React.Fragment] </h2>
        <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>
      </React.Fragment>
    );
  }
}

class WithoutFragOne extends React.Component{
  render(){
    return [
        <h2 key='i1'> Frament Using Array </h2>,
        <p key='i2'>Fragments let you group a list of children without adding extra nodes to the DOM.</p>
    ];
  }
}

class WithoutFragTwo extends React.Component{
  render(){
    return(
      <Hoc>
        <h2>Without Frament usin another components</h2>
        <p>Fragments let you group a list of children without adding extra nodes to the DOM.</p>
      </Hoc>
    );
  }
}

export { 
  WithFragOne, 
  WithFragTwo, 
  WithoutFragOne, 
  WithoutFragTwo,
}

