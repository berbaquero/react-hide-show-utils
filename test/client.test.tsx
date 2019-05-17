import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HideAt, ShowAt } from '../src/index';

// Mock
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

describe('<HideAt>', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HideAt breakpoint="(min-width: 10em)">
      <h1>Anything here</h1>
    </HideAt>,
    div
  );

  it('should render its children', () => {
    expect(div).toMatchSnapshot();
  });
});

describe('<ShowAt>', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ShowAt breakpoint="(min-width: 10em)">
      <h1>Anything here</h1>
    </ShowAt>,
    div
  );

  it('should not render its children', () => {
    expect(div).toMatchSnapshot();
  });
});
