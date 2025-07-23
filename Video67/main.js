const fs = require("fs");
// console.log(fs)

console.log("starting..");
// fs.writeFileSync("shivam.txt","Shivam is a good boy");

fs.writeFile("shivam2.txt","Shivam is a good boy" ,()=>{
    console.log("done..."),
    fs.readFile("shivam2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("harry.txt","harry robo",(e,d)=>{
    console.log(d);
})
console.log("ending");
