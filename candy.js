// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

var candy = function (ratings) {
    let size = ratings.length
    let candies = new Array(size).fill(1)
    let sum = 0

    for (let i = 0; i < size; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1

    }
    for (let i = size - 1; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) candies[i] = candies[i + 1] + 1
        sum += candies[i]
    }
    return sum

};