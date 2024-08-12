const car = {
Brand: "Toyota", Model: "Supra",
Year: "2005",
Color: "Yellow"
};
console.log("\nOriginal Properties: \n", car);
const keys=Object.keys(car);
delete car[keys[1]];
console.log("\nAfter Deletion:\n", car);
console.log("\nThe length of the object is:", keys.length - 1);
