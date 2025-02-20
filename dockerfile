# Using v22.14.0 Node.js version as the base for building the app
FROM node:22.14.0-alpine AS builder

# Copying only the package.json file to install the dependencies
# COPY package.json ./
# RUN npm install

# Create a directory for our application in the container
# RUN mkdir -p /app
# WORKDIR /app

# Set the working directory
RUN  mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

ENV HOST=0.0.0.0
ENV PORT=8080

# Install 'serve', a static file serving package globally in the container
RUN npm install -g serve

# Install dependencies
RUN npm install
# Build the React app
RUN npm run build

# Start the web server
CMD ["serve", "-s",  "-l", "8080", "./build"]