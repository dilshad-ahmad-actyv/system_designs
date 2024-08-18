// The State Design Pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. It is particularly useful for managing complex state-dependent behavior in an object, making it easier to manage and extend.

// The State Design Pattern allows an object to change its behavior based on its internal state. Instead of having a large number of conditional statements to handle different states, you can use this pattern to encapsulate each state into its own class.

// Key Concepts
// 1. State: An interface or abstract class that defines the behavior associated with a particular state.
// 2. Concrete State: Implements the behavior for a specific state.
// 3. Context: Maintains an instance of a State subclass that represents the current state. It delegates state-specific behavior to this state object.

// Real-Life Example
// Consider a simple example of a traffic light system. The traffic light has different states: Red, Green, and Yellow. The behavior of the traffic light changes based on its state, and when it transitions from one state to another, its behavior changes accordingly.

// Components of the State Pattern

// 1. State Interface:
// Defines the methods that each concrete state should implement.

// interface State {
//   handleRequest(context: TrafficLightContext): void;
// }

// 2. Concrete States:
// Implement specific behavior for each state.

// * Red Light State:

// class RedLightState implements State {
//   public handleRequest(context: TrafficLightContext): void {
//       console.log('Red Light: Stop!');
//       context.setState(new GreenLightState()); // Transition to the next state
//   }
// }

// * Green Light State:

// class GreenLightState implements State {
//   public handleRequest(context: TrafficLightContext): void {
//       console.log('Green Light: Go!');
//       context.setState(new YellowLightState()); // Transition to the next state
//   }
// }

// * Yellow Light State:

// class YellowLightState implements State {
//   public handleRequest(context: TrafficLightContext): void {
//       console.log('Yellow Light: Caution!');
//       context.setState(new RedLightState()); // Transition to the next state
//   }
// }

// 3. Context:
// Maintains the current state and allows state transitions.

// class TrafficLightContext {
//   private state: State;

//   constructor(initialState: State) {
//       this.state = initialState;
//   }

//   public setState(state: State): void {
//       this.state = state;
//   }

//   public request(): void {
//       this.state.handleRequest(this);
//   }
// }


// 4. Client Code:
// Sets up the context and triggers state transitions.

// class TrafficLightSimulation {
//   public static main(): void {
//       // Start with the Red Light state
//       const trafficLight = new TrafficLightContext(new RedLightState());

//       // Simulate the traffic light changing states
//       trafficLight.request(); // Output: Red Light: Stop!
//       trafficLight.request(); // Output: Green Light: Go!
//       trafficLight.request(); // Output: Yellow Light: Caution!
//       trafficLight.request(); // Output: Red Light: Stop!
//   }
// }

// // Run the TrafficLightSimulation example
// TrafficLightSimulation.main();

// Explanation
// 1. State Interface (State): Defines the method handleRequest that all concrete states must implement.
// 2. Concrete States (RedLightState, GreenLightState, YellowLightState): Each concrete state implements the behavior associated with that state and handles state transitions.
// 3. Context (TrafficLightContext): Maintains the current state and delegates requests to the current state. It also handles state transitions.
// 4. Client (TrafficLightSimulation): Sets up the initial state and triggers state changes to demonstrate how the traffic light transitions between states.


// Benefits of the State Pattern
// * Encapsulation of State-Dependent Behavior: The pattern encapsulates the state-specific behavior in separate classes, making the code easier to maintain and extend.
// * State Transitions: Makes it easy to handle state transitions and manage state-specific behavior without using large conditional statements.
// * Extensibility: New states can be added with minimal changes to existing code. Each new state is implemented as a new class.

// Summary
// The State Design Pattern is useful for managing objects whose behavior depends on their state. By defining different states as separate classes, and allowing an object (the context) to transition between these states, you can simplify state-dependent behavior and make your code more modular and maintainable. The traffic light example demonstrates how the pattern helps manage different states (Red, Green, Yellow) and transitions between them in a clear and organized manner.