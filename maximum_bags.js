/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
    let maxBags = 0
let combined = rocks.map((rock, index) => [rock, capacity[index], (  capacity[index] - rock)]).sort((a, b) => a[2] - b[2]);
    rocks = combined.map((item) => item[0])
    capacity = combined.map((item) => item[1])

    for (let i = 0; i < rocks.length; i++) {
        if (rocks[i] < capacity[i] && additionalRocks > 0) {
            let count = Math.min(additionalRocks, capacity[i] - rocks[i])
            if (rocks[i] + count === capacity[i]) {
                rocks[i] += count
                additionalRocks -= count
            }

        }
        if (rocks[i] === capacity[i]) maxBags++
    }
    return maxBags

};

// Optimized Alternative

var maximumBags = function (capacity, rocks, additionalRocks) {
let output = 0
for (let i in rocks) {
    rocks[i] = capacity[i] - rocks[i]
    output += rocks[i]
}
if (additionalRocks >= output) return rocks.length
rocks.sort((a,b) => a - b);
output = 0
for (let i in rocks) {
    output += rocks[i]
    if( output > additionalRocks) return i
        
}
}

// Revised
var maximumBags = function (capacity, rocks, additionalRocks) {
    let maxBags = 0
    let underFilledBags = capacity.map((item, index) => {
        let rock = item - rocks[index]
        return rock

    }).sort((a, b) => a - b)
    for (let i = 0; i < underFilledBags.length; i++) {
        additionalRocks -= underFilledBags[i]
        if (additionalRocks < 0) break
        maxBags++

    }
    return maxBags

}
