// How to avoid null checking in the codes
// 1. A null object replaces NULL return type
// 2. No need to put IF Check for checking NULL
// 3. Null Object reflects do Nothing or Default behaviour

// Imagine you’re building a game where you need to display messages. You have a MessagePrinter that shows messages on the screen. Sometimes, you might not want to show any message at all.

// Instead of using a null value to represent "no message," you use a special class called NoMessagePrinter that behaves like a MessagePrinter but doesn’t actually show any message.

// How It Works

// 1. Define a Common Interface:
// Create a basic interface or class that defines what you want to do. In this case, it’s MessagePrinter with a print method:

// public interface MessagePrinter {
//   void print(String message);
// }

// 2. Create Real and Null Implementations:

// Real Implementation: This is what you use when you want to show messages.

// public class RealMessagePrinter implements MessagePrinter {
//   @Override
//   public void print(String message) {
//       System.out.println(message);
//   }
// }

// Null Implementation: This is a special class that does nothing but still fits the MessagePrinter interface.

// public class NoMessagePrinter implements MessagePrinter {
//   @Override
//   public void print(String message) {
//       // Do nothing
//   }
// }

// 3. Use the Null Object:
// When creating a MessagePrinter, you decide whether to use the real one or the null one. Your code doesn’t need to check if it’s null or not:

// public class Game {
//   private MessagePrinter printer;

//   public Game(MessagePrinter printer) {
//       this.printer = (printer != null) ? printer : new NoMessagePrinter();
//   }

//   public void displayMessage(String message) {
//       printer.print(message);
//   }
// }

// If you pass a RealMessagePrinter, it will print the message.
// If you pass null, the NoMessagePrinter will be used, and it will do nothing.

// Why It’s Useful
// 1. Avoids Null Checks: Your displayMessage method doesn’t need to check if printer is null. It can just call print safely.
// 2. Simplifies Code: By using NoMessagePrinter, you avoid messy if (printer != null) checks scattered throughout your code.

// Summary
// The Null Object Pattern helps you manage situations where you might otherwise use null. Instead of checking if something is null, you use a special object that does nothing or provides default behavior. This makes your code cleaner and less error-prone.


// The Null Object Design Pattern is a software design pattern used to avoid null checks in your code. It provides a way to handle the concept of "null" without actually using null references. This pattern involves creating a special class that represents the absence of an object but still conforms to the interface of the expected object. Here’s a more detailed explanation:

// Concept
// Define an Interface or Abstract Class:
// Define a common interface or abstract class that outlines the behavior of the objects you want to handle.

// Create Concrete Implementations:
// Create concrete implementations of this interface for actual business logic.

// Create a Null Object Implementation:
// Create a class that implements the same interface but does nothing or provides default behavior. This class is the "Null Object."

// Benefits
// Eliminates Null Checks: By using the Null Object, you don’t need to write explicit null checks throughout your code. You can call methods on the Null Object without worrying about null reference exceptions.
// Simplifies Code: Your code becomes cleaner and more maintainable because it doesn’t need to handle special cases for null values.
// Encapsulates Null Behavior: The null behavior is encapsulated within the Null Object, keeping the null-handling logic centralized and manageable.