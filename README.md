# Ecommerce Prototype

## Release 2.0
- New **Cart CRUD Feature**:
    - **Cart CRUD Feature**:
      - Add products to the cart
      - View the cart
      - Update product quantity in the cart
      - Remove products from the cart
    - **Cart Checkout Feature**:
        - Proceed to checkout from the cart
        - Fill in billing and shipping details
        - Validate form inputs and place the order
        - Send purchase details to the backend
        - Persist orders and order items in the database
## Release 1.0 

- It sets up the basic structure for backend and frontend
- Provides a **product list** feature

## Project Structure
- **Backend:** implemented in Spring Boot, located in `ecommerce-backend`
- - Entry point: `src/main/java/com/example/ecommerce/SpringBootEcommerceApplication.java`
- **Frontend:** implemented in AngularJS, located in ecommerce-frontend

## How to Run

### Start the Database (Docker)
The project uses a MySQL 8 container with an initialization script.

```bash
cd db
docker-compose up --build
```

```bash
cd db
docker-compose down
```

### Start the backend 
Use the Maven Wrapper script provided in the project:
```bash
cd ecommerce-backend
./mvnw spring-boot:run   # on Linux/macOS
mvnw.cmd spring-boot:run # on Windows
```

### Start the frontend
```bash
cd ecommerce-frontend/angular-ecommerce
npm install
ng serve
```

### Access the application
Open your browser and go to:
```
http://localhost:4200/
```
