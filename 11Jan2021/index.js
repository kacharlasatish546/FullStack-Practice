function Laptop(name, brand, price){
    this.lname = name;
    this.lbrand = brand;
    this.lprice = price;
}

var l1 = new Laptop("Mac","Apple",80000);
var l2 = new Laptop("HP","HP",50000);
var l3 = new Laptop("Lenovo","Lenovo",60000);
var l4 = new Laptop("Dell","Dell",70000);
var l5 = new Laptop("Samsung","Samsung",90000);

console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);
console.log(l5);