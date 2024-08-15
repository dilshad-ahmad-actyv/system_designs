// SOLID - Open for extension, close for modification

// Tight coupled way

// class Marker {
//   name: String;
//   color: String;
//   year: String;
//   price: String;

//   constructor(name, color, year, price) {
//     this.name = name;
//     this.color = color;
//     this.year = year;
//     this.price = price;
//   }
// }

// class CalculateTotal {
//   quantity: Number;
//   marker: Marker;

//   calculate() {
//     const price = this.quantity * this.marker.price;
//     return price;
//   }
// }

// class PrintInvoice {
//   print() {
//     // print invoice
//   }
// }

// class SaveInvoice {
//   saveToDatabase() {
//     // save to databse
//   }

//   saveToFile() {
//     // save to file
//   }

//   saveToMongo() {
//     // save to mongodb
//   }
// }

// SOLID - Open for extension, close for modification

// Loose coupled way

// class Marker {
//   name: String;
//   color: String;
//   year: String;
//   price: String;

//   constructor(name, color, year, price) {
//     this.name = name;
//     this.color = color;
//     this.year = year;
//     this.price = price;
//   }
// }

// class CalculateTotal {
//   quantity: Number;
//   marker: Marker;

//   calculate() {
//     const price = this.quantity * this.marker.price;
//     return price;
//   }
// }

// class PrintInvoice {
//   print() {
//     // print invoice
//   }
// }

// interface SaveInvoice{
//     save();
// }

// class SaveToDatabase extends SaveInvoice {
//     save(){
//         // save to database;
//     }
// }

// class SaveToFile extends SaveInvoice{
//     save(){
//         // save to file
//     }
// }

// class SaveToMongoDB extends SaveInvoice{
//     save(){
//         // save to mongodb
//     }
// }
