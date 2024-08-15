// SOLID - Liskov Substitution Principle
// IF class B is subtype of class A, we should be able to replace object of A with B, without breaking the behaviour of the program
// Subclass should extend the capability of parent class, not narrow it down.

// interface Bike{
//     turnOnEngine();
//     accelerate();
// }

// class MotorCycle implements Bike{
//     isEngineOn: Boolean;
//     speed: Number;

//     turnOnEngine(){
//         this.isEngineOn = true;
//     }

//     accelerate(){
//         this.speed += 10;
//     }
// }

// class Bicycle implements Bike{
//     turnOnEngine(){
//         throw new Error('There is no engine!')
//     }

//     accelerate(){
//         // increase speed
//     }
// }
