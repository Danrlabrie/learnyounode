var numsarray = process.argv.slice(2)
var total = 0;
for(var i = 0; i<numsarray.length; i++) {
	total += +numsarray[i];
}

console.log(total)

