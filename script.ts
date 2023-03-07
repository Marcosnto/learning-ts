const product: string = "book" 
const price: number = 200;

const car = {
    brand: "Audi",
    doors: 5
}

function somar(a: number, b: number){
    return a + b
}

somar(5,10)
// somar('3', "3") //error!!

const nintendo = {
    name: "Nintendo",
    price: "2000"
}

function transformPrice(product: {
    name: string,
    price: string
}){
    product.price = 'R$ ' + product.price 
    return product; 
}

console.log(transformPrice(nintendo))