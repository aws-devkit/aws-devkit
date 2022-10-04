import { clientSns } from './client-sns';

describe('clientSns', () => {
  it('should work', () => {
    expect(clientSns()).toEqual('client-sns');
  });
});
