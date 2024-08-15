// Dependency Inversion principle
// class should depend on interfaces rather than concrete classes

// interface MouseInterface {
//   //
// }

// interface KeyBoardInterface {
//   //
// }

// class WiredMouse implements MouseInterface {
//   //
// }

// class BluetoothMouse implements MouseInterface {
//   //
// }

// class WiredKeyboard implements KeyBoardInterface {
//   //
// }
// class BluetoothKeyboard implements KeyBoardInterface {
//   //
// }

// class MacBook {
//   keybord: WiredKeyboard;
//   mouse: WiredMouse;

//   constructor() {
//     this.keybord = new WiredKeyboard();
//     this.mouse = new WiredMouse();
//   }
// }

// Correct way

// class MacBook {
//   keybord: KeyBoardInterface;
//   mouse: MouseInterface;

//   constructor(keybord: KeyBoardInterface, mouse: MouseInterface) {
//     this.keybord = keybord;
//     this.mouse = mouse;
//   }
// }
