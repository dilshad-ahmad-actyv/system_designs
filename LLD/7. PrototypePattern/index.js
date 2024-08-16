// The Prototype Design Pattern is a pattern used in software design to create new objects by copying an existing object, known as the prototype. This is particularly useful when the cost of creating a new instance of an object from scratch is more expensive than copying an existing one. The pattern provides a way to create objects based on a template or blueprint, which can then be customized as needed.

// Key Concepts of the Prototype Pattern
// 1. Prototype: An object that serves as a prototype for creating other objects.
// 2. Clone: A method used to create a copy of the prototype.
// 3. Client: The code that uses the prototype to create new objects.

// How It Works
// 1. Define a Prototype: Create an object that contains common properties and methods.
// 2. Clone the Prototype: Use the prototype to create new instances, copying the existing object's properties.
// 3. Customize: The newly created objects can be customized or modified without affecting the prototype.

// Real-Life Example in JavaScript
// Let's consider a scenario where you have a complex configuration for creating different types of vehicles, like cars and motorcycles. Instead of creating each vehicle from scratch, you can use a prototype to simplify the creation process.

// Define the Prototype
class VehiclePrototype {
  constructor() {
      this.type = 'Vehicle';
      this.wheels = 4;
      this.engine = false;
  }

  clone() {
      // Create a shallow copy of the prototype
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  displayInfo() {
      console.log(`Type: ${this.type}, Wheels: ${this.wheels}, Engine: ${this.engine}`);
  }
}

// Create specific prototypes
const carPrototype = new VehiclePrototype();
carPrototype.type = 'Car';
carPrototype.engine = true;

const motorcyclePrototype = new VehiclePrototype();
motorcyclePrototype.type = 'Motorcycle';
motorcyclePrototype.wheels = 2;
motorcyclePrototype.engine = true;

// Client code: using prototypes to create new vehicles
const myCar = carPrototype.clone();
myCar.displayInfo(); // Output: Type: Car, Wheels: 4, Engine: true

const myMotorcycle = motorcyclePrototype.clone();
myMotorcycle.displayInfo(); // Output: Type: Motorcycle, Wheels: 2, Engine: true

// You can also create more customized vehicles
const customizedCar = carPrototype.clone();
customizedCar.color = 'Red';
console.log(customizedCar); // Output: VehiclePrototype { type: 'Car', wheels: 4, engine: true, color: 'Red' }
