/**
 * @jest-environment node
 */

import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { HideAt, ShowAt } from '../src/index';

Enzyme.configure({ adapter: new Adapter() });

describe('<HideAt>: Server Rendering', () => {
  const hideAtWrapper = render(
    <HideAt breakpoint="(min-width: 10em)">
      <h1>This shouldn't render at all</h1>
    </HideAt>
  );

  it('should not render anything', () => {
    expect(toJSON(hideAtWrapper)).toBe(null);
  });
});

describe('<ShowAt>: Server Rendering', () => {
  const showAtWrapper = render(
    <ShowAt breakpoint="(min-width: 10em)">
      <h2>This shouldn't render at all</h2>
    </ShowAt>
  );

  it('should not render anything', () => {
    expect(toJSON(showAtWrapper)).toBe(null);
  });
});
