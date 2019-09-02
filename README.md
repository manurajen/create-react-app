## Test Driven Development (TDD)

* coding the features and test go hand in hand
* write the test in TDD
  * wirte the unit Test
  * run the test, see it fail
  * write the feature code to pass the Test.
  * Refactor the code

`Why?`

* it reduce the errors
* it lead to higher quality code.

`Application`

* jest - test runner [facebook]
  * write test __test__ folder or with test.js
  * Snapshot testing
  * coverage
  * mocking

* Enzyme [Airbnb]
  * test utility library
  * manipulate react components and DOM behaviour.

`Jest + enzyme = TDD with react`

we can check Api, redux flow by using these applications.


-----------------------------
## Snapshot using jest

`npm install jest react-test-renderer --save-dev`

in `Package.json` add

```
"scripts": { 
  "test": "jest --color",
},
```

Then create `App.js `file inside components `./src/components/App.js`

```javascript
import React from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
        <h2>Test Driven Development</h2>
      </div>
    )
  }
}

export default App;
```

then create test file `App.test.js` inside components folder

```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

now `npm run test`

the snapshot is stored in __snapshots__ folder. `App.test.js.snap`

the snapshot look like

```
exports[`renders correctly 1`] = `
<div>
  <h2>
    Test Driven Development
  </h2>
</div>
`;
```

If your updating any changes in app.js file, the snapshot will differ. so the test will trigger the error.

```html
- Snapshot
+ Received

  <div>
    <h2>
-     Test Driven Development
+     Test Driven Development testing snapshot
    </h2>
  </div>

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   1 failed, 1 total
Time:        9.851s
```

so you need to update new one in to existing snapshot using update cmd

`npm test -- -u` it will update the snapshot with existing one. now the tese pass.

```
PASS  src/components/App.test.js
  v renders correctly (70ms)

 › 1 snapshot updated.
Snapshot Summary
 › 1 snapshot updated from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 updated, 1 total
Time:        6.951s, estimated 7s
Ran all test suites.

```

[TDD](https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8)
