import { createLogger, logger } from './logger';

describe('logger', () => {
  describe('createLogger', () => {
    it('should be able to initiate', () => {
      const myLogger = createLogger();
      expect(myLogger).not.toBeFalsy();
    });

    it('should not be equal to already instantiated logger', () => {
      const myLogger = createLogger();
      expect(myLogger).not.toEqual(logger);
    });
  });
});
