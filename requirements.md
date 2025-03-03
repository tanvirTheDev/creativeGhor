# Digital Products E-commerce Website

## Project Overview

A comprehensive e-commerce platform for digital products, featuring a **Seller Dashboard** and user-friendly functionalities. Built with **Next.js, MongoDB, and Express.js**, it ensures scalability, security, and performance.

---

## Functional Requirements

### 1. User Management

- **User Authentication:** JWT-based login and signup.
- **User Roles:** Admin, Seller, and Customer.
- **Profile Management:** Update user details and preferences.

### 2. Product Management

- **CRUD Operations:** Sellers can manage their products.
- **Product Details:** Images, title, description, price, brand, and ratings.
- **Categorization:** Products grouped by brand and category.

### 3. Seller Dashboard

- **Product Management:** Add, edit, and delete products.
- **Sales Tracking:** View sales history and analytics.

### 4. Flash Sale

- **Exclusive Discounts:** Limited-time product offers.
- **Countdown Timer:** Display expiration time for deals.

### 5. Search & Filter

- **Full-Text Search:** Search products by name, brand, or description.
- **Advanced Filters:** Filter by category, brand, price range, and ratings.

### 6. Trending Products

- **Dynamic Listings:** Showcase best-rated and most-purchased products.

### 7. Dashboard

- **Admin Dashboard:** Manage users, products, and sales.
- **Seller Dashboard:** Track product performance.

### 8. Performance & SEO

- **Optimizations:** Implement **SSG, SSR, and ISR** for fast loading.
- **SEO Strategies:** Improve search visibility.

### 9. Error Handling

- **Custom Pages:** 404 and error handling pages.

---

## Non-Functional Requirements

1. **Scalability:** Supports growing traffic and data.
2. **Security:** JWT authentication, secure API endpoints.
3. **Accessibility:** Responsive across all devices.
4. **Deployment:** Frontend on Vercel, Backend on cyclic.sh.

---

## Data Models

### User Model

```json
{
  "name": "String",
  "email": "String",
  "password": "String",
  "role": "String", // 'admin', 'seller', 'customer'
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Product Model

```json
{
  "title": "String",
  "description": "String",
  "price": "Number",
  "brand": "String",
  "category": "String",
  "images": ["String"],
  "rating": "Number",
  "flashSale": "Boolean",
  "sellerId": "ObjectId",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Order Model

```json
{
  "userId": "ObjectId",
  "products": [
    {
      "productId": "ObjectId",
      "quantity": "Number"
    }
  ],
  "totalPrice": "Number",
  "status": "String", // 'pending', 'completed', 'cancelled'
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

## API Endpoints

### User Endpoints

- **POST** `/api/register`: Register a new user.
- **POST** `/api/login`: User login.

### Product Endpoints

- **GET** `/api/products`: Fetch all products with optional filters.
- **GET** `/api/products/:id`: Fetch single product details.
- **POST** `/api/products`: Add a new product (Admin & Seller only).
- **PUT** `/api/products/:id`: Update product details (Admin & Seller only).
- **DELETE** `/api/products/:id`: Delete a product (Admin & Seller only).

### Flash Sale Endpoints

- **GET** `/api/flash-sale`: Fetch all flash sale products.

### Order Endpoints

- **POST** `/api/orders`: Place a new order.
- **GET** `/api/orders`: Fetch user orders.
- **GET** `/api/orders/:id`: Fetch single order details.

---
