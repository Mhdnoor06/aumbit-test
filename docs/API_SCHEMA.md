# Aumbit Contact Management API Documentation

## Overview

This API provides endpoints for managing contact form submissions in the Aumbit admin portal. It supports creating, retrieving, and updating contact submissions with full CRUD operations and advanced filtering capabilities.

## Base URL

```
/api/contact
```

## Authentication

All admin endpoints require authentication via NextAuth.js. Users must be logged in with a valid session to access these endpoints.

---

## Endpoints

### 1. Submit Contact Form

**POST** `/api/contact`

Creates a new contact form submission.

#### Request Body

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "company": "string (optional)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

#### Request Example

```bash
curl -X POST /api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "subject": "Partnership Inquiry",
    "message": "I would like to discuss a potential partnership..."
  }'
```

#### Response

**Success (200)**

```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

**Error (400)**

```json
{
  "error": "Missing required fields"
}
```

**Error (400)**

```json
{
  "error": "Invalid email format"
}
```

**Error (500)**

```json
{
  "error": "Internal server error",
  "message": "Failed to submit contact form. Please try again later."
}
```

#### Validation Rules

- `name`: Required, non-empty string
- `email`: Required, valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- `company`: Optional string
- `subject`: Required, non-empty string
- `message`: Required, non-empty string

---

### 2. Get Contact Submissions

**GET** `/api/contact`

Retrieves contact submissions with pagination, filtering, and search capabilities.

#### Query Parameters

| Parameter | Type    | Default | Description                                                    |
| --------- | ------- | ------- | -------------------------------------------------------------- |
| `page`    | integer | 1       | Page number for pagination                                     |
| `limit`   | integer | 10      | Number of items per page                                       |
| `status`  | string  | "all"   | Filter by status: "new", "read", "replied", "closed", or "all" |
| `search`  | string  | ""      | Search term for name, email, subject, or company               |

#### Request Examples

```bash
# Get all submissions
curl -X GET "/api/contact"

# Get page 2 with 20 items per page
curl -X GET "/api/contact?page=2&limit=20"

# Filter by status
curl -X GET "/api/contact?status=new"

# Search for specific terms
curl -X GET "/api/contact?search=partnership"

# Combined filters
curl -X GET "/api/contact?page=1&limit=5&status=read&search=john"
```

#### Response

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "id": "clx1234567890",
      "name": "John Doe",
      "email": "john@example.com",
      "company": "Acme Corp",
      "subject": "Partnership Inquiry",
      "message": "I would like to discuss a potential partnership...",
      "status": "new",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalCount": 25,
    "totalPages": 3,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

**Error (500)**

```json
{
  "error": "Failed to fetch contact submissions"
}
```

---

### 3. Update Contact Status

**PATCH** `/api/contact/update-status`

Updates the status of a contact submission.

#### Request Body

```json
{
  "id": "string (required)",
  "status": "string (required)"
}
```

#### Request Example

```bash
curl -X PATCH /api/contact/update-status \
  -H "Content-Type: application/json" \
  -d '{
    "id": "clx1234567890",
    "status": "read"
  }'
```

#### Response

**Success (200)**

```json
{
  "success": true,
  "data": {
    "id": "clx1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "subject": "Partnership Inquiry",
    "message": "I would like to discuss a potential partnership...",
    "status": "read",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:45:00.000Z"
  },
  "message": "Contact submission status updated successfully"
}
```

**Error (400)**

```json
{
  "error": "Missing required fields: id and status"
}
```

**Error (400)**

```json
{
  "error": "Invalid status. Must be one of: new, read, replied, closed"
}
```

**Error (404)**

```json
{
  "error": "Contact submission not found"
}
```

**Error (500)**

```json
{
  "error": "Failed to update contact submission status"
}
```

#### Valid Status Values

- `new`: Newly submitted contact form
- `read`: Contact form has been read by admin
- `replied`: Admin has replied to the contact
- `closed`: Contact form is closed/resolved

---

## Data Models

### ContactSubmission

```typescript
interface ContactSubmission {
  id: string; // Unique identifier (CUID)
  name: string; // Contact person's name
  email: string; // Contact person's email
  company?: string; // Optional company name
  subject: string; // Subject of the inquiry
  message: string; // Detailed message content
  status: string; // Current status: "new" | "read" | "replied" | "closed"
  createdAt: string; // ISO 8601 timestamp of creation
  updatedAt: string; // ISO 8601 timestamp of last update
}
```

### Pagination

```typescript
interface Pagination {
  page: number; // Current page number
  limit: number; // Items per page
  totalCount: number; // Total number of items
  totalPages: number; // Total number of pages
  hasNextPage: boolean; // Whether there's a next page
  hasPrevPage: boolean; // Whether there's a previous page
}
```

---

## Error Handling

All endpoints return appropriate HTTP status codes and error messages:

- **200**: Success
- **400**: Bad Request (validation errors)
- **404**: Not Found (resource doesn't exist)
- **500**: Internal Server Error

Error responses include:

- `error`: Error type or message
- `message`: Additional details (optional)

---

## Rate Limiting

Currently, no rate limiting is implemented. Consider implementing rate limiting for production use to prevent abuse.

---

## Database Schema

The contact submissions are stored in a PostgreSQL database using Prisma ORM:

```sql
CREATE TABLE contact_submissions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

---

## Usage Examples

### Frontend Integration

#### Submit Contact Form

```javascript
const submitContactForm = async (formData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Contact form submitted successfully");
    } else {
      console.error("Error:", result.error);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
```

#### Fetch Contact Submissions

```javascript
const fetchContactSubmissions = async (
  page = 1,
  status = "all",
  search = ""
) => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: "10",
      status,
      search,
    });

    const response = await fetch(`/api/contact?${params}`);
    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      console.error("Error:", result.error);
      return [];
    }
  } catch (error) {
    console.error("Network error:", error);
    return [];
  }
};
```

#### Update Contact Status

```javascript
const updateContactStatus = async (id, status) => {
  try {
    const response = await fetch("/api/contact/update-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Status updated successfully");
    } else {
      console.error("Error:", result.error);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
```

