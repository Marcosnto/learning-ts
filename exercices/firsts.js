"use strict";
const product = "book";
const price = 200;
const car = {
    brand: "Audi",
    doors: 5,
};
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar('3', "3") //error!!
const nintendo = {
    name: "Nintendo",
    price: "2000",
};
function transformPrice(product) {
    product.price = "R$ " + product.price;
    return product;
}
console.log(transformPrice(nintendo));
