//  Builder Design Pattern -

// The Builder Design Pattern is a creational design pattern that allows for the step-by-step construction of complex objects.
// It separates the construction of a complex object from its representation, enabling the same construction process to create different representations. This pattern is particularly useful when an object requires multiple steps or configurations to build.

// Key Components
// 1. Builder Interface: Defines the methods to build parts of the product.
// 2. Concrete Builder: Implements the builder interface to construct and assemble parts of the product.
// 3. Director: Responsible for managing the construction process using the builder.
// 4. Product: The final complex object that is constructed by the builder.

// Real-Life Example: Building a Computer

// Let’s create a scenario where we want to build a computer. A computer can have various configurations like a CPU, RAM, storage, and graphics card. Using the Builder pattern, we can construct different types of computers (e.g., a gaming computer, a work computer, etc.) with various configurations.

// Step 1: Define the Product
// First, we define the Computer class that represents the final product.

// Product
class Computer {
  constructor(cpu, ram, storage, graphicsCard) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.graphicsCard = graphicsCard;
  }

  displaySpecifications() {
    console.log(`Computer Specifications:
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        Graphics Card: ${this.graphicsCard}`);
  }
}

//   Step 2: Create the Builder Interface
// Next, we create the ComputerBuilder interface that defines methods for building the parts of the computer.
// Builder Interface
class ComputerBuilder {
  setCPU(cpu) {
    throw new Error("Method 'setCPU()' must be implemented.");
  }

  setRAM(ram) {
    throw new Error("Method 'setRAM()' must be implemented.");
  }

  setStorage(storage) {
    throw new Error("Method 'setStorage()' must be implemented.");
  }

  setGraphicsCard(graphicsCard) {
    throw new Error("Method 'setGraphicsCard()' must be implemented.");
  }

  build() {
    throw new Error("Method 'build()' must be implemented.");
  }
}

// Step 3: Create a Concrete Builder
// Now we implement the GamingComputerBuilder, which will construct a gaming computer.

// Concrete Builder
class GamingComputerBuilder extends ComputerBuilder {
  constructor() {
    super();
    this.cpu = null;
    this.ram = null;
    this.storage = null;
    this.graphicsCard = null;
  }

  setCPU(cpu) {
    this.cpu = cpu;
    return this;
  }

  setRAM(ram) {
    this.ram = ram;
    return this;
  }

  setStorage(storage) {
    this.storage = storage;
    return this;
  }

  setGraphicsCard(graphicsCard) {
    this.graphicsCard = graphicsCard;
    return this;
  }

  build() {
    return new Computer(this.cpu, this.ram, this.storage, this.graphicsCard);
  }
}

// Step 4: Create the Director
// The director will use the builder to construct a Computer.

// Director
class ComputerDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructGamingComputer() {
    return this.builder
      .setCPU("Intel i9")
      .setRAM("32GB")
      .setStorage("1TB SSD")
      .setGraphicsCard("NVIDIA RTX 3080")
      .build();
  }

  constructWorkComputer() {
    return this.builder
      .setCPU("Intel i5")
      .setRAM("16GB")
      .setStorage("512GB SSD")
      .setGraphicsCard("Integrated Graphics")
      .build();
  }
}

// Step 5: Using the Builder Pattern
// Now we can use the builder pattern to create different types of computers.

// Usage
const gamingComputerBuilder = new GamingComputerBuilder();
const director = new ComputerDirector(gamingComputerBuilder);

// Build a gaming computer
const gamingComputer = director.constructGamingComputer();
gamingComputer.displaySpecifications();

// Build a work computer
const workComputer = director.constructWorkComputer();
workComputer.displaySpecifications();

// Output
// Computer Specifications:
//   CPU: Intel i9
//   RAM: 32GB
//   Storage: 1TB SSD
//   Graphics Card: NVIDIA RTX 3080

// Computer Specifications:
//   CPU: Intel i5
//   RAM: 16GB
//   Storage: 512GB SSD
//   Graphics Card: Integrated Graphics

// Next: Builder vs Decorator Design pattern?
