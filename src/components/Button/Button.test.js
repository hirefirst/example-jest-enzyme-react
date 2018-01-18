/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Button text={"test"}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
