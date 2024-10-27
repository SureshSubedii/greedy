// Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.
// Return the shortest such subarray and output its length.


var findUnsortedSubarray = function (nums) {
    let left = 0
    let right = nums.length - 1
    for (let i = 0; i <= right; i++) {
        if (nums[i] > nums[i + 1]) {
            left = i;
            break
        } 
        else if( i === right) left = 1
    }

    for (let i = right; i >= 0; i--) {
        if (nums[i] < nums[i - 1]) {
            right = i; break
        } else if( i === 0) right = 0
    }
    if(left < right){
        let arr = nums.slice(left, right + 1)
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        for(let i = 0; i < left; i ++){
            if(min < nums[i]) left = i
        }
          for(let i = right + 1; i < nums.length; i ++){
            if(max > nums[i]) right = i
        }

    }

    let result =   right - left + 1
    return result

};