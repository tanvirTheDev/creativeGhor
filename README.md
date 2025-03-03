
# Digital Products E-commerce Website

## Overview

The **Digital Products E-commerce Website** is a scalable and secure platform designed for selling digital products. It includes a **Seller Dashboard**, advanced search and filtering, and flash sales. Built using **Next.js, MongoDB, and Express.js**, the platform ensures high performance and responsiveness.

---

## Features

### User Management
- **JWT-based Authentication**: Secure login and signup.
- **User Roles**: Admin, Seller, and Customer.
- **Profile Management**: Update user details and preferences.

### Product Management
- **CRUD Operations**: Sellers can add, edit, and delete products.
- **Product Details**: Includes images, title, description, price, brand, and ratings.
- **Categorization**: Products grouped by brand and category.

### Seller Dashboard
- **Product Management**: Manage inventory with an intuitive interface.
- **Sales Tracking**: View analytics on sales and performance.

### Flash Sale
- **Limited-time Offers**: Exclusive discounts on selected products.
- **Countdown Timer**: Displays expiration time for deals.

### Search & Filter
- **Full-Text Search**: Find products by name, brand, or description.
- **Advanced Filters**: Filter products by category, brand, price range, and ratings.

### Trending Products
- **Dynamic Listings**: Showcases best-rated and most-purchased products.

### Dashboards
- **Admin Dashboard**: Manage users, products, and sales.
- **Seller Dashboard**: Track and optimize product performance.

### Performance & SEO
- **Optimized Loading**: Utilizes **SSG, SSR, and ISR** for improved speed.
- **SEO Best Practices**: Enhances search visibility.

### Error Handling
- **Custom Error Pages**: Dedicated pages for 404 and other errors.

---

## Technology Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT
- **Deployment**: Frontend and backend on Render
- **State Management**: Redux Toolkit

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
- **POST** `/api/register` - Register a new user.
- **POST** `/api/login` - Authenticate a user.

### Product Endpoints
- **GET** `/api/products` - Fetch all products with optional filters.
- **GET** `/api/products/:id` - Fetch details of a single product.
- **POST** `/api/products` - Add a new product (Admin & Seller only).
- **PUT** `/api/products/:id` - Update product details (Admin & Seller only).
- **DELETE** `/api/products/:id` - Delete a product (Admin & Seller only).

### Flash Sale Endpoints
- **GET** `/api/flash-sale` - Fetch all flash sale products.

### Order Endpoints
- **POST** `/api/orders` - Place a new order.
- **GET** `/api/orders` - Fetch all orders for a user.
- **GET** `/api/orders/:id` - Fetch details of a single order.

---

## Deployment

- **Frontend**: Deployed on [Render]((https://creativeghor.onrender.com))
- **Backend**: Hosted on [Render]([https://www.cyclic.sh/](https://creativeghor-backend.onrender.com)

---

## UI Screenshots
![CreativeGhor UI](/homepage.png)  ![CreativeGhor UI](/adminPage.png) 

---

## Contributing

1. Fork the repository.
2. Clone the project: `git clone https://github.com/Dev-Tanvir-Ahamed/creativeGhor.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature-branch`
5. Make your changes and commit: `git commit -m "Your message"`
6. Push to the branch: `git push origin feature-branch`
7. Create a Pull Request.

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For any inquiries, please contact [Tanvir Ahamed](mailto:ahamedtanvir374@gmail.com).

