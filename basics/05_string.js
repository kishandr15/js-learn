const name = "Kishan D r";
const age = 22;

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("s"));
console.log(name.substring(1, 4));
console.log(name.slice(1, 4));      //same as substring, but can take negative values
console.log(name.trim());           //removes the white spaces


//used backticks to interpolate the variables
console.log(`Hello, my name is ${name} and I am ${age} years old.`)

console.log("hello" + " world");

console.log(name.replace("Kishan", "Kisaaannn"));
console.log(name.includes("D"));                    //returns true or false

console.log(name.split(" "));          //splits the string into an array based on the separator


//another way to create a string, using the String constructor

const name1 = new String("Kishan D r");
console.log(name1);