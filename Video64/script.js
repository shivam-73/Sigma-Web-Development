async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c;
}
(async function main(){
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x,y, ...rest] = [1,2,34,45,5,56,6,7];
    // console.log(x,y,rest)

    console.log(a1);
    let obj = {
        a:1,
        b:2,
    c:3   }

    let {a,b} = obj;
    console.log({a,b});

    let arr = [1,4,6,2];
    console.log(arr[0] + arr[1] +arr[2])
    console.log(...arr);//Spread function ...var_name
    console.log(sum(...arr));

    var a1 = 6; //hoisting:- appears to move to the top of the code
})() // Immediately invoke function expression (IIFE);

