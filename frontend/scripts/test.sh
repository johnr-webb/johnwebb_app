#!/bin/bash

# Test runner script for John Webb's frontend application

echo "🧪 Running tests for John Webb's Portfolio App"
echo "================================================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules not found. Installing dependencies..."
    npm install
fi

# Run linting first
echo "🔍 Running ESLint..."
npm run lint

if [ $? -eq 0 ]; then
    echo "✅ Linting passed"
else
    echo "❌ Linting failed. Fix issues before running tests."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test

if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
    echo ""
    echo "🎉 Ready to deploy!"
else
    echo "❌ Some tests failed. Check the output above."
    exit 1
fi
