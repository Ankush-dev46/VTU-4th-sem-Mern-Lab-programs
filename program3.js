const car ={
    Brand: "Toyota",
    Model: "Supra",
    Year: "2005",
    Color: "Yellow"
};
console.log("\nOriginal Properties: \n");
for(let key in car){
    console.log(`${key}: ${car[key]}`);
}
console.log(Object.keys(car))
const second = Object.keys(car)[1];
delete car[second];
console.log("\nAfter Deletion: \n");
for(let key in car){
    console.log(`${key}: ${car[key]}`);
}
console.log(Object.keys(car))
const length= Object.keys(car).length;
console.log("\nThe length of object is: ",length);