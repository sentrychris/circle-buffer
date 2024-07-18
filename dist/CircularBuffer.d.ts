/** @public */
export declare class CircularBuffer {
    /**
     * The buffer.
     */
    private buffer;

    /**
     * The buffer size limit.
     */
    private limit;

    /**
     * Create a new circular buffer.
     *
     * @param limit - the buffer size limit.
     * @throws if the provided limit is not a positive integer.
     */
    constructor({ limit }: {
        limit: number;
    });

    /**
     * Get the current state of the buffer.
     *
     * @returns the contents of the buffer.
     */
    current(): string;

    /**
     * Get the content at the specific position in the buffer.
     *
     * @param index - the position in the buffer.
     * @returns the content at the specified position.
     * @throws if the index is out of bounds.
     */
    get(index: number): string;

    /**
     * Get the content within a specific range in the buffer.
     *
     * @param start - the starting position of the range.
     * @param len - the length of the range (exclusive).
     * @returns the content within the specified range.
     * @throws if the start or len indices are out of bounds.
     */
    range(start: number, len: number): string;

    /**
     * Reset the buffer, fill it with empty strings.
     *
     * @returns no return value.
     */
    reset(): void;

    /**
     * Move the buffer forward by one position and add the provided
     * value at the end of the buffer, if the buffer is full, the
     * oldest value is removed.
     *
     * @param value - the value to add to the buffer.
     * @returns no return value.
     */
    forward(value: string): void;

    /**
     * Move the buffer backward by one position, removing the last
     * value, if the buffer becomes empty, an empty string is added
     * at the beginning.
     *
     * @returns no return value.
     */
    rewind(): void;
}
