import { Logger } from '@aws-lambda-powertools/logger';
import { ConstructorOptions } from '@aws-lambda-powertools/logger/lib/types';

/**
 * Already instantiated logger instance
 */
export const logger = new Logger();

/**
 * Create a new logger instance
 * @param options Options to configure the logger
 * @returns A new logger instance
 */
export function createLogger(options?: ConstructorOptions): Logger {
  return new Logger(options);
}
