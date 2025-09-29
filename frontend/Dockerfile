# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Runtime stage
FROM node:22-alpine AS runtime

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY --from=build /app /app/

COPY server/ ./server/

EXPOSE 3000

CMD ["node", "server/app.js"]