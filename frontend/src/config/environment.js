// Environment configuration
export const config = {
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
    timeout: 10000,
  },
  app: {
    name: 'John Webb App',
    version: '1.0.0',
    environment: import.meta.env.VITE_NODE_ENV || 'development',
  },
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    debugMode: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true',
  },
};

export default config;
