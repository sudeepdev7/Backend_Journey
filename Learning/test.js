arr = [12, 7, 18, 5, 24, 9]

var newarr = arr.filter(function(val) {
    return (val > 10)
})

var mularr = arr.map(function(l) {
    return l * 5;
})

var fil = arr.find(function(val) {
    return (val % 5 == 0)
})

console.log("Greater than 10:  " + newarr)
console.log("Multiply by 5:  " + mularr)
console.log("Divisible by 5:  " + fil)


arr.forEach(function(value) {
    console.log(value + " ")
})