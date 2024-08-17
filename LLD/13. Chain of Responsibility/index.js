// The Chain of Responsibility Design Pattern is a behavioral design pattern that allows an object to pass a request along a chain of potential handlers until the request is handled or the end of the chain is reached. This pattern decouples the sender of a request from its receiver by giving multiple objects a chance to handle the request. Each handler in the chain either processes the request or passes it along to the next handler in the chain.

// Key Concepts
// 1. Handler: Defines an interface for handling requests and an optional link to the next handler.
// 2. Concrete Handlers: Implement the handling logic for specific types of requests and may either handle the request or pass it along to the next handler.
// 3. Client: Initiates the request and sends it to the first handler in the chain.

// Real-Life Example
// Let's use an example of a support system in a company where a customer’s issue can be handled by different levels of support: Basic Support, Intermediate Support, and Advanced Support. Each level can handle specific types of issues and pass the more complex ones to the next level.

// Steps in the Example
// 1. Basic Support: Handles simple issues like password resets.
// 2. Intermediate Support: Handles more complex issues such as software installation problems.
// 3. Advanced Support: Handles very complex issues like system architecture or advanced troubleshooting.

// Implementing the Chain of Responsibility Pattern

// 1. Handler Interface:
// Define an interface that declares a method for handling requests and another method for setting the next handler in the chain.

// interface SupportHandler {
//   setNext(handler: SupportHandler): void;
//   handleRequest(request: string): void;
// }

// 2. Concrete Handlers:
// Implement concrete handlers that provide specific handling logic and pass the request to the next handler if needed.

// Basic Support:

// class BasicSupport implements SupportHandler {
//   private nextHandler: SupportHandler | null = null;

//   setNext(handler: SupportHandler): void {
//       this.nextHandler = handler;
//   }

//   handleRequest(request: string): void {
//       if (request === 'password reset') {
//           console.log('Basic Support: Handling password reset');
//       } else if (this.nextHandler) {
//           this.nextHandler.handleRequest(request);
//       } else {
//           console.log('Basic Support: Cannot handle request');
//       }
//   }
// }

// Intermediate Support:

// class IntermediateSupport implements SupportHandler {
//   private nextHandler: SupportHandler | null = null;

//   setNext(handler: SupportHandler): void {
//       this.nextHandler = handler;
//   }

//   handleRequest(request: string): void {
//       if (request === 'software installation') {
//           console.log('Intermediate Support: Handling software installation');
//       } else if (this.nextHandler) {
//           this.nextHandler.handleRequest(request);
//       } else {
//           console.log('Intermediate Support: Cannot handle request');
//       }
//   }
// }

// Advanced Support:

// class AdvancedSupport implements SupportHandler {
//   private nextHandler: SupportHandler | null = null;

//   setNext(handler: SupportHandler): void {
//       this.nextHandler = handler;
//   }

//   handleRequest(request: string): void {
//       if (request === 'advanced troubleshooting') {
//           console.log('Advanced Support: Handling advanced troubleshooting');
//       } else if (this.nextHandler) {
//           this.nextHandler.handleRequest(request);
//       } else {
//           console.log('Advanced Support: Cannot handle request');
//       }
//   }
// }

// 3. Client Code:
// Set up the chain of handlers and send requests through the chain.

// class SupportSystem {
//   public static main(): void {
//       const basicSupport = new BasicSupport();
//       const intermediateSupport = new IntermediateSupport();
//       const advancedSupport = new AdvancedSupport();

//       // Set up the chain
//       basicSupport.setNext(intermediateSupport);
//       intermediateSupport.setNext(advancedSupport);

//       // Client requests
//       basicSupport.handleRequest('password reset');
//       basicSupport.handleRequest('software installation');
//       basicSupport.handleRequest('advanced troubleshooting');
//       basicSupport.handleRequest('unknown request');
//   }
// }

// // Run the Support System example
// SupportSystem.main();


// Explanation
// 1. Handler Interface (SupportHandler): Declares methods for setting the next handler and handling requests.
// 2. Concrete Handlers (BasicSupport, IntermediateSupport, AdvancedSupport): Implement the logic for handling specific requests and decide whether to pass the request to the next handler.
// 3. Client (SupportSystem): Creates instances of handlers, sets up the chain, and sends requests.

// Benefits of the Chain of Responsibility Pattern
// 1. Decoupling: The sender of a request is decoupled from the receiver, allowing for more flexible and dynamic handling of requests.
// 2. Flexibility: The chain can be dynamically modified by adding or removing handlers.
// 3. Single Responsibility: Each handler is responsible for only its part of the request processing, adhering to the Single Responsibility Principle.

// Summary
// The Chain of Responsibility Pattern allows a request to be passed along a chain of handlers, where each handler has the opportunity to process the request or pass it to the next handler. This pattern promotes flexibility and decoupling between the sender of a request and its handlers, making it easier to manage and extend the handling logic.