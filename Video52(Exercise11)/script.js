/* 
Write a program to calculate factorial of a number;
6

6! = 6*5*4*3*2*1
*/
// function Factorial(){
// let a = document.getElementById("num").value;
// if(a == 0) document.getElementById("result").innerText = 0;
// else{
//     let result = 1;
// for (let index = a; index >= 1 ; index--) {
//     result *= index;
// }
// document.getElementById("result").innerText = result;
// }
// }

function Factorial(){
    let a = parseInt(document.getElementById("num").value);
    if(a === 0){
        document.getElementById("result").innerText = 0;
        return;
    }
    let arr = new Array(a);
    for (let index = 0; index < arr.length; index++) {
        arr[index] = index+1;        
    }
    const multiply = (a,b)=> {
       return  a*b;
    }
    let result = arr.reduce(multiply);
    document.getElementById("result").innerText = result;
}   