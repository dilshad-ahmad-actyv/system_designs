// The **Composite Design Pattern** is a structural pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly. This pattern is particularly useful for dealing with complex tree structures where individual and composite objects need to be handled in the same way.

// ### Key Concepts

// 1. **Component:** An abstract class or interface that defines the common interface for both simple and complex objects. It typically includes operations that can be performed on individual objects or compositions of objects.

// 2. **Leaf:** A concrete class that implements the `Component` interface. It represents the end objects in the hierarchy that do not have any children.

// 3. **Composite:** A concrete class that implements the `Component` interface and can have child components. It represents objects that can contain other components (both `Leaf` and `Composite`).

// ### Real-Life Examples

// 1. **File System:**
//    - **Component:** `FileSystemComponent` (abstract class or interface)
//    - **Leaf:** `File` (represents a single file)
//    - **Composite:** `Directory` (represents a folder that can contain files or other directories)

// 2. **Organization Structure:**
//    - **Component:** `Employee` (abstract class or interface)
//    - **Leaf:** `Worker` (represents a regular employee)
//    - **Composite:** `Manager` (represents a manager who can have subordinate employees)

// 3. **Graphic Drawing:**
//    - **Component:** `Graphic` (abstract class or interface)
//    - **Leaf:** `Circle`, `Rectangle` (represent specific shapes)
//    - **Composite:** `Drawing` (represents a collection of shapes)

// ### Detailed Example: **File System**

// Let’s build a simplified version of a file system where we can represent files and directories. Both files and directories should be able to be listed, but directories can also contain other files or directories.

// 1. **Define the Component Interface (`FileSystemComponent`):**

//    This interface will define common operations like listing contents.

//    ```typescript
//    interface FileSystemComponent {
//        listContents(): void;
//    }
//    ```

// 2. **Create the Leaf Class (`File`):**

//    This class represents a file in the file system.

//    ```typescript
//    class File implements FileSystemComponent {
//        private name: string;

//        constructor(name: string) {
//            this.name = name;
//        }

//        public listContents(): void {
//            console.log(`File: ${this.name}`);
//        }
//    }
//    ```

// 3. **Create the Composite Class (`Directory`):**

//    This class represents a directory that can contain other files or directories.

//    ```typescript
//    class Directory implements FileSystemComponent {
//        private name: string;
//        private children: FileSystemComponent[] = [];

//        constructor(name: string) {
//            this.name = name;
//        }

//        public add(child: FileSystemComponent): void {
//            this.children.push(child);
//        }

//        public remove(child: FileSystemComponent): void {
//            const index = this.children.indexOf(child);
//            if (index >= 0) {
//                this.children.splice(index, 1);
//            }
//        }

//        public listContents(): void {
//            console.log(`Directory: ${this.name}`);
//            for (const child of this.children) {
//                child.listContents();
//            }
//        }
//    }
//    ```

// 4. **Using the Composite Pattern:**

//    Here’s how you can use these classes to create a file system structure and list its contents.

//    ```typescript
//    class CompositePatternDemo {
//        public static main(): void {
//            // Create files
//            const file1: FileSystemComponent = new File('file1.txt');
//            const file2: FileSystemComponent = new File('file2.txt');

//            // Create directories
//            const subDir: Directory = new Directory('subDir');
//            subDir.add(file1);
//            subDir.add(file2);

//            const mainDir: Directory = new Directory('mainDir');
//            mainDir.add(subDir);

//            // List contents
//            mainDir.listContents();
//        }
//    }

//    // Run the CompositePatternDemo example
//    CompositePatternDemo.main();
//    ```

// ### Explanation

// 1. **Component Interface (`FileSystemComponent`):** This defines a common interface for both `File` and `Directory`. It ensures that both can be used interchangeably when listing contents.

// 2. **Leaf (`File`):** Represents a single file. It implements the `FileSystemComponent` interface and provides its own implementation of `listContents()`.

// 3. **Composite (`Directory`):** Represents a directory that can contain other files or directories. It also implements `FileSystemComponent` and can manage a collection of children (both files and other directories).

// 4. **Client Code (`CompositePatternDemo`):** Demonstrates how to use the composite structure. It creates a file system with nested directories and files and lists all contents recursively.

// ### Benefits of the Composite Pattern

// - **Uniformity:** Treats individual objects and compositions of objects uniformly.
// - **Flexibility:** Allows you to create complex tree structures and manage them easily.
// - **Ease of Use:** Simplifies code when dealing with hierarchical structures, as the client code does not need to differentiate between leaf nodes and composites.

// ### Summary

// The Composite Design Pattern allows you to work with tree structures where both individual objects and compositions of objects can be treated uniformly. Using the file system example, you can see how files and directories are managed in a way that simplifies operations like listing contents. This pattern is useful for representing part-whole hierarchies and allows for easy extension and maintenance of complex structures.