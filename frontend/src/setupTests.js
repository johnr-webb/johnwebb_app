import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.matchMedia for Material-UI responsive components
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver using modern API
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver using modern API
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock performance API using modern methods
global.performance = {
  now: vi.fn(() => Date.now()),
  getEntriesByType: vi.fn(() => []),
  mark: vi.fn(),
  measure: vi.fn(),
};

// Mock modern browser APIs
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock URL and URLSearchParams
global.URL = URL;
global.URLSearchParams = URLSearchParams;

// Mock fetch API
global.fetch = vi.fn();

// Suppress console warnings during tests
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render is no longer supported') ||
        args[0].includes('Warning: componentWillReceiveProps') ||
        args[0].includes('Warning: componentWillUpdate'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: componentWillReceiveProps') ||
        args[0].includes('Warning: componentWillUpdate'))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});
