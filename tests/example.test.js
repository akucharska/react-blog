
import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../src/components/1-atoms/Logo';

test('example of snapshot', () => {
  const tree = renderer.create(
    <Logo />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
