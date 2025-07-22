var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);
// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string
console.log(b)



/*
 node .\server.js   Run the code
 npm init  Create package.json file
  npm install -slugify  Install the package slugify

*/