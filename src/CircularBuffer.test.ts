import { CircularBuffer } from './CircularBuffer';

describe('buffer', () => {
  let buffer: CircularBuffer;

  beforeEach(() => {
    // Initialize a new buffer instance before each test
    buffer = new CircularBuffer({ limit: 3 });
  });

  it('should initialize with an empty buffer', () => {
    expect(buffer.current()).toBe('');
  });

  it('should add values to the buffer using forward()', () => {
    buffer.forward('A');
    expect(buffer.current()).toBe('A');

    buffer.forward('B');
    expect(buffer.current()).toBe('AB');

    buffer.forward('C');
    expect(buffer.current()).toBe('ABC');
  });

  it('should rewind the buffer using rewind()', () => {
    buffer.forward('A');
    buffer.forward('B');
    buffer.forward('C');

    buffer.rewind();
    expect(buffer.current()).toBe('AB');

    buffer.rewind();
    expect(buffer.current()).toBe('A');

    buffer.rewind();
    expect(buffer.current()).toBe('');
  });

  it('should reset the buffer using reset()', () => {
    buffer.forward('A');
    buffer.forward('B');

    buffer.reset();
    expect(buffer.current()).toBe('');
  });

  it('should handle the buffer limit', () => {
    buffer.forward('A');
    buffer.forward('B');
    buffer.forward('C');
    buffer.forward('D');
    buffer.forward('E');

    expect(buffer.current()).toBe('CDE');
  });

  it('should get the buffer at the specified position', () => {
    buffer.forward('A');
    buffer.forward('B');
    buffer.forward('C');

    expect(buffer.get(0)).toBe('A');
    expect(buffer.get(1)).toBe('B');
    expect(buffer.get(2)).toBe('C');
  });

  it('should get the buffer at the specified range', () => {
    buffer.forward('A');
    buffer.forward('B');
    buffer.forward('C');

    expect(buffer.range(0, 2)).toBe('AB');
  });

  it('should throw exception when creating a new buffer', () => {
    expect(() => new CircularBuffer({ limit: -1 })).toThrow(
      'Limit must be a positive integer.',
    );

    expect(() => new CircularBuffer({ limit: 0 })).toThrow(
      'Limit must be a positive integer.',
    );

    expect(() => new CircularBuffer({ limit: 2.5 })).toThrow(
      'Limit must be a positive integer.',
    );
  });

  it('should throw when attempting to get the buffer at an invalid position', () => {
    expect(() => {
      buffer.get(99);
    }).toThrow('Index must be a non-negative integer within buffer limits.');
  });

  it('should throw when attempting to get the buffer at an invalid range.', () => {
    expect(() => {
      buffer.range(0, 99);
    }).toThrow(
      'Start and len must be non-negative integers within buffer limits, and start must be less than len.',
    );
  });
});
