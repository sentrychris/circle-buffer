# Circle Buffer

![CI Tests](https://github.com/sentrychris/circle-buffer/actions/workflows/tests.yml/badge.svg)

A simple circular array buffer for efficient management of string data in JavaScript/TypeScript.

## Installation

```bash
npm install circle-buffer --save
```

## Usage

```javascript
import { CircularBuffer } from 'circle-buffer';

// Create a circular buffer with a limit of 5
const buffer = new CircularBuffer({ limit: 5 });

// Add values to the buffer
buffer.forward('A');
buffer.forward('B');
buffer.forward('C');

// Get the current state of the buffer
console.log(buffer.get()); // Output: 'ABC'

// Rewind the buffer
buffer.rewind();

// Get the updated buffer state
console.log(buffer.get()); // Output: 'AB'

// Reset the buffer
buffer.reset();

// Get the buffer state after reset
console.log(buffer.get()); // Output: ''
```

## API

### `CircularBuffer`

#### Constructor

- `new CircularBuffer(options: { limit: number }): CircularBuffer`

  Creates a new instance of the `CircularBuffer` class with the specified limit.

  - `options.limit`: The maximum number of elements the circular buffer can hold.

#### Methods

- `get(): string`

  Returns a string representation of the current state of the circular buffer.

- `reset(): void`

  Resets the circular buffer by filling it with empty strings.

- `forward(value: string): void`

  Moves the buffer forward by one position, adding the provided value at the end of the buffer. If the buffer is full, the oldest value is removed.

  - `value`: The string value to be added to the buffer.

- `rewind(): void`

  Moves the buffer backward by one position, removing the last value. If the buffer becomes empty, an empty string is added at the beginning.

## Use Cases

Suitable for various use cases involving the management of circular buffers that exclusively store strings or characters. Some potential use cases include:

1. **Input History in a Console or Terminal:**

   - Maintain a history of user inputs with a fixed size.

2. **Text Animation:**

   - Create scrolling text displays or text-based animations.

3. **Textual Undo/Redo Functionality:**

   - Implement undo and redo functionality for changes made to a string.

4. **Rotating Text Displays:**

   - Display a rotating set of messages or information.

5. **Logging Recent Events:**

   - Log recent events in a string format within a fixed-size buffer.

6. **String History in Interactive Applications:**

   - Manage a history of user inputs or actions involving strings.

7. **String-based Sliding Windows:**

   - Process a stream of string data and keep track of recent strings.

8. **Fixed-Size String Buffer in Resource-Constrained Environments:**
   - Manage string data efficiently in resource-constrained environments.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
