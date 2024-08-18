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