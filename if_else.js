// "I am a string" is true
// false	is false
// null is false
// undefined	is false
// 0	is false
// "" is false

if (input = "I am a string") {
    console.log(true)
} else if (input = "") {
    console.log("The empty string is falsy (the only falsy string)")
} else if (input = 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else if (input = undefined) {
    console.log("undefined is falsy")
} else if (input = null) {
    console.log("The null value is falsy")
} else if (input = false) {
    console.log("The boolean value false is falsy")
};

//const sum = x + y;
// x + y "is less than -1000";
// x + y "is a negative number";
// x + y "is equal to 0";
// x + y "is larger than 0";
// x + y "is greater than 100"

const x = 50;
const y = 51;


if (sum < -1000) {
    console.log(sum + "is less than -1000")
} else if (sum < 0) {
    console.log(sum + "is a negative number")
} else if (sum = 0) {
    console.log(sum + "is equal to 0")
} else if (sum > 0 && sum < 100) {
    console.log(sum + "is greater than 0")
} else if (sum > 100) {
    console.log(sum + "is greater than 100")
};

// x & y ≥ 5
// 5 & 6 are true
// 10 & 11 are true
// 0 & 0 are false
// 1000 & -1000 are false
// 6 & 4 are false
// 5 & 5 are true

const x = 5;
const y = 5;

if (x ≥ 5 & y ≥ 5) {
    console.log(true)
} else {
    console.log(false)
}

// const is true if 
// x = y or,
// a = b 
// otherwise const is false

if (x = y && a = b) {
    console.log(true);
} else {
    console.log(false);
}
