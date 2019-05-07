/**
 * @jest-environment node
 */
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { HideAt, ShowAt } from '../src/index';

describe('<HideAt>: Server', () => {
  const result = ReactDOMServer.renderToString(
    <HideAt breakpoint="(min-width: 32rem)">This won't be rendered</HideAt>
  );
  it('does not render any children', () => {
    expect(result).toBe('');
  });
});

describe('<ShowAt>: Server', () => {
  const result = ReactDOMServer.renderToString(
    <ShowAt breakpoint="(min-width: 32rem)">This won't be rendered</ShowAt>
  );
  it('does not render any children', () => {
    expect(result).toBe('');
  });
});
