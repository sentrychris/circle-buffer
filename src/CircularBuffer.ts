/** @public */
export class CircularBuffer {
  /**
   * The buffer
   */
  private buffer: string[];

  /**
   * The buffer limit
   */
  private limit: number;

  /**
   * Create a new circular buffer
   *
   * @param limit - the buffer size limit
   * @throws if the provided limit is not a positive integer
   */
  constructor({ limit }: { limit: number }) {
    if (!Number.isInteger(limit) || limit <= 0) {
      throw new Error('Limit must be a positive integer.');
    }

    this.buffer = new Array(limit).fill('');
    this.limit = limit;
  }

  /**
   * Get the current state of the buffer
   */
  get(): string {
    return this.buffer.join('');
  }

  /**
   * Reset the buffer, fill it with empty strings
   */
  reset(): void {
    this.buffer = new Array(this.limit).fill('');
  }

  /**
   * Move the buffer forward by one position and add
   * the provided value at the end of the buffer, if
   * the buffer is full, the oldest value is removed
   *
   * @param value - the value to add to the buffer
   */
  forward(value: string): void {
    this.buffer.shift();
    this.buffer.push(value);
  }

  /**
   * Move the buffer backward by one position, removing
   * the last value, if the buffer becomes empty, an empty
   * string is added at the beginning
   */
  rewind(): void {
    if (this.buffer.length > 0) {
      this.buffer.pop();

      if (this.buffer.length < this.limit) {
        this.buffer.unshift('');
      }
    }
  }
}
