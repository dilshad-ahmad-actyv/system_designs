// Interface Segmented Principle
// Interface should be such that client should not implement unnecessary functions they do not need.

// Wrong way

// interface RestaurantEmployee{
//     washDishes();
//     serveCustomers();
//     cookFood();
// }

// class Worker implements RestaurantEmployee{
//     washDishes(){
//         // not my job
//     }

//     serveCustomers(){
//         // yes, this is my job
//         console.log('Serving the customers')
//     }

//     cookFood(){
//         // not my job
//     }
// }

// Correct way

// interface WaiterInterface{
//     serveCustomers();
//     takeOrders();
// }

// interface ChefInterface(){
//     decideMenu();
//     cookFood();
// }

// interface CleaningInterface{
//     washDishes();
//     cleanHouses();
// }

// class Worker implements WaiterInterface{
//     serveCustomers(){
//         // do something
//     }
//     takeOrders(){
//         // do something
//     }
// }
