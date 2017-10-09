// Print
console.log("Hello JavaScript world!");

// var and let difference
var hello = "World";

let world = "Hello";

console.log(world + " " + hello);

// Morning/afternoon/evening/night
let date = new Date();

if (date.getHours >= 6 && date.getHours() < 12){
    console.log("Good morning");
} else if (date.getHours >= 12 && date.getHours < 18){
    console.log("Good afternoon");
} else if (date.getHours >= 18 && date.getHours < 22){
    console.log('Good evening');
} else {
    console.log('Good night');
}

// Truth tables

let t = true;
let f = false;

console.log(!t);
console.log(!f);

console.log(t && t);
console.log(f && f);
console.log(t && f);
console.log(f && t);

console.log(t && t);
console.log(f && f);
console.log(t && f);
console.log(f && t);

console.log(t || t);
console.log(f || f);
console.log(t || f);
console.log(f || t);

// Fibonacci sequence up to 100
let prev = 0;
let curr = 1;

console.log('0');
for (let i = 0; i < 100; i++) {
    console.log(curr);
    curr += prev;
    prev = curr - prev;
}

// Magic square

let array =  [[2, 7, 6], [9, 5, 1], [4, 3, 8]];

for (let i = 0; i <= 3; i++){
    let vertical = array[0][i] + array[1][i] + array[2][i];
    let horizontal = array[i][0] + array[i][1] + array[i][2];
}
