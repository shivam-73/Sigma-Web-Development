import fs from "fs/promises";

let a = await fs.readFile("harry.txt")
console.log(a.toString())

// let b = await fs.writeFile("harry.txt","\n \n \n this is amazing promise")
fs.appendFile("harry.txt"," \n he loves Coding");
console.log(a.toString())