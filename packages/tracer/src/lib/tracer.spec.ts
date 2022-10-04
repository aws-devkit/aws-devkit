import { configureTracer, tracer } from './tracer';

describe('tracer', () => {
  it('should be initiated', () => {
    expect(tracer).not.toBeFalsy();
  });

  describe('configureTracer', () => {
    it('should not be equal to already instantiated logger', () => {
      const myTracer = configureTracer({ serviceName: 'my-test-tracer' });
      expect(myTracer).not.toEqual(tracer);
    });
  });
});
