// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function (flowerbed, n) {
    let total = flowerbed.length

    for (let i = 0; i < total; i++) {
        if (!n) break

        if ((flowerbed[i - 1] === 1 && (flowerbed[i + 1] ?? 1) === 1) && n && (i === total - 1)) return false
        else if ((flowerbed[i - 1] ?? 0) === 0 && (flowerbed[i + 1] ?? 0) === 0 && flowerbed[i] === 0) { flowerbed[i] = 1; n-- }

    }
    return n ? false : true
};