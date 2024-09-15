// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

var increasingTriplet = function (nums) {
    let smallestSoFar = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= smallestSoFar) {
            smallestSoFar = nums[i];
        } else if (nums[i] <= secondSmallest) {
            secondSmallest = nums[i];
        } else {
            return true;
        }
    }
    
    return false;
};
