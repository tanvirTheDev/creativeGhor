# Requirements Document

## Project Name: Electronic Gadgets Shop

### Project Description

A dynamic e-commerce platform for electronic gadgets enthusiasts, featuring products such as Mobiles, Laptops, TVs, and Refrigerators. The platform emphasizes user engagement, seamless browsing, and an immersive shopping experience using advanced technologies like Next.js, MongoDB, and Express.js.

---

## Functional Requirements

1. **User Management**

   - User registration and login.
   - JWT-based authentication.
   - User roles: Admin and Customer.

2. **Product Management**
   - CRUD operations for products (Admin only).
   - Categorize products by brand or category.
   - Display detailed product information (images, title, description, price, brand/category, and ratings).
3. **Flash Sale**
   - Highlight products marked for flash sales.
   - Include countdown timers for flash sale expiration.
4. **Search and Filter**

   - Search products by title or description.
   - Filter by category, brand, price range, or ratings.

5. **Trending Products**

   - Showcase top-rated products dynamically.

6. **Dashboard**

   - Admin dashboard with product management features.

7. **Frontend Features**

   - Static and dynamic routing for pages.
   - Carousel and visually appealing layouts.

8. **Performance Features**

   - Implement SSG, SSR, and ISR for optimized loading and data updates.

9. **Error Handling**
   - Custom 404 pages.

---

## Non-Functional Requirements

1. **Scalability**: Ensure the platform supports a growing number of users and products.
2. **Security**: Protect user data and transactions with JWT, secure database connections, and proper error handling.
3. **Accessibility**: Ensure responsive design across devices.
4. **Deployment**: Use Vercel or similar hosting platforms for frontend and deploy backend with services like cyclic.sh.

---

## Data Models

### User Model

```json
{
  "name": "String",
  "email": "String",
  "password": "String",
  "role": "String", // 'admin' or 'customer'
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

## Schema Design

### User Schema

```javascript
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
```

### Product Schema

```javascript
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  rating: { type: Number, default: 0 },
  flashSale: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
```

### Order Schema

```javascript
const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
```

---

## ER Diagram

- **Entities**: User, Product, Order
- **Relationships**:
  - User places multiple Orders.
  - Order contains multiple Products.
  - Products belong to Categories or Brands.

### Diagram Explanation

1. A User can place multiple Orders.
2. An Order can include multiple Products.
3. Products are categorized by Brand or Category.

---

## API Endpoints

### User Endpoints

- **POST** `/api/register`: Register a new user.
- **POST** `/api/login`: User login.

### Product Endpoints

- **GET** `/api/products`: Fetch all products with optional filters (brand, category, price, rating).
- **GET** `/api/products/:id`: Fetch single product details.
- **POST** `/api/products`: Add a new product (Admin only).
- **PUT** `/api/products/:id`: Update product details (Admin only).
- **DELETE** `/api/products/:id`: Delete a product (Admin only).

### Flash Sale Endpoints

- **GET** `/api/flash-sale`: Fetch all flash sale products.

### Order Endpoints

- **POST** `/api/orders`: Place a new order.
- **GET** `/api/orders`: Fetch user orders.
- **GET** `/api/orders/:id`: Fetch single order details.

---

### EveryDay Tasks

- **Date** - 2/11/2025
- **Task** - show all products in fontend from backend
- **Description** -
- i use axios when i get all products by get method it show authoriztion error. that means now i need to authorization token send in backend. so now i use interceptor to add token in header.

- token are set now. then i get all products and show in fontend.then i worked with edit, delete method. And Yesterday i already created a new product fuctionality.

now question is that why i not use rtk query? why i use axios?

- because axios provide a interceptor to add token in header. it like a middleware. so i can add it in axios interceptor and use it in all request.
