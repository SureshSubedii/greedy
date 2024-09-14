// You are given a 0-indexed integer array nums representing the contents of a pile, where nums[0] is the topmost element of the pile.
// In one move, you can perform either of the following:
// If the pile is not empty, remove the topmost element of the pile.
// If there are one or more removed elements, add any one of them back onto the pile. This element becomes the new topmost element.
// You are also given an integer k, which denotes the total number of moves to be made.
// Return the maximum value of the topmost element of the pile possible after exactly k moves. In case it is not possible to obtain a non-empty pile after k moves, return -1.

var maximumTop = function (nums, k) {
    if (nums.length === 1 && k == 0) return nums;
    if (nums.length === 1 && k % 2 !== 0) return -1;
    let max = Math.max(...nums.slice(0, Math.abs(k - 1)));
    return max > nums[k] || nums[k] === undefined ? max : nums[k];
};

//Alternative

var maximumTop = function(nums, k) {
    const MIN = Number.MIN_SAFE_INTEGER;
    const n = nums.length;
    
    if (k === 0) return nums[0];
    if (n === 1 && k % 2 == 1) return -1; // if there is only 1 item and k is odd, then the last move always will be removing the item
    if (k === 1) return nums[1];
    if (k > n) return Math.max(...nums);
    
    let max = MIN;
    
    for (let i = 1; i <= k - 1; ++i) {
        const num = nums[i - 1];
        max = Math.max(max, num);
    }
   
    if (k < n) return Math.max(max, nums[k]); // If there is 1 or more item than k in the array, then the two choices we have is to remove
                                              // k elements which will make the nums[k] be the topmost element or removing k - 1 elements
                                              // and putting the largest number from there back onto the pile.
    
    return max;
};