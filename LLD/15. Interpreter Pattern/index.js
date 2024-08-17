// The Interpreter Design Pattern is a behavioral design pattern used to interpret sentences in a language. It involves defining a grammar for the language and providing an interpreter to process sentences according to this grammar. This pattern is particularly useful for designing languages and tools that need to evaluate or execute expressions.

// The Interpreter Design Pattern is about interpreting or evaluating expressions in a language. Think of it as creating a way to "understand" and "execute" a specific type of code or instruction.

// Key Concepts
// 1. Abstract Expression: An interface or abstract class that defines an interpret method for interpreting expressions.
// 2. Terminal Expression: Implements the interpret method for terminal symbols in the grammar (i.e., the basic elements of the language).
// 3. Non-Terminal Expression: Implements the interpret method for non-terminal symbols (i.e., combinations of terminal symbols).
// 4. Context: Provides information needed for interpreting expressions, such as variables or input data.

// Real-Life Example

// Let's use a simple example of interpreting arithmetic expressions. Suppose we want to interpret expressions involving addition and subtraction, such as "5 + 3 - 2".

// Implementing the Interpreter Pattern

// 1. Abstract Expression:
// Define an interface for interpreting expressions.

// interface Expression {
//   interpret(context: Map<string, number>): number;
// }

// 2. Terminal Expressions:
// Implement expressions for numbers.

// class NumberExpression implements Expression {
//   private value: number;

//   constructor(value: number) {
//       this.value = value;
//   }

//   public interpret(context: Map<string, number>): number {
//       return this.value;
//   }
// }

// 3. Non-Terminal Expressions:
// Implement expressions for operators such as addition and subtraction.

// Addition Expression:

// class AddExpression implements Expression {
//   private left: Expression;
//   private right: Expression;

//   constructor(left: Expression, right: Expression) {
//       this.left = left;
//       this.right = right;
//   }

//   public interpret(context: Map<string, number>): number {
//       return this.left.interpret(context) + this.right.interpret(context);
//   }
// }

// Subtraction Expression:

// class SubtractExpression implements Expression {
//   private left: Expression;
//   private right: Expression;

//   constructor(left: Expression, right: Expression) {
//       this.left = left;
//       this.right = right;
//   }

//   public interpret(context: Map<string, number>): number {
//       return this.left.interpret(context) - this.right.interpret(context);
//   }
// }

// Client Code:
// Create and evaluate expressions.

// class InterpreterClient {
//   public static main(): void {
//       // Construct expression tree for "5 + 3 - 2"
//       const expression = new SubtractExpression(
//           new AddExpression(
//               new NumberExpression(5),
//               new NumberExpression(3)
//           ),
//           new NumberExpression(2)
//       );

//       // Interpret the expression
//       const result = expression.interpret(new Map<string, number>());
//       console.log(`Result: ${result}`); // Output: Result: 6
//   }
// }

// // Run the InterpreterClient example
// InterpreterClient.main();

// Explanation
// 1. Abstract Expression (Expression): Defines the interpret method that all concrete expressions will implement.
// 2. Terminal Expression (NumberExpression): Represents numeric values. It simply returns the value when interpreted.
// 3. Non-Terminal Expressions (AddExpression, SubtractExpression): Represent operations. They combine other expressions and perform the appropriate arithmetic operation.
// 4. Client (InterpreterClient): Constructs an expression tree and evaluates it.

// Benefits of the Interpreter Pattern
// 1. Easy to Extend: New expressions can be added easily by creating new concrete expression classes.
// 2. Readable and Maintainable: Expressions are represented as a tree structure, making them easier to understand and maintain.
// 3. Encapsulation of Grammar Rules: The grammar of the language is encapsulated in the expression classes, making it easy to manage and modify.

// Summary
// The Interpreter Design Pattern is used to define a grammar for a language and interpret sentences according to this grammar. It is implemented by defining an abstract expression interface, terminal expressions for basic symbols, non-terminal expressions for combinations, and a context for interpreting these expressions. In the arithmetic example, the pattern allows us to evaluate complex expressions involving addition and subtraction by constructing and interpreting an expression tree.
