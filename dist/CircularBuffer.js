"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularBuffer = void 0;
class CircularBuffer {
    constructor({ limit }) {
        this.buffer = new Array(limit).fill('');
        this.limit = limit;
    }
    get() {
        return this.buffer.join('');
    }
    reset() {
        this.buffer = new Array(this.limit).fill('');
    }
    forward(value) {
        this.buffer.shift();
        this.buffer.push(value);
    }
    rewind() {
        if (this.buffer.length > 0) {
            this.buffer.pop();
            if (this.buffer.length < this.limit) {
                this.buffer.unshift('');
            }
        }
    }
}
exports.CircularBuffer = CircularBuffer;
