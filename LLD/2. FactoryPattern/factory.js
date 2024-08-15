// // Factory Design pattern

// interface Vehicle{
//   drive(); 
// }

// class Car implements Vehicle {
//   drive(){
//     console.log('Driving the car');
//   }
// }

// class Bikes implements Vehicle {
//   drive(){
//     console.log('Riding the bike')
//   }
// }

// // Factory class
// class VehicleFactory{
//   static createVehicle(type){
//     switch(type){
//       case 'car':
//         return new Car();
//         break;
//       case 'bikes':
//         return new Bikes();
//         break;
//       default:
//         throw new Error('Unknown vehicle type');
//     }
//   }
// }

// // client Code

// const car = VehicleFactory.createVehicle('car');
// car.drive();

// const bikes = VehicleFactory.createVehicle('bikes');
// bikes.drive();

// try {
//   const truck  = VehicleFactory.createVehicle('truck');

// } catch (error) {
//   console.error(error.message);
// }