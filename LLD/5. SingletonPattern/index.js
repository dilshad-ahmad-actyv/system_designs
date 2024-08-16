// The Singleton Design Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. This pattern is useful when exactly one instance of a class is needed to coordinate actions across the system.

// Key Characteristics
// Single Instance: Ensures that only one instance of the class is created.
// Global Access: Provides a global point of access to the instance.
// Controlled Access: Manages the creation and access to the instance, which can be useful for managing shared resources.

// Real-Life Example: Configuration Manager
// Consider a scenario where we need a configuration manager to manage settings for an application. The configuration manager should be a single instance throughout the application to ensure consistent access to configuration settings.

// Singleton Class
class ConfigurationManager {
  constructor() {
    if (ConfigurationManager.instance) {
      return ConfigurationManager.instance;
    }

    // Initialize with default configuration
    this.config = {
      apiEndpoint: "https://api.example.com",
      timeout: 5000,
      retries: 3,
    };

    // Store the single instance
    ConfigurationManager.instance = this;
  }

  // Method to get a configuration value
  get(key) {
    return this.config[key];
  }

  // Method to set a configuration value
  set(key, value) {
    this.config[key] = value;
  }
}

// Usage

// Create the first instance
const config1 = new ConfigurationManager();
console.log(config1.get("apiEndpoint")); // Output: https://api.example.com

// Modify the configuration
config1.set("timeout", 10000);

// Create another instance (it will be the same as the first one)
const config2 = new ConfigurationManager();
console.log(config2.get("timeout")); // Output: 10000

// Verify that both instances are indeed the same
console.log(config1 === config2); // Output: true

//   Summary

//   The Singleton Design Pattern ensures that a class has only one instance and provides a global point of access to that instance. This pattern is useful for managing shared resources or configurations in an application.
