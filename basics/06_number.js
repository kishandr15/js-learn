const score = 100;
console.log(score); 

//another way to create a number, using the Number constructor
const balance = new Number(1000);
console.log(balance);

console.log(balance.toString());


//to use length property, we need to convert the number to string
console.log(balance.toString().length);

//toFixed() method is used to fix the number of decimal places
console.log(balance.toFixed(2));  //1000.00


//toPrecision() method is used to fix the number of digits
const otherNumber = 123.123456;
console.log(otherNumber.toPrecision(4));  //123.1


//toLocalString() method is used to convert the number to a string using the locale-specific version, en-IN in this case.

const rupees = 10000000000;
console.log(rupees.toLocaleString("en-IN"));  //10,00,00,00,000



// --------------------------Math object--------------------------------

console.log("Math Operations -----------------");

console.log(Math.abs(-100));  //100
console.log(Math.ceil(1.1));   //2
console.log(Math.floor(1.9));  //1
console.log(Math.round(1.5));  //2
console.log(Math.max(1, 2, 3, 4, 5));   // 5
console.log(Math.min(1, 2, 3, 4, 5));   // 1


console.log(Math.random());  //generates a random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);  //generates a random number between 1 and 9


//general formula to generate a random number between min and max.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  