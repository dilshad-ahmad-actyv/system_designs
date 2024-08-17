// The Mediator Design Pattern is a behavioral design pattern that defines an object (the mediator) that encapsulates how a set of objects interact. This pattern helps to reduce the dependencies between objects, making the system more flexible and easier to maintain. Instead of having objects communicate directly with each other, they communicate through the mediator, which handles the interaction logic.

// Key Concepts
// 1. Mediator: An interface that defines the method for communication between objects.
// 2. Concrete Mediator: Implements the mediator interface and coordinates communication between objects.
// 3. Colleague: The objects that interact with each other through the mediator. They communicate with the mediator rather than directly with each other.

// Real-Life Example
// Let’s consider a simplified example of a chat room where users can send messages to each other. Instead of users directly communicating with each other, they use a chat room (mediator) to send and receive messages. The chat room handles all interactions between users.

// Components of the Mediator Pattern

// 1. Mediator Interface:
// Defines the method for communicating between colleagues.

// interface ChatRoomMediator {
//   sendMessage(message: string, user: User): void;
//   addUser(user: User): void;
// }

// 2. Concrete Mediator:
// Implements the mediator interface and manages communication between users.

// class ChatRoom implements ChatRoomMediator {
//   private users: User[] = [];

//   public addUser(user: User): void {
//       this.users.push(user);
//       user.setMediator(this);
//   }

//   public sendMessage(message: string, user: User): void {
//       for (const u of this.users) {
//           if (u !== user) {
//               u.receive(message);
//           }
//       }
//   }
// }

// 3. Colleague:
// The users that interact through the mediator.

// class User {
//   private mediator: ChatRoomMediator;
//   private name: string;

//   constructor(name: string) {
//       this.name = name;
//   }

//   public setMediator(mediator: ChatRoomMediator): void {
//       this.mediator = mediator;
//   }

//   public send(message: string): void {
//       console.log(`${this.name} sends: ${message}`);
//       this.mediator.sendMessage(message, this);
//   }

//   public receive(message: string): void {
//       console.log(`${this.name} receives: ${message}`);
//   }
// }


// 4. Client:
// Sets up the mediator and users, and initiates communication.

// class ChatApp {
//   public static main(): void {
//       const chatRoom: ChatRoomMediator = new ChatRoom();

//       const user1 = new User('Alice');
//       const user2 = new User('Bob');
//       const user3 = new User('Charlie');

//       chatRoom.addUser(user1);
//       chatRoom.addUser(user2);
//       chatRoom.addUser(user3);

//       user1.send('Hello everyone!');
//       user2.send('Hi Alice!');
//   }
// }

// // Run the ChatApp example
// ChatApp.main();


// Explanation
// 1. Mediator Interface (ChatRoomMediator): Defines methods for sending messages and adding users.
// 2. Concrete Mediator (ChatRoom): Manages communication between users. When a user sends a message, the chat room sends it to all other users.
// 3. Colleague (User): Interacts through the mediator. It sends messages via the chat room and receives messages from the chat room.
// 4. Client (ChatApp): Sets up the chat room and users, and demonstrates sending and receiving messages.

// Benefits of the Mediator Pattern
// 1. Reduced Coupling: Colleagues are not directly dependent on each other, which makes the system easier to maintain and extend.
// 2. Centralized Control: The mediator centralizes communication logic, making it easier to manage interactions.
// 3. Simplified Communication: Simplifies the communication between objects by reducing the number of connections needed.

// Summary
// The Mediator Design Pattern is used to manage interactions between objects by introducing a mediator object that handles communication. This pattern helps reduce dependencies between objects, centralizes communication logic, and simplifies the overall system. In the chat room example, the chat room acts as a mediator, handling message exchanges between users and allowing them to interact without directly knowing about each other.


// Concept
// The Mediator Design Pattern helps manage complex interactions between objects by using a central "mediator" object. This mediator handles all communication between the objects, reducing the direct dependencies between them.

// Analogy: Air Traffic Control
// Imagine an airport with multiple airplanes taking off and landing. Each airplane needs to coordinate with others to ensure safe and efficient operations. If each airplane communicated directly with every other airplane, it would be chaotic and complex. Instead, there is an air traffic controller who manages all communication between the planes.

// Airplanes (Colleagues): Each airplane needs to communicate about its movements, but they don’t talk directly to each other.
// Air Traffic Control (Mediator): The air traffic controller handles all communication between airplanes, ensuring that they don’t interfere with each other.

// Components of the Mediator Pattern
// 1. Mediator Interface: Defines how communication should be handled.
// 2. Concrete Mediator: Implements the communication logic and manages interactions between objects.
// 3. Colleagues: Objects that interact through the mediator instead of directly with each other.
