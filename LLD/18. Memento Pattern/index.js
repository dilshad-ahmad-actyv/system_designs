// The Memento Design Pattern is a behavioral design pattern that provides a way to restore an object to a previous state without exposing its internal structure. It is useful when you need to save and restore the state of an object, such as in undo/redo functionality or game save systems.

// ### Key Concepts

// 1. **Memento:** A class that captures and stores the internal state of an object. It provides a way to restore the object's state without exposing its internals.
// 2. **Originator:** The class whose state needs to be saved and restored. It creates a memento containing a snapshot of its current state.
// 3. **Caretaker:** The class that is responsible for keeping track of mementos and managing their lifecycle. It requests mementos from the originator and restores the originator's state from a memento.

// ### Real-Life Example: Text Editor with Undo/Redo

// Imagine a text editor where you can type text and use undo/redo functionality to revert to previous versions of the text. The Memento Pattern can be used to manage these versions.

// ### Components

// 1. **Memento:**

//    Holds the state of the text editor at a particular point in time.

//    ```typescript
//    class Memento {
//        private text: string;

//        constructor(text: string) {
//            this.text = text;
//        }

//        public getText(): string {
//            return this.text;
//        }
//    }
//    ```

// 2. **Originator:**

//    The text editor class that creates mementos and restores its state from them.

//    ```typescript
//    class TextEditor {
//        private text: string = '';

//        public setText(text: string): void {
//            this.text = text;
//        }

//        public getText(): string {
//            return this.text;
//        }

//        public save(): Memento {
//            return new Memento(this.text);
//        }

//        public restore(memento: Memento): void {
//            this.text = memento.getText();
//        }
//    }
//    ```

// 3. **Caretaker:**

//    Manages the mementos and allows the text editor to restore a previous state.

//    ```typescript
//    class History {
//        private mementos: Memento[] = [];

//        public addMemento(memento: Memento): void {
//            this.mementos.push(memento);
//        }

//        public getMemento(index: number): Memento | null {
//            return this.mementos[index] || null;
//        }
//    }
//    ```

// 4. **Client Code:**

//    Demonstrates the use of the Memento Pattern with the text editor.

//    ```typescript
//    class TextEditorDemo {
//        public static main(): void {
//            const editor = new TextEditor();
//            const history = new History();

//            editor.setText('First version');
//            history.addMemento(editor.save());

//            editor.setText('Second version');
//            history.addMemento(editor.save());

//            editor.setText('Third version');
//            console.log(`Current text: ${editor.getText()}`); // Output: Third version

//            // Undo to the previous version
//            editor.restore(history.getMemento(1)!);
//            console.log(`After undo: ${editor.getText()}`); // Output: Second version

//            // Undo to the very first version
//            editor.restore(history.getMemento(0)!);
//            console.log(`After another undo: ${editor.getText()}`); // Output: First version
//        }
//    }

//    // Run the TextEditorDemo example
//    TextEditorDemo.main();
//    ```

// ### Explanation

// 1. **Memento (`Memento`):** Stores the text of the editor. It allows the editor to be restored to a specific state without exposing its internal structure.

// 2. **Originator (`TextEditor`):** Manages the text and can create and restore mementos. It saves its state to a memento and restores its state from a memento.

// 3. **Caretaker (`History`):** Keeps track of mementos. It allows the user to undo or redo changes by storing and retrieving mementos.

// 4. **Client Code (`TextEditorDemo`):** Shows how to use the text editor, save its state, and restore previous states using the memento.

// ### Benefits of the Memento Pattern

// - **Encapsulation:** Keeps the state of the object encapsulated within the memento, protecting the internal details of the object from being exposed.
// - **Undo/Redo Functionality:** Simplifies the implementation of undo and redo functionality by storing snapshots of the object's state.
// - **Separation of Concerns:** Separates the responsibility of saving and restoring state from the object itself, leading to cleaner and more maintainable code.

// ### Summary

// The Memento Design Pattern is useful for saving and restoring the state of an object without exposing its internal structure. By using mementos to capture and restore states, the pattern provides a way to implement features like undo/redo in a clean and manageable way. In the text editor example, the pattern allows you to save versions of the text and revert to previous versions as needed, demonstrating how the pattern manages object state effectively.