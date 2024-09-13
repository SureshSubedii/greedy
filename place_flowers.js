// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function (flowerbed, n) {
    let total = flowerbed.length
    let last = total - 1

    for (let i = 0; i < total; i++) {
        if (!n) break
        let prev = flowerbed[i - 1]
        let next = flowerbed[i + 1]
        let current = flowerbed[i]

        if ((prev === 0 || prev === undefined) && (next === 0 || next === undefined) && current === 0) {
            flowerbed[i] = 1
            n--
        }
        else if ((prev === 1 || prev === undefined) && (next === 1 || next === undefined) && n && i === last) return false

    }
    return n  === 0
};