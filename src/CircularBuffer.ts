/** @public */
export class CircularBuffer {
  /**
   * The buffer.
   */
  private buffer: string[];

  /**
   * The buffer size limit.
   */
  private limit: number;

  /**
   * Create a new circular buffer.
   *
   * @param limit - the buffer size limit.
   * @throws if the provided limit is not a positive integer.
   */
  constructor({ limit }: { limit: number }) {
    if (!Number.isInteger(limit) || limit <= 0) {
      throw new Error('Limit must be a positive integer.');
    }

    this.buffer = new Array(limit).fill('');
    this.limit = limit;
  }

  /**
   * Get the current state of the buffer.
   *
   * @returns the contents of the buffer.
   */
  current(): string {
    return this.buffer.join('');
  }

  /**
   * Get the content at the specific position in the buffer.
   *
   * @param index - the position in the buffer.
   * @returns the content at the specified position.
   * @throws if the index is out of bounds.
   */
  get(index: number): string {
    if (!Number.isInteger(index) || index < 0 || index >= this.limit) {
      throw new Error(
        'Index must be a non-negative integer within buffer limits.',
      );
    }

    return this.buffer[index];
  }

  /**
   * Get the content within a specific range in the buffer.
   *
   * @param start - the starting position of the range.
   * @param len - the length of the range (exclusive).
   * @returns the content within the specified range.
   * @throws if the start or len indices are out of bounds.
   */
  range(start: number, len: number): string {
    if (
      !Number.isInteger(start) ||
      !Number.isInteger(len) ||
      start < 0 ||
      len > this.limit ||
      start >= len
    ) {
      throw new Error(
        'Start and len must be non-negative integers within buffer limits, and start must be less than len.',
      );
    }

    return this.buffer.slice(start, len).join('').toString();
  }

  /**
   * Reset the buffer, fill it with empty strings.
   *
   * @returns no return value.
   */
  reset(): void {
    this.buffer = new Array(this.limit).fill('');
  }

  /**
   * Move the buffer forward by one position and add the provided
   * value at the end of the buffer, if the buffer is full, the
   * oldest value is removed.
   *
   * @param value - the value to add to the buffer.
   * @returns no return value.
   */
  forward(value: string): void {
    this.buffer.shift();
    this.buffer.push(value);
  }

  /**
   * Move the buffer backward by one position, removing the last
   * value, if the buffer becomes empty, an empty string is added
   * at the beginning.
   *
   * @returns no return value.
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
