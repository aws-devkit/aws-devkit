import { Tracer } from '@aws-lambda-powertools/tracer';
import { TracerOptions } from '@aws-lambda-powertools/tracer/lib/types';

/**
 * Already instantiated tracer instance
 */
export const tracer = new Tracer();

/**
 * Configure the tracer instance
 * @param options Options to configure the tracer
 * @returns The configured tracer instance
 */
export function configureTracer(options: TracerOptions): Tracer {
  return new Tracer(options);
}
