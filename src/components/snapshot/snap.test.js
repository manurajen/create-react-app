import React from 'react';
import renderer from 'react-test-renderer';
import Snap from './Snap';

it('renders correctly', () => {
  const component = renderer.create(<Snap page="http://www.facebook.com">Facebook</Snap>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders without link', () => {
  const component = renderer.create(<Snap>Facebook</Snap>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('class changed when hover over the link', () => {
  const component = renderer.create(<Snap page="http://www.facebook.com">Facebook</Snap>,);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

   // manually trigger the callback
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

   // manually trigger the callback
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

