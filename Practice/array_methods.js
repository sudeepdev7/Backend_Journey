let array = [2, 4, 6, 8, 10]

//multiplying each by 5 and adding 5 in initial value
var inc_array = array.map(function(value) {
    return (value * 3) + 5;
})

//element greater than 5
var flt_array = array.filter(function(value) {
    if (value > 5) { return true } else { return false }
})

console.log("Modified array: " + inc_array)
console.log("Filtered Array " + flt_array)

let string = ["laptop", "phone", "tablet", "monitor", "phone"]

var find_array = string.find(function(value) {
    if (value === "phone") { return value }
})

console.log("Found it" + find_array)

var index = string.indexOf("headphone")
console.log("Index of headphone is (-1 if not found)" + index)