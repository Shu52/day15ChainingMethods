// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let intSort = integers.sort(function(a,b){return b-a;});
console.log(intSort);


function greaterThan19(array){
    return array < 19;    
}
console.log (intSort.filter(greaterThan19))

 let intFiltered = intSort.filter(greaterThan19);
 console.log(intFiltered)

let intMultiplied = intFiltered.map(function(x){
 return x * 1.5 -1
})
console.log(intMultiplied)

 let intSum = intMultiplied.reduce(
    (currentTotal, next) => currentTotal + next
);
 console.log(intSum)
