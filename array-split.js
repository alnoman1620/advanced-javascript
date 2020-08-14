// array slice//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
// console.log(part);
// console.log(nums);

// array splice//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = nums.splice(2, 5);
// console.log(removed);
// console.log(nums);

// splice inject//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = nums.splice(2, 5, 1620, 1995);
// console.log(removed);
// console.log(nums);

//joim//
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 5, 1620, 1995);
const together = nums.join("");
console.log(together);
