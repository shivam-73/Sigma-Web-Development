let arr = [1,2,3,4,5]
console.log(arr);
// console.log(arr.length,typeof arr)

// console.log(arr[0])
// console.log(arr[3])

arr[0] = 56734
// console.log(arr[0])

// let a = "harry";
// console.log(a[0])

// console.log(arr.toString());
// console.log(arr.join(" and "))

// console.log(arr.pop()); // pop element from last

// console.log(arr);

// console.log(arr.push(50)); // push element from last

// arr.shift(); //pop element from front
// console.log(arr);

// arr.unshift(100); //push element from front
// console.log(arr);
arr.push(-2);

arr.sort();
console.log(arr);

let a1 =[1,2,3];
let a2 = [5,6,7];
let a3 = [8,9,0];
console.log(a1.concat(a2, a3));

arr.splice(1,2); // delete 2 elements from index 1
console.log(arr);