// Ojbect Pool Design Pattern - it manages the pool of reusable objects like DB connection object.
// Borrow from the pool -> use it -> then return it back to the pool
// Object Pool Design is always used with  the Singleton design pattern and requires thread safety while acquiring and releasing the resources.
// The Object Pool Design Pattern is a pattern used in software design to manage the reuse of objects, which can be expensive to create and destroy frequently. Instead of creating and destroying objects on demand, a pool of reusable objects is maintained, which helps in improving performance and resource management.

// Key Concepts of the Object Pool Pattern
// 1. Object Pool: A container that holds a set of reusable objects.
// 2. Objects: Typically, these are expensive to create or manage resources that should be reused rather than recreated.
// 3. Client: The code that uses the objects from the pool.

// How It Works
// 1. Initialization: A pool is initialized with a set number of objects.
// 2. Checkout: When a client needs an object, it checks out an object from the pool.
// 3. Usage: The client uses the object.
// 4. Check-in: When the client is done with the object, it checks the object back into the pool.
// 5. Reuse: The pool provides the checked-in object to other clients who need it.


// Real-Life Example in JavaScript
// Imagine you have a game where players need to shoot projectiles. Creating and destroying projectiles can be expensive. Instead of creating a new projectile every time one is needed, you can use an object pool to manage and reuse them.

// Define a Projectile class
class Projectile {
  constructor() {
      this.active = false;
  }

  activate() {
      this.active = true;
      console.log("Projectile activated");
  }

  deactivate() {
      this.active = false;
      console.log("Projectile deactivated");
  }
}

// Define the Object Pool
class ProjectilePool {
  constructor(size) {
      this.pool = [];
      for (let i = 0; i < size; i++) {
          this.pool.push(new Projectile());
      }
  }

  get() {
      for (let i = 0; i < this.pool.length; i++) {
          if (!this.pool[i].active) {
              this.pool[i].activate();
              return this.pool[i];
          }
      }
      // If no inactive projectiles, create a new one (optional)
      const newProjectile = new Projectile();
      newProjectile.activate();
      this.pool.push(newProjectile);
      return newProjectile;
  }

  release(projectile) {
      projectile.deactivate();
  }
}

// Usage example
const pool = new ProjectilePool(5);

// Client code: firing projectiles
const projectile1 = pool.get(); // Gets an inactive projectile from the pool
const projectile2 = pool.get(); // Gets another inactive projectile from the pool

// Return projectiles to the pool
pool.release(projectile1);
pool.release(projectile2);

// Inactive projectiles are now available for reuse

// By using the object pool pattern, you avoid the overhead of frequently creating and destroying projectiles, which can lead to performance improvements, especially in scenarios with high object churn.