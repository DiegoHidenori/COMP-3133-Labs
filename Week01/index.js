console.log(`Week 1 - Buffer Examples`)

// Create a buffer
let buf1 = Buffer.from('Hello', 'ascii')


console.log(buf1);
// template literals
console.log(`buf1 : ${buf1}`);
// console.log(`5 plus 6  is ${5 + 6}`);
console.log(buf1.toString());
console.log(`Buffer in JSON format : ${buf1.toJSON()}`);

// Task - write a loop to iterate over the buffer
// Show the value of element
console.log(`buf1[0] : ${buf1[0]}`);
console.log(`buf1[3] : ${buf1[3]}`);

for (let s in buf1) {
    console.log(`Item ${s} is ${buf1[s]}`);
}

for (let i = 0; i < buf1.length; i++) {
    console.log(`Item ${i} is ${buf1[i]}`);
}

console.log(`number of elements in buffer : ${buf1.length}`);

let x = Buffer.allocUnsafe(4);
console.log(x);

x = Buffer.byteLength(buf1);
console.log(x);

let first = Buffer.alloc(20); // Initialized 'first' with a length of 20.
console.log(`First: ${first}`);
first = Buffer.from('Diego', 'utf8'); // The length is mutable. I thought that you would keep the initial space of 20.
console.log(`First: ${first}`);

let last = Buffer.from('Tsukayama', 'utf8');
console.log(`Last: ${last}`);

// Combining the variables
console.log(`Combined: ` + [first, last]);

console.log(first);
console.log(last);

last.copy(first, 1) // When you copy, the length stays the same. This gives 'DTsuk'.
console.log(first.toString());

// console.log(`Buffer in String format: ${buf1.toString()}`);
// console.log(`Buffer in JSON format: ${buf1.toJSON()}`);
// console.log(`Buffer in Hex format: ${buf1.toString('hex')}`);
// console.log(`Buffer in UTF-8 format: ${buf1.toString('utf-8')}`);
// console.log(`Buffer in UTF-16le format: ${buf1.toString('utf-16le')}`);

last.write('COMP', 4);
console.log(last);
console.log(`last : ${last}`);