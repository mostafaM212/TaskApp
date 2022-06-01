import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/components/Intro';
import HomeScreen from '../src/screens/HomeScreen';

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
    
    const tree = renderer.create(<HomeScreen />).toJSON();

    expect(tree).toMatchSnapshot()
})