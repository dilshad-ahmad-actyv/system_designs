// Designing an elevator system in TypeScript involves modeling the different components such as the Elevator, the Control System, Requests, and Floors. Below is a basic implementation that includes key classes and methods.

// ### 1. **Create the Elevator Class**

// The `Elevator` class represents an individual elevator, handling its state, movement, and requests.

// ```typescript
// enum Direction {
//     UP = "UP",
//     DOWN = "DOWN",
//     IDLE = "IDLE"
// }

// class Elevator {
//     private currentFloor: number;
//     private direction: Direction;
//     private requests: number[];

//     constructor() {
//         this.currentFloor = 0; // assuming ground floor as the starting point
//         this.direction = Direction.IDLE;
//         this.requests = [];
//     }

//     public move(): void {
//         if (this.requests.length === 0) {
//             this.direction = Direction.IDLE;
//             return;
//         }

//         const nextFloor = this.requests[0];
//         if (nextFloor > this.currentFloor) {
//             this.direction = Direction.UP;
//             this.currentFloor++;
//         } else if (nextFloor < this.currentFloor) {
//             this.direction = Direction.DOWN;
//             this.currentFloor--;
//         }

//         if (this.currentFloor === nextFloor) {
//             this.requests.shift();
//         }
//     }

//     public addRequest(floor: number): void {
//         if (!this.requests.includes(floor)) {
//             this.requests.push(floor);
//             this.requests.sort((a, b) => this.direction === Direction.UP ? a - b : b - a);
//         }
//     }

//     public getCurrentFloor(): number {
//         return this.currentFloor;
//     }

//     public getDirection(): Direction {
//         return this.direction;
//     }

//     public getRequests(): number[] {
//         return this.requests;
//     }
// }
// ```

// ### 2. **Create the Control System Class**

// The `ElevatorControlSystem` class manages multiple elevators and dispatches requests to them.

// ```typescript
// class ElevatorControlSystem {
//     private elevators: Elevator[];

//     constructor(elevatorCount: number) {
//         this.elevators = [];
//         for (let i = 0; i < elevatorCount; i++) {
//             this.elevators.push(new Elevator());
//         }
//     }

//     public requestElevator(floor: number, direction: Direction): void {
//         const bestElevator = this.findBestElevator(floor, direction);
//         bestElevator.addRequest(floor);
//     }

//     private findBestElevator(floor: number, direction: Direction): Elevator {
//         // Simple logic to find the best elevator
//         let bestElevator = this.elevators[0];
//         let minDistance = Number.MAX_SAFE_INTEGER;

//         for (const elevator of this.elevators) {
//             const distance = Math.abs(elevator.getCurrentFloor() - floor);
//             if (
//                 elevator.getDirection() === direction ||
//                 elevator.getDirection() === Direction.IDLE
//             ) {
//                 if (distance < minDistance) {
//                     bestElevator = elevator;
//                     minDistance = distance;
//                 }
//             }
//         }

//         return bestElevator;
//     }

//     public step(): void {
//         this.elevators.forEach(elevator => elevator.move());
//     }

//     public getStatus(): void {
//         this.elevators.forEach((elevator, index) => {
//             console.log(`Elevator ${index + 1}: Floor ${elevator.getCurrentFloor()}, Direction: ${elevator.getDirection()}, Requests: [${elevator.getRequests().join(", ")}]`);
//         });
//     }
// }
// ```

// ### 3. **Simulation Example**

// You can simulate the elevator system by creating an instance of `ElevatorControlSystem` and making requests.

// ```typescript
// const controlSystem = new ElevatorControlSystem(3); // 3 elevators in the system

// // Requests from various floors
// controlSystem.requestElevator(5, Direction.UP);
// controlSystem.requestElevator(1, Direction.UP);
// controlSystem.requestElevator(3, Direction.DOWN);

// // Simulate system steps
// controlSystem.step();
// controlSystem.getStatus();

// controlSystem.step();
// controlSystem.getStatus();

// controlSystem.step();
// controlSystem.getStatus();
// ```

// ### 4. **Explanation**

// - **Elevator Class:**
//   - **Current Floor:** Tracks the elevator's current floor.
//   - **Direction:** Tracks whether the elevator is going `UP`, `DOWN`, or is `IDLE`.
//   - **Requests:** A list of floors the elevator needs to visit.
//   - **Move:** Moves the elevator towards the next requested floor.
//   - **Add Request:** Adds a new request and sorts it based on the current direction.

// - **ElevatorControlSystem Class:**
//   - **Elevators:** An array of elevators managed by the control system.
//   - **Request Elevator:** Adds a floor request to the best-suited elevator.
//   - **Find Best Elevator:** Simple logic to find the closest available elevator that is moving in the desired direction or is idle.
//   - **Step:** Moves all elevators one step closer to fulfilling their requests.
//   - **Get Status:** Outputs the current state of all elevators.

// ### 5. **Possible Enhancements**
// - **Scheduling Algorithms:** Implement more advanced algorithms for assigning elevators to requests.
// - **Handling Multiple Requests:** Improve handling of multiple requests, including reordering based on priority or floor proximity.
// - **Optimized Request Queue:** Dynamically adjust the request queue based on new requests and current elevator direction.

// This basic design can be extended to handle more complex scenarios, such as handling multiple floors, optimizing elevator allocation, and even supporting express elevators that skip certain floors.
