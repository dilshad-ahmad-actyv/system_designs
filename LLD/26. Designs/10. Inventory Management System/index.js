// Designing an Inventory Management System (IMS) in TypeScript involves defining the core entities, operations, and interactions. The system needs to manage products, track stock levels, handle orders, and generate reports.

// ### 1. **Core Entities**

// The key entities in the Inventory Management System are:

// - **Product**: Represents an item in the inventory.
// - **Category**: Represents a category or classification of products.
// - **Stock**: Tracks the quantity of each product available.
// - **Order**: Represents a purchase order that affects the inventory.
// - **Supplier**: Represents a supplier from whom products are sourced.
// - **Customer**: Represents a customer who places an order.
// - **Report**: Represents reports that summarize inventory status, sales, and other metrics.

// ### 2. **Classes**

// #### 2.1 **Product Class**

// The `Product` class represents an item in the inventory.

// ```typescript
// class Product {
//     private productId: string;
//     private name: string;
//     private category: string;
//     private price: number;
//     private supplierId: string;

//     constructor(productId: string, name: string, category: string, price: number, supplierId: string) {
//         this.productId = productId;
//         this.name = name;
//         this.category = category;
//         this.price = price;
//         this.supplierId = supplierId;
//     }

//     public getProductId(): string {
//         return this.productId;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public getCategory(): string {
//         return this.category;
//     }

//     public getPrice(): number {
//         return this.price;
//     }

//     public getSupplierId(): string {
//         return this.supplierId;
//     }
// }
// ```

// #### 2.2 **Category Class**

// The `Category` class represents a category of products.

// ```typescript
// class Category {
//     private categoryId: string;
//     private name: string;

//     constructor(categoryId: string, name: string) {
//         this.categoryId = categoryId;
//         this.name = name;
//     }

//     public getCategoryId(): string {
//         return this.categoryId;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }
// ```

// #### 2.3 **Stock Class**

// The `Stock` class tracks the quantity of each product available.

// ```typescript
// class Stock {
//     private productId: string;
//     private quantity: number;

//     constructor(productId: string, quantity: number = 0) {
//         this.productId = productId;
//         this.quantity = quantity;
//     }

//     public getProductId(): string {
//         return this.productId;
//     }

//     public getQuantity(): number {
//         return this.quantity;
//     }

//     public addStock(amount: number): void {
//         this.quantity += amount;
//     }

//     public reduceStock(amount: number): boolean {
//         if (amount > this.quantity) {
//             console.log("Insufficient stock");
//             return false;
//         }
//         this.quantity -= amount;
//         return true;
//     }
// }
// ```

// #### 2.4 **Order Class**

// The `Order` class represents a purchase order.

// ```typescript
// class Order {
//     private orderId: string;
//     private productId: string;
//     private quantity: number;
//     private orderDate: Date;
//     private customerId: string;

//     constructor(orderId: string, productId: string, quantity: number, customerId: string) {
//         this.orderId = orderId;
//         this.productId = productId;
//         this.quantity = quantity;
//         this.orderDate = new Date();
//         this.customerId = customerId;
//     }

//     public getOrderId(): string {
//         return this.orderId;
//     }

//     public getProductId(): string {
//         return this.productId;
//     }

//     public getQuantity(): number {
//         return this.quantity;
//     }

//     public getOrderDate(): Date {
//         return this.orderDate;
//     }

//     public getCustomerId(): string {
//         return this.customerId;
//     }
// }
// ```

// #### 2.5 **Supplier Class**

// The `Supplier` class represents a supplier from whom products are sourced.

// ```typescript
// class Supplier {
//     private supplierId: string;
//     private name: string;
//     private contactInfo: string;

//     constructor(supplierId: string, name: string, contactInfo: string) {
//         this.supplierId = supplierId;
//         this.name = name;
//         this.contactInfo = contactInfo;
//     }

//     public getSupplierId(): string {
//         return this.supplierId;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public getContactInfo(): string {
//         return this.contactInfo;
//     }
// }
// ```

// #### 2.6 **Customer Class**

// The `Customer` class represents a customer who places an order.

// ```typescript
// class Customer {
//     private customerId: string;
//     private name: string;
//     private contactInfo: string;

//     constructor(customerId: string, name: string, contactInfo: string) {
//         this.customerId = customerId;
//         this.name = name;
//         this.contactInfo = contactInfo;
//     }

//     public getCustomerId(): string {
//         return this.customerId;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public getContactInfo(): string {
//         return this.contactInfo;
//     }
// }
// ```

// ### 3. **Inventory Management**

// The `Inventory` class manages the products, stock levels, and orders.

// ```typescript
// class Inventory {
//     private products: Map<string, Product>;
//     private stock: Map<string, Stock>;
//     private orders: Map<string, Order>;

//     constructor() {
//         this.products = new Map<string, Product>();
//         this.stock = new Map<string, Stock>();
//         this.orders = new Map<string, Order>();
//     }

//     public addProduct(product: Product): void {
//         this.products.set(product.getProductId(), product);
//         this.stock.set(product.getProductId(), new Stock(product.getProductId()));
//     }

//     public updateStock(productId: string, quantity: number, add: boolean = true): void {
//         const stock = this.stock.get(productId);
//         if (stock) {
//             if (add) {
//                 stock.addStock(quantity);
//             } else {
//                 stock.reduceStock(quantity);
//             }
//         } else {
//             console.log("Product not found in stock");
//         }
//     }

//     public placeOrder(order: Order): void {
//         const stock = this.stock.get(order.getProductId());
//         if (stock && stock.reduceStock(order.getQuantity())) {
//             this.orders.set(order.getOrderId(), order);
//             console.log("Order placed successfully");
//         } else {
//             console.log("Order could not be placed due to insufficient stock");
//         }
//     }

//     public getStockStatus(productId: string): string {
//         const stock = this.stock.get(productId);
//         if (stock) {
//             return `Stock for Product ID ${productId}: ${stock.getQuantity()} units`;
//         } else {
//             return "Product not found in stock";
//         }
//     }

//     public generateReport(): void {
//         console.log("Inventory Report:");
//         this.stock.forEach((stock, productId) => {
//             console.log(`Product ID: ${productId}, Quantity: ${stock.getQuantity()}`);
//         });
//     }
// }
// ```

// ### 4. **Simulation Example**

// Here’s how you can simulate adding products, updating stock, and placing orders:

// ```typescript
// // Create some suppliers
// const supplier1 = new Supplier("s1", "ABC Suppliers", "contact@abc.com");

// // Create some products
// const product1 = new Product("p1", "Laptop", "Electronics", 1000, supplier1.getSupplierId());
// const product2 = new Product("p2", "Phone", "Electronics", 500, supplier1.getSupplierId());

// // Initialize inventory
// const inventory = new Inventory();

// // Add products to inventory
// inventory.addProduct(product1);
// inventory.addProduct(product2);

// // Update stock
// inventory.updateStock(product1.getProductId(), 50); // Add 50 Laptops
// inventory.updateStock(product2.getProductId(), 30); // Add 30 Phones

// // Check stock status
// console.log(inventory.getStockStatus(product1.getProductId())); // Stock for Product ID p1: 50 units
// console.log(inventory.getStockStatus(product2.getProductId())); // Stock for Product ID p2: 30 units

// // Place an order
// const customer1 = new Customer("c1", "John Doe", "john@example.com");
// const order1 = new Order("o1", product1.getProductId(), 5, customer1.getCustomerId());
// inventory.placeOrder(order1); // Order placed successfully

// // Check stock status after order
// console.log(inventory.getStockStatus(product1.getProductId())); // Stock for Product ID p1: 45 units

// // Generate report
// inventory.generateReport();
// // Inventory Report:
// // Product ID: p1, Quantity: 45
// // Product ID: p2, Quantity: 30
// ```

// ### 5. **Additional Features**

// - **Low Stock Alerts**: Notify when stock for a product falls below a certain threshold.
// - **Order Tracking**: Track the status of each order (e.g., pending, shipped, delivered).
// - **Return and Refund Management**: Handle returns and refunds of products.
// - **Supplier Management**: Manage relationships with multiple suppliers, including order history and contacts.
// - **Customer Management**: Maintain customer profiles with order history and preferences.
// - **Advanced Reporting**: Generate detailed reports on sales, inventory turnover, and other metrics.

// ### 6. **Possible Enhancements**

// - **Multi-Warehouse Support**: Manage inventory across multiple warehouses.
// - **Batch Management**: Handle products in batches with expiration dates or manufacturing details.
// - **Discounts and Promotions**: Implement pricing rules for discounts and promotions.
// - **Bar
