import React from 'react';
import { WithFragOne, WithFragTwo, WithoutFragOne, WithoutFragTwo } from './fragment/fragment';

class App extends React.Component{
  render(){
    return(
      <>
        <WithFragOne />
        <WithFragTwo />
        <WithoutFragOne />
        <WithoutFragTwo />
      </>
    )
  }
}

export default App;