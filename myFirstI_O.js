var fs = require("fs")


var string = (fs.readFileSync(''+ process.argv.slice(2) +'')).toString().split('\n')


console.log(string.length -1)