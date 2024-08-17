// The Template Method Design Pattern is a behavioral design pattern that defines the skeleton of an algorithm in a base class but allows subclasses to override specific steps of the algorithm without changing its structure. This pattern is useful for defining a common sequence of steps for various algorithms while allowing some flexibility in the details.

// Key Concepts
// 1. Template Method: This is the method in the base class that defines the algorithm's skeleton. It typically calls other methods (steps) that can be overridden by subclasses.
// 2. Concrete Methods: Methods in the base class with a fixed implementation that are part of the algorithm's structure.
// 3. Abstract Methods (Hooks): Methods that are defined in the base class but meant to be overridden by subclasses to provide specific behavior.


// Real-Life Example
// Let’s consider a real-life example of preparing a cup of coffee. The process involves several steps, but some details might vary based on whether you’re making espresso, cappuccino, or latte.

// Steps Involved in Making Coffee
// 1. Boil Water: This step is common for all types of coffee.
// 2. Brew Coffee Grounds: This step varies based on the type of coffee.
// 3. Add Condiments: Adding milk or sugar, which can vary by preference.

// Applying the Template Method Pattern

// 1. Base Class (Template):
// This class defines the algorithm’s skeleton and includes common steps that are not meant to be changed.

// public abstract class CoffeeTemplate {
//   // Template method
//   public final void prepareCoffee() {
//       boilWater();
//       brewCoffeeGrounds();
//       pourInCup();
//       addCondiments();
//   }

//   // Common steps
//   private void boilWater() {
//       System.out.println("Boiling water");
//   }

//   private void pourInCup() {
//       System.out.println("Pouring coffee into cup");
//   }

//   // Steps that subclasses can override
//   protected abstract void brewCoffeeGrounds();
//   protected abstract void addCondiments();
// }

// 2. Concrete Subclasses:
// These classes provide specific implementations for the steps defined as abstract in the base class.

// a.  Espresso:

// public class Espresso extends CoffeeTemplate {
//   @Override
//   protected void brewCoffeeGrounds() {
//       System.out.println("Dripping coffee through espresso machine");
//   }

//   @Override
//   protected void addCondiments() {
//       System.out.println("Adding sugar to espresso");
//   }
// }

// b. Cappuccino

// public class Cappuccino extends CoffeeTemplate {
//   @Override
//   protected void brewCoffeeGrounds() {
//       System.out.println("Dripping coffee through espresso machine");
//   }

//   @Override
//   protected void addCondiments() {
//       System.out.println("Adding milk and foam to cappuccino");
//   }
// }

// 3. Client
// This class uses the template to prepare different types of coffee.

// public class CoffeeShop {
//   public static void main(String[] args) {
//       CoffeeTemplate espresso = new Espresso();
//       espresso.prepareCoffee();

//       System.out.println();

//       CoffeeTemplate cappuccino = new Cappuccino();
//       cappuccino.prepareCoffee();
//   }
// }

// Explanation
// 1. Template Method (prepareCoffee): This method in the CoffeeTemplate class defines the sequence of steps to prepare coffee. It is marked as final to prevent subclasses from changing the algorithm's structure.

// 2. Common Steps (boilWater, pourInCup): These steps have a fixed implementation and are used in all types of coffee preparation.

// 3. Abstract Steps (brewCoffeeGrounds, addCondiments): These methods are abstract and must be implemented by subclasses to provide specific behavior.

// 4.Concrete Subclasses (Espresso, Cappuccino): These subclasses provide their own implementations of the abstract methods to define how the coffee grounds are brewed and how condiments are added.


// Benefits of the Template Method Pattern
// 1. Code Reuse: Common algorithmic structure is implemented in the base class, reducing code duplication.
// 2. Flexibility: Subclasses can provide specific implementations for steps of the algorithm, allowing for customization.
// 3. Control: The base class controls the overall algorithm, ensuring that it follows a predefined sequence while allowing variation in specific steps.

// Summary
// The Template Method Pattern allows you to define a common algorithm in a base class while letting subclasses provide specific implementations for certain steps. It’s useful when you have a common sequence of steps but need flexibility in how individual steps are performed.