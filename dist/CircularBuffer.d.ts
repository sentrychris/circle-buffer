/** @public */
export declare class CircularBuffer {
    /**
     * The buffer
     */
    private buffer;
    /**
     * The buffer limit
     */
    private limit;
    /**
     * Create a new circular buffer
     *
     * @param limit - the buffer size limit
     * @throws if the provided limit is not a positive integer
     */
    constructor({ limit }: {
        limit: number;
    });
    /**
     * Get the current state of the buffer
     */
    get(): string;
    /**
     * Reset the buffer, fill it with empty strings
     */
    reset(): void;
    /**
     * Move the buffer forward by one position and add
     * the provided value at the end of the buffer, if
     * the buffer is full, the oldest value is removed
     *
     * @param value - the value to add to the buffer
     */
    forward(value: string): void;
    /**
     * Move the buffer backward by one position, removing
     * the last value, if the buffer becomes empty, an empty
     * string is added at the beginning
     */
    rewind(): void;
}
