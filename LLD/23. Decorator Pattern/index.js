// The **Decorator Design Pattern** is a structural pattern that allows you to dynamically add behavior to an object without altering its structure. This pattern is useful when you need to extend the functionalities of classes in a flexible and reusable way.

// ### Key Concepts

// 1. **Component:** The base interface or abstract class that defines the common interface for objects that can have responsibilities added dynamically.

// 2. **Concrete Component:** A class that implements the `Component` interface. It represents the core object that can have additional responsibilities added to it.

// 3. **Decorator:** An abstract class or interface that implements the `Component` interface and has a reference to a `Component` object. This class delegates all operations to the component it decorates and can add additional behavior.

// 4. **Concrete Decorator:** A class that extends the `Decorator` and adds specific behavior to the component.

// ### Real-Life Examples

// 1. **Coffee Shop:**
//    - **Base Component:** `Coffee` (interface for all coffee types)
//    - **Concrete Component:** `SimpleCoffee` (a basic coffee)
//    - **Decorator:** `CoffeeDecorator` (abstract class that adds functionality to coffee)
//    - **Concrete Decorators:** `MilkDecorator`, `SugarDecorator` (add milk and sugar to coffee)

//    In a coffee shop, you might start with a basic coffee and then add various ingredients like milk or sugar. Each ingredient is added dynamically and does not change the original coffee object.

// 2. **UI Components:**
//    - **Base Component:** `Window` (interface for window components)
//    - **Concrete Component:** `SimpleWindow` (a basic window)
//    - **Decorator:** `WindowDecorator` (abstract class for decorating windows)
//    - **Concrete Decorators:** `ScrollBarDecorator`, `BorderDecorator` (add scroll bars and borders to windows)

//    In a graphical user interface, you might start with a simple window and then add features like scroll bars or borders without modifying the original window class.

// 3. **Text Formatting:**
//    - **Base Component:** `Text` (interface for text formatting)
//    - **Concrete Component:** `PlainText` (basic text)
//    - **Decorator:** `TextDecorator` (abstract class for text decoration)
//    - **Concrete Decorators:** `BoldDecorator`, `ItalicDecorator` (add bold and italic formatting)

//    In text processing, you might start with plain text and apply various formatting options like bold or italic dynamically.

// ### Detailed Example: **Coffee Shop**

// Let’s implement a simple coffee shop example where we dynamically add features like milk and sugar to a basic coffee.

// 1. **Define the Component Interface (`Coffee`):**

//    This interface defines the basic operations that can be performed on coffee.

//    ```typescript
//    interface Coffee {
//        cost(): number;
//        description(): string;
//    }
//    ```

// 2. **Create the Concrete Component (`SimpleCoffee`):**

//    This class represents a basic coffee without any added features.

//    ```typescript
//    class SimpleCoffee implements Coffee {
//        public cost(): number {
//            return 5; // base cost of the coffee
//        }

//        public description(): string {
//            return 'Simple Coffee';
//        }
//    }
//    ```

// 3. **Define the Decorator (`CoffeeDecorator`):**

//    This abstract class implements the `Coffee` interface and holds a reference to a `Coffee` object. It delegates the operations to the component.

//    ```typescript
//    abstract class CoffeeDecorator implements Coffee {
//        protected coffee: Coffee;

//        constructor(coffee: Coffee) {
//            this.coffee = coffee;
//        }

//        public abstract cost(): number;
//        public abstract description(): string;
//    }
//    ```

// 4. **Create Concrete Decorators (`MilkDecorator` and `SugarDecorator`):**

//    These classes add specific features to the coffee.

//    ```typescript
//    class MilkDecorator extends CoffeeDecorator {
//        public cost(): number {
//            return this.coffee.cost() + 2; // adding milk costs 2
//        }

//        public description(): string {
//            return this.coffee.description() + ', Milk';
//        }
//    }

//    class SugarDecorator extends CoffeeDecorator {
//        public cost(): number {
//            return this.coffee.cost() + 1; // adding sugar costs 1
//        }

//        public description(): string {
//            return this.coffee.description() + ', Sugar';
//        }
//    }
//    ```

// 5. **Using the Decorator Pattern:**

//    Here’s how you can create a basic coffee and add various features to it.

//    ```typescript
//    class DecoratorPatternDemo {
//        public static main(): void {
//            // Create a simple coffee
//            const coffee: Coffee = new SimpleCoffee();

//            console.log(coffee.description()); // Output: Simple Coffee
//            console.log(`Cost: $${coffee.cost()}`); // Output: Cost: $5

//            // Add milk to the coffee
//            const milkCoffee: Coffee = new MilkDecorator(coffee);
//            console.log(milkCoffee.description()); // Output: Simple Coffee, Milk
//            console.log(`Cost: $${milkCoffee.cost()}`); // Output: Cost: $7

//            // Add sugar to the milk coffee
//            const milkSugarCoffee: Coffee = new SugarDecorator(milkCoffee);
//            console.log(milkSugarCoffee.description()); // Output: Simple Coffee, Milk, Sugar
//            console.log(`Cost: $${milkSugarCoffee.cost()}`); // Output: Cost: $8
//        }
//    }

//    // Run the DecoratorPatternDemo example
//    DecoratorPatternDemo.main();
//    ```

// ### Why Use the Decorator Pattern?

// 1. **Flexibility:** The pattern allows you to add new behavior to objects at runtime without modifying their structure. You can combine different decorators to achieve the desired functionality.

// 2. **Single Responsibility Principle:** It helps adhere to the Single Responsibility Principle by allowing you to add responsibilities to objects without changing their code.

// 3. **Open/Closed Principle:** It adheres to the Open/Closed Principle by allowing you to extend functionalities without modifying existing code.

// 4. **Dynamic Behavior Addition:** You can dynamically add and remove responsibilities to objects, which is more flexible compared to static subclassing.

// ### Summary

// The Decorator Design Pattern is useful for dynamically adding behavior to objects without changing their structure. It allows you to extend the functionality of an object in a flexible and reusable manner. In the coffee shop example, it lets you add features like milk and sugar to a basic coffee without altering the original coffee class.