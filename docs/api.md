# API Documentation

This document describes the REST API endpoints provided by the FastAPI backend.

## Base URL

- **Development**: `http://localhost:8000`
- **Production**: `https://your-cloud-run-url.run.app`

## Authentication

Currently, the API does not require authentication. This will be added in future versions.

## Endpoints

### Health Check

#### GET /

Returns a simple health check message.

**Response:**

```json
{
  "message": "Hello, World!"
}
```

#### GET /hello/{name}

Returns a personalized greeting.

**Parameters:**

- `name` (string): The name to greet

**Response:**

```json
{
  "message": "Hello, {name}!"
}
```

### Users

#### GET /users

Get all users.

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

#### POST /users

Create a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}
```

### Posts

#### GET /posts

Get all posts.

**Response:**

```json
[
  {
    "id": 1,
    "title": "My First Post",
    "content": "This is the content of my first post.",
    "author_id": 1,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

#### POST /posts

Create a new post.

**Request Body:**

```json
{
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "author_id": 1
}
```

**Response:**

```json
{
  "id": 1,
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "author_id": 1,
  "created_at": "2024-01-01T00:00:00Z"
}
```

## Error Responses

### 400 Bad Request

```json
{
  "detail": "Validation error message"
}
```

### 404 Not Found

```json
{
  "detail": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "detail": "Internal server error"
}
```

## Interactive API Documentation

When running the development server, you can access:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

These provide interactive documentation where you can test the API endpoints directly.

## Rate Limiting

Currently, there are no rate limits implemented. This will be added in future versions.

## CORS

The API is configured to allow requests from any origin during development. In production, this should be restricted to your frontend domain.

## Data Models

### User

```json
{
  "id": "integer",
  "name": "string",
  "email": "string",
  "created_at": "datetime"
}
```

### Post

```json
{
  "id": "integer",
  "title": "string",
  "content": "string",
  "author_id": "integer",
  "created_at": "datetime"
}
```

## Future Enhancements

- Authentication and authorization
- Rate limiting
- Input validation improvements
- Pagination for list endpoints
- Search and filtering
- File upload support
