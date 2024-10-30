
// Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.
// Return true if it is possible. Otherwise, return false.

var isPossibleDivide = function (nums, k) {
    let len = nums.length
    let map = {}
    nums.sort((a, b) => a - b)

    if (len % k !== 0) return false
    for (let i = 0; i < len; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1

    }

    for (let num of nums) {
        if (map[num]) {
            for (let i = 0; i < k; i++) {
                let current = num + i
                if (!map[current]) {
                    return false
                }
                map[current]--
            }
        }
    }
    return true


    return false

};