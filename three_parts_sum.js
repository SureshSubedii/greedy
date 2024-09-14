// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.
var canThreePartsEqualSum = function(arr) {
    let count = 0
    let eachSum = 0
    let sum = arr.reduce((acc,curr) => acc + curr, 0)
    console.log(sum)
    let total = 0
    eachSum = sum / 3

    for(let i = 0; i < arr.length; i ++){
        total += arr[i]
        if(count === 3) return true
        if(total === eachSum){
            count ++
            total = 0
        }

    }
    return count === 3
};