// The Command Design Pattern is a behavioral design pattern that turns a request or operation into an object. This allows you to parameterize clients with queues, requests, and operations. It also allows you to support undoable operations and queue operations for later execution.

// Key Concepts
// 1. Command Interface: Defines the interface for executing a command.
// 2. Concrete Commands: Implements the Command interface and defines the binding between a receiver object and an action.
// 3. Client: Creates a ConcreteCommand object and sets its receiver.
// 4. Invoker: Asks the command to execute the request.
// 5. Receiver: Knows how to perform the operations needed to fulfill a request.

// Real-Life Example
// Let’s use a simple example of a remote control with multiple buttons to control different devices (like lights and fans) to illustrate the Command Pattern.

// Components of the Command Pattern

// 1. Command Interface: 
// Defines a method for executing a command.

// public interface Command {
//   void execute();
// }

// 2. Concrete Commands:
// Implement the Command interface to execute specific operations.

// // Command to turn on the light
// public class LightOnCommand implements Command {
//   private Light light;

//   public LightOnCommand(Light light) {
//       this.light = light;
//   }

//   @Override
//   public void execute() {
//       light.turnOn();
//   }
// }

// // Command to turn off the light
// public class LightOffCommand implements Command {
//   private Light light;

//   public LightOffCommand(Light light) {
//       this.light = light;
//   }

//   @Override
//   public void execute() {
//       light.turnOff();
//   }
// }

// 3. Receiver:
// Knows how to perform the actual operations.
// public class Light {
//   public void turnOn() {
//       System.out.println("Light is ON");
//   }

//   public void turnOff() {
//       System.out.println("Light is OFF");
//   }
// }

// 4. Invoker:
// Asks the command to execute the request.

// public class RemoteControl {
//   private Command command;

//   public void setCommand(Command command) {
//       this.command = command;
//   }

//   public void pressButton() {
//       command.execute();
//   }
// }


// 5. Client:
// Sets up the command and associates it with the invoker.

// public class Client {
//   public static void main(String[] args) {
//       Light livingRoomLight = new Light();

//       Command lightOn = new LightOnCommand(livingRoomLight);
//       Command lightOff = new LightOffCommand(livingRoomLight);

//       RemoteControl remote = new RemoteControl();

//       // Turn the light on
//       remote.setCommand(lightOn);
//       remote.pressButton();

//       // Turn the light off
//       remote.setCommand(lightOff);
//       remote.pressButton();
//   }
// }


// Explanation
// 1. Command Interface (Command): Declares the execute method that all concrete commands will implement.
// 2. Concrete Commands (LightOnCommand and LightOffCommand): These classes implement the Command interface and define the specific actions that should be performed when the command is executed.
// 3. Receiver (Light): The class that knows how to perform the actual actions (turning the light on or off).
// 4. Invoker (RemoteControl): The object that invokes the command. It doesn’t need to know the details of the command, just that it can execute it.
// 5. Client: Sets up the commands and associates them with the invoker.


// Benefits of the Command Pattern
// 1. Decoupling: The sender of a request is decoupled from the receiver of the request.
// 2. Undo/Redo Operations: It’s easier to implement undo and redo functionality by storing command objects.
// 3. Queuing Requests: Commands can be queued or logged for delayed execution.
// 4. Extensibility: Adding new commands is straightforward and doesn’t require changes to existing code.

// In summary, the Command Pattern is useful when you need to parameterize objects with operations, support undo/redo functionality, or queue operations for execution.