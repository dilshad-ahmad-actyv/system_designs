// The Strategy Design Pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. Instead of embedding the algorithm within the client code, the pattern allows for defining a family of algorithms, encapsulating each one, and making them interchangeable. This promotes flexibility and allows changing the algorithm without altering the client code.

// Think of the Strategy Pattern as a way to define a set of rules or methods for doing something and then choose which one to use at runtime. It’s like having different strategies or methods to achieve a goal and being able to switch between them easily.

// Key Concepts
// 1. Strategy: This is a general idea or a method for doing something (like different ways to solve a problem).
// 2. Concrete Strategies: These are specific implementations of the Strategy. For example, if the Strategy is "how to pay", the Concrete Strategies could be "Pay with Credit Card" or "Pay with PayPal".
// 3. Context: This is the part that uses a Strategy to perform an action. It can change which Strategy it uses without changing the code that uses it.

// Simple Example: Sorting Numbers
// Imagine you have a list of numbers and you want to sort them. You can use different sorting algorithms (strategies) like bubble sort or quick sort. Instead of hardcoding one way to sort the numbers, you can use the Strategy Pattern to choose the sorting method dynamically.

// Strategy Interface
class SortStrategy {
  sort(array) {
      throw new Error('This method should be overridden');
  }
}

// Concrete Strategy: Bubble Sort
class BubbleSort extends SortStrategy {
  sort(array) {
      for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array.length - 1; j++) {
              if (array[j] > array[j + 1]) {
                  // Swap elements
                  [array[j], array[j + 1]] = [array[j + 1], array[j]];
              }
          }
      }
      return array;
  }
}

// Concrete Strategy: Quick Sort
class QuickSort extends SortStrategy {
  sort(array) {
      if (array.length <= 1) return array;

      const pivot = array[Math.floor(array.length / 2)];
      const left = array.filter(x => x < pivot);
      const right = array.filter(x => x > pivot);
      const middle = array.filter(x => x === pivot);

      return [...this.sort(left), ...middle, ...this.sort(right)];
  }
}

// Context
class SortedList {
  constructor(strategy) {
      this.strategy = strategy;
  }

  setStrategy(strategy) {
      this.strategy = strategy;
  }

  sortArray(array) {
      return this.strategy.sort(array);
  }
}

// Client Code
const bubbleSort = new BubbleSort();
const quickSort = new QuickSort();

const list = new SortedList(bubbleSort);
console.log(list.sortArray([5, 3, 8, 1, 2])); // Using Bubble Sort

list.setStrategy(quickSort);
console.log(list.sortArray([5, 3, 8, 1, 2])); // Now using Quick Sort

// Benefits
// Flexibility: Easily switch between different algorithms or methods (strategies) at runtime.
// Cleaner Code: Keeps sorting logic separate from the code that uses it.
// Extensibility: Add new sorting methods (strategies) without changing existing code.

// In summary, the Strategy Pattern helps you organize and switch between different ways to perform a task, making your code more flexible and easier to manage.

// Constructor vs. setStrategy

// Using Constructor

// When you pass a strategy through the constructor, you set the strategy once at the time of object creation. This is straightforward and works well if you know in advance which strategy you need and you don't expect to change it.

// Using setStrategy
// The setStrategy method allows you to change the strategy of an existing SortedList instance. This is useful when:

// Runtime Flexibility: You might need to switch strategies based on runtime conditions, user choices, or other dynamic factors.

// Single Instance Usage: If you want to reuse the same SortedList object but with different strategies, you can change the strategy on the fly without creating new instances.

// Benefits of setStrategy
// Dynamic Changes: Easily switch strategies without needing to instantiate a new SortedList object each time.
// Reusability: Reuse the SortedList object with different strategies, which can be more efficient and simpler in scenarios where object instantiation is costly.
// Decoupling: Keeps the context (SortedList) independent from specific strategies, adhering to the Open/Closed Principle.

// Summary
// Constructor Initialization: Best for scenarios where the strategy is known ahead of time and doesn’t need to change.
// setStrategy Method: Provides flexibility for changing strategies dynamically and allows for reusing the same instance with different strategies based on runtime conditions.
// In essence, the setStrategy method enhances the flexibility of your design, making it easier to adapt to changing requirements without creating new instances.




