/*
settle means resolve or reject
resolve means promise has settled successfully
reject means promise had not settled successfully
*/

// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },5000)
//     });
// }
async function getData(){
    //Simulate getting data from the server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    // console.log(data);
    return data;
}
async function main(){
    console.log("loading Modules.....");
    console.log("Do something else");

    let data = await getData();

    console.log(data);
    console.log("Process data");
    console.log("Task 2");
}
// data.then((v)=>{
//     console.log("data");
//     console.log("Load data.....");
// console.log("Load data.......");
// })
main();