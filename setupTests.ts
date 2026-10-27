import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'node:util';

// React Router 7 needs these, and jsdom doesn't provide them.
Object.assign(globalThis, { TextEncoder, TextDecoder });
