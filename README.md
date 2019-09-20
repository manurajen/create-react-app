## React Components

React allows us to create reusable UI components. 

`create-react-app` version 2.0 package was released in October 2018. `Create-react-app` version 2.0 supports Babel 7, webpack 4, and Jest23.

Components are like functions that returns HTML elements.

### Funtional Based vs Class Based Components

**Functional based Components**
  
  * Access state (useState()) hooks
  * LifeCycle (>16.8) using hooks
  * Access props via `props` [props.xy]

```js
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
ReactDOM.render(<Car />, document.getElementById('root'));
```


**class based components**

  * Access state
  * Lifecycle methods supports
  * Access state and props via `this` [this.state.xy, this.props.xy]

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  //  this function will be called when the component gets initiated.
  constructor(props){
    //super() which executes the parent component's constructor function
    super(props);
    this.state = {
      count: 0,
    }
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
```

### ReactDOM

The `ReactDOM.render()` function takes two arguments, HTML code and an HTML element.

`ReactDOM.render(<p>Hello</p>, document.getElementById('root'));`

### What is JSX?

JSX stands for JavaScript XML. JSX allows us to write HTML in React.

using `createElement()`

```js
const myelement =  React.createElemtn('h1',{},'without jsx');
ReactDOM.render(myelement, document.getElementById('root'));
```

## React.Fragment

Fragments let you group a list of children without adding extra nodes to the DOM.

```js
imprort React from 'react';

class fragment extends React.component {
  render(){
    return (
      <>
        <a href="#">Link 1<a>
        <a href="#">Link 2<a>
      </>
    )
  }
}
```

```js
imprort React from 'react';

class fragment extends React.component {
  render(){
    return (
      <React.Fragment>
        <a href="#">Link 1<a>
        <a href="#">Link 2<a>
      </React.Fragment>
    )
  }
}

export default fragment;
```

**without React Fragment**

`One`

```js
imprort React from 'react';

class Withoutfragment extends React.component {
  render(){
    return [
        <a href="#" key='a1'>Link 1<a>
        <a href="#" key='a2'>Link 2<a>
    ];
  }
}
```

`Two`

```js
// component One

const frag = props => props.children;
export default frag;

// compoent Two
imprort React from 'react';
import Frag from './frag';

class Withoutfragment extends React.component {
  render(){
    return {
      <Frag>
        <a href="#" key='a1'>Link 1<a>
        <a href="#" key='a2'>Link 2<a>
      </Frag>
    }
  }
}
```

[src->components->fragment](https://github.com/manurajen/mynotes/blob/master/create-react-app/src/components/fragment)


## React Life Cycle Methods

The three phases are: `Mounting`, `Updating`, and `Unmounting`.