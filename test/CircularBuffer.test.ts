import { CircularBuffer } from '../src/CircularBuffer';

describe('buffer', () => {
  let buffer: CircularBuffer;

  beforeEach(() => {
    // Initialize a new buffer instance before each test
    buffer = new CircularBuffer({ limit: 3 });
  });

  it('should initialize with an empty buffer', () => {
    expect(buffer.get()).toBe('');
  });

  it('should add values to the buffer using forward()', () => {
    buffer.forward('A');
    expect(buffer.get()).toBe('A');

    buffer.forward('B');
    expect(buffer.get()).toBe('AB');

    buffer.forward('C');
    expect(buffer.get()).toBe('ABC');
  });

  it('should rewind the buffer using rewind()', () => {
    buffer.forward('A');
    buffer.forward('B');
    buffer.forward('C');

    buffer.rewind();
    expect(buffer.get()).toBe('AB');

    buffer.rewind();
    expect(buffer.get()).toBe('A');

    buffer.rewind();
    expect(buffer.get()).toBe('');
  });

  it('should reset the buffer using reset()', () => {
    buffer.forward('A');
    buffer.forward('B');

    buffer.reset();
    expect(buffer.get()).toBe('');
  });

  it('should handle the buffer limit', () => {
    buffer.forward('A');
    buffer.forward('B');
    buffer.forward('C');
    buffer.forward('D');

    expect(buffer.get()).toBe('BCD');
  });
});