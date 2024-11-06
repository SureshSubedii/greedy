// 1798. Maximum Number of Consecutive Values You Can Make

var getMaximumConsecutive = function (coins) {
    coins.sort((a, b) => a - b)
    let max = 0
    let index = 0
    let result = 0

    while (index < coins.length) {
        if (coins[index] <= max + 1) {
            max += coins[index]
        }
        index++

    }
    return max + 1

};