import { requestContext } from './core.js';

describe('core', () => {
  it('should work', () => {
    expect(Object.fromEntries(requestContext)).toEqual({});
  });
});
