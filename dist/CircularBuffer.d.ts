export declare class CircularBuffer {
    buffer: string[];
    private limit;
    constructor({ limit }: {
        limit: number;
    });
    get(): string;
    reset(): void;
    forward(value: string): void;
    rewind(): void;
}
