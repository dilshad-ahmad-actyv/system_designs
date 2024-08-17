// The Observer Design Pattern is a behavioral design pattern used to allow an object (known as the subject) to notify a list of dependent objects (observers) about state changes, without needing to know who or how many observers there are. This pattern is commonly used in scenarios where changes in one part of a system should automatically reflect in other parts, such as in user interface systems, event handling, or messaging systems.

// Key Concepts
// 1. Subject: The object that maintains a list of observers and notifies them of any changes.
// 2. Observer: The interface or abstract class that defines a method for receiving updates from the subject.
// 3. Concrete Observer: Implements the observer interface and reacts to updates from the subject.
// 4. Concrete Subject: Implements the subject interface, maintains the state, and notifies observers of changes.


// Real-Life Example

// Consider a weather station that monitors weather conditions and updates various displays like a temperature display, humidity display, and a forecast display. When the weather station’s measurements change, all displays should be updated automatically.

// Implementing the Observer Pattern
// Here’s how you can implement the Observer Design Pattern using a weather station example:

// 1. Define the Subject Interface:
// This interface allows observers to subscribe, unsubscribe, and notify them of changes.

// interface Subject {
//   addObserver(observer: Observer): void;
//   removeObserver(observer: Observer): void;
//   notifyObservers(): void;
// }

// 2. Define the Observer Interface:
// This interface requires implementing a method to update the observer when the subject changes.

// interface Observer {
//   update(temperature: number, humidity: number): void;
// }

// 3. Implement the Concrete Subject:
// This class maintains the state and notifies observers of changes.

// class WeatherStation implements Subject {
//   private observers: Observer[] = [];
//   private temperature: number = 0;
//   private humidity: number = 0;

//   public addObserver(observer: Observer): void {
//       this.observers.push(observer);
//   }

//   public removeObserver(observer: Observer): void {
//       this.observers = this.observers.filter(o => o !== observer);
//   }

//   public notifyObservers(): void {
//       for (const observer of this.observers) {
//           observer.update(this.temperature, this.humidity);
//       }
//   }

//   public setMeasurements(temperature: number, humidity: number): void {
//       this.temperature = temperature;
//       this.humidity = humidity;
//       this.notifyObservers();
//   }
// }

// 4. Implement Concrete Observers:
// These classes react to updates from the subject.

// *Temperature Display:

// class TemperatureDisplay implements Observer {
//   public update(temperature: number, humidity: number): void {
//       console.log(`Temperature Display: Temperature is ${temperature}°C`);
//   }
// }

// *Humidity Display:

// class HumidityDisplay implements Observer {
//   public update(temperature: number, humidity: number): void {
//       console.log(`Humidity Display: Humidity is ${humidity}%`);
//   }
// }

// 5. Client Code:
// Set up the weather station and displays, then update measurements.

// class WeatherApp {
//   public static main(): void {
//       const weatherStation = new WeatherStation();

//       const tempDisplay = new TemperatureDisplay();
//       const humidityDisplay = new HumidityDisplay();

//       weatherStation.addObserver(tempDisplay);
//       weatherStation.addObserver(humidityDisplay);

//       // Update weather measurements
//       weatherStation.setMeasurements(25, 65); // Output: Temperature Display: Temperature is 25°C; Humidity Display: Humidity is 65%
//       weatherStation.setMeasurements(30, 70); // Output: Temperature Display: Temperature is 30°C; Humidity Display: Humidity is 70%
//   }
// }

// // Run the WeatherApp example
// WeatherApp.main();

// Explanation
// 1. Subject Interface (Subject): Defines methods for managing observers and notifying them of changes.
// 2. Observer Interface (Observer): Defines the update method that observers use to get updated information from the subject.
// 3. Concrete Subject (WeatherStation): Manages the state (temperature and humidity) and notifies all registered observers when the state changes.
// 4. Concrete Observers (TemperatureDisplay, HumidityDisplay): Implement the update method to handle changes in the subject’s state and display updated information.
// 5. Client (WeatherApp): Sets up the subject and observers, and triggers state changes to demonstrate the pattern.

// Benefits of the Observer Pattern
// 1. Loose Coupling: The subject and observers are loosely coupled. The subject does not need to know the details of the observers, and observers only need to know how to respond to updates.
// 2. Dynamic Relationships: Observers can be added or removed at runtime, making the pattern flexible and dynamic.
// 3. Automatic Updates: Observers are automatically notified of changes, which helps keep the system in sync.

// Summary
// The Observer Design Pattern is useful for managing and synchronizing changes across different parts of a system. By defining a subject that notifies observers of state changes, and having observers react to these changes, you can create a system where components interact with each other in a loosely coupled and efficient manner. The weather station example illustrates how various displays (observers) update automatically when the weather measurements (subject) change.