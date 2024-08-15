// S - Single Responsibility Principle

// Tight coupled way

// class Marker{
//   name: String;
//   colour: String;
//   year: Number;
//   price: Number;

//   constructor(name: String, colour: String, year: Number, price: Number){
//     this.name = name;
//     this.colour = colour;
//     this.year = year;
//     this.price = price;
//   }
// }

// class Invoice{
//   private marker: Marker;
//   price quantity: Number;

//   public constructor(marker: Marker, quantity: Number){
//     this.marker = marker;
//     this.quantity = quantity;
//   }

//   calculateTotal(){
//     let price = (this.price) * (this.quantity);
//     return price;
//   }

//   printInvoice(invoice){
//     // print invoice
//   }

//   saveInvoice(){
//     // save invoice to database
//   }
// }

// Loose Coupled way

// class Marker{
//   name: String;
//   color: String;
//   year: Number;
//   price: Number;

//   constructor(name, color, year, price){
//     this.name = name;
//     this.color = color;
//     this.year = year;
//     this.price = price;
//   }
// }

// class CalculateTotal extends Marker{
//   quantity: Number;
//   calculate(){
//     let price = this.quantity * this.price;
//     return price;
//   }
// }

// class PrintInvoice{
//   print(){
//     // print invoice
//   }
// }

// class SaveInvoice{
//   save(){
//     // save invoice to database
//   }
// }